class Form {
  static cancel(elem) {
    const element = elem.parentElement
      .parentElement
      .parentElement;
    const ship = 'create-transport-ship';
    const truck = 'create-transport-truck';
    const cost = 'create-cost-delivery';

    element.classList.toggle('show');
    if (element.classList.contains(ship)) {
      Form.resetForm(`.${ship}`);
    } else if (element.classList.contains(truck)) {
      Form.resetForm(`.${truck}`);
    } else if (element.classList.contains(cost)) {
      Form.resetForm(`.${cost}`);
    }
    document.querySelector('#root').classList.toggle('opacity');
    document.body.classList.toggle('stop-scrolling');
  }

  static getDataFromForm(formSelector) {
    const inputs = document.querySelectorAll(`${formSelector} input`);
    const formData = {};

    inputs.forEach((item) => {
      const name = item.name.split('-')[1];
      const value = item.value.replace(/(<([^>]+)>)/ig, '');
      formData[name] = value;
    });
    Form.resetForm(formSelector);
    return formData;
  }

  static resetForm(formSelector) {
    document.querySelectorAll(`${formSelector} input`).forEach((item) => {
      const input = item;
      input.value = null;
      return input;
    });
  }

  static isValueSet(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === '' || arr[i] === null) return true;
    }
    return false;
  }

  static isEmpty(obj) {
    if (Object.keys(obj).length > 0) return false;
    return true;
  }
}
export default Form;
