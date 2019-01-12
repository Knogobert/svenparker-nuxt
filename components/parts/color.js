import Vue from 'vue'

export default class Color {
  constructor(color, values) {
    this.color = color
    this.values = values
  }
  get getColor() {
    return this.color
  }
  get getValues() {
    return this.values
  }
}
