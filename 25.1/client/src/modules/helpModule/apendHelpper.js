function apendHelpper(itemToPut, object) {
  object.forEach(elementWhichPut => {
    itemToPut.appendChild(elementWhichPut);
  });
}

export { apendHelpper };
