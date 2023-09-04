const callHomePageApi = (actionName, productState, productId) => {
  const apiUrl = "https://fakestoreapi.com";
  switch (actionName) {
    case "listing":
      fetch(`${apiUrl}/products`)
        .then((response) => response.json())
        .then((data) => {
          productState(data);
        })
        .catch((e) => alert(e));
      break;
    case "show":
      fetch(`${apiUrl}/products/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          productState(data);
        })
        .catch((e) => alert(e));
      break;
  }
};

const getValueFromLocalStorage = (variableName) => {
  return localStorage.getItem('variableName');

}

export { callHomePageApi, getValueFromLocalStorage };
