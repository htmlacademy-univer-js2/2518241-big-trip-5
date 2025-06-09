
import Observable from '../framework/observable';


export default class OffersModel extends Observable{
  #offers = [];
  #pointsApiService = null;

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;

  }

  getOffers() {
    return this.#offers;
  }

  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
    } catch(err) {
      this.#offers = [];
    }
  }
}
