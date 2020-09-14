function translate(data) {
  symbols(data);
}

function symbols(symbol) {
  let sym = "";
  switch (symbol) {
    case "projection":
      sym = "�";
      break;
    case "selection":
      sym = "";
      break;
    default:
      break;
  }
  return sym;
}

export default translate;
