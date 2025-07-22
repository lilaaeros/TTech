import * as productModel from '../models/products.model.js';


export function getAll() {
  return productModel.getAll();
}

export function getById(id) {
  return productModel.getById(id);
}

export function create(data) {
  return productModel.create(data);
}

export function remove(id) {
  return productModel.remove(id);
}
