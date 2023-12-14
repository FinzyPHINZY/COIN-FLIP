document.querySelector("#result").addEventListener("click", makeReq);

async function makeReq() {
  // const userName = document.querySelector("#username").value;
  const res = await fetch(`https://wide-eyed-pear-costume.cyclic.app/api/`);
  console.log(res);
  const data = await res.json();
  console.log(data);

  document.getElementById("result").textContent = data;
}
