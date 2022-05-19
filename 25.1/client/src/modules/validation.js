class ValidationForm {
  //можно дописать валидацию по интересней
  constructor(array, classList, actionAfter) {
    let isValid;
    array.forEach(element => {
      if (element.value === "") {
        element.classList.add(classList);
        return (isValid = false);
      } else {
        element.classList.remove(classList);
        return (isValid = true);
      }
    });
    if (isValid) {
      actionAfter();
    }
  }
}

export { ValidationForm };
