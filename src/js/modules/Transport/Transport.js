class Transport {
  showId() {
    return this.id;
  }

  showModel() {
    return this.model;
  }

  showProducedYear() {
    return this.producedYear;
  }

  showAvarageSpeed() {
    return this.averageSpeed;
  }

  showCapacityInPounds() {
    return (this.capacity * 2.2).toFixed(1);
  }
}
export default Transport;
