const incrementTop = () => {
  const qnt = document.getElementById("qnt");
  let valor = qnt.value;
  valor++;
  qnt.value = valor;
};

const decrementDown = () => {
  const qnt = document.getElementById("qnt");
  let valor = qnt.value;
  if (valor > 0) {
    valor--;
    qnt.value = valor;
  }
};
