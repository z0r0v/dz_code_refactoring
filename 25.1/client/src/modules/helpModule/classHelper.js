class ClassHelper {
  constructor() {}
  addClass(array, classList, classList2) {
    array.forEach(element => {
      element.classList.add(classList, classList2);
    });
  }

  removeClass(array, classList) {
    array.forEach(element => {
      element.classList.remove(classList);
    });
  }

  addNullValue(array) {
    array.forEach(element => {
      element.value = null;
    });
  }
}

export { ClassHelper };
