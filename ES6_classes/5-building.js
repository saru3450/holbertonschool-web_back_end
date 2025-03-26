/* eslint-disable*/

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = sqft;
  }

  // Getter pour sqft
  get sqft() {
    return this._sqft;
  }

  // Méthode abstraite
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
