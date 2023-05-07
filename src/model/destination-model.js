export default class DestinationModel {
  constructor(service) {
    this.service = service;
    this.destantions = this.service.getDestantions();
  }

  get() {
    return this.destantions;
  }

  getById(id) {
    return this.destantions
      .find((destination) => destination.id === id);
  }
}
