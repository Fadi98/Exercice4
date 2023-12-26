//1
const body = document.body;
const div1 = document.createElement('div');
body.appendChild(div1);
const h1 = document.createElement('h1');
const small = document.createElement('small');
small.textContent = chanson.auteur;
small.textContent += '-';
h1.textContent = chanson.titre;
h1.prepend(small);
body.prepend(h1);

// 2
const div = document.createElement('div');
div.className = 'paroles';
for (let I = 0; I < chanson.paroles.length; I++) {
  let couplets = chanson.paroles[I].contenu;
  const p = document.createElement('p');
  const span1 = document.createElement('span')
  span1.className = chanson.paroles[I].type;
  const span = document.createElement('span');
  if (span1.className === 'choeur') {
    span.innerHTML = '[Choeur] <br>';
    span.className = 'refrain';
    span.className += " hidden";
  }
  // console.log(p.className);
  p.appendChild(span1)
  p.prepend(span)
  div.appendChild(p);
  for (let k = 0; k < couplets.length; k++) {
    let line = document.createTextNode(couplets[k]);
    span1.appendChild(line);
    // console.log(line);
    const br = document.createElement('br');
    if (k < couplets.length) {
      span1.appendChild(br);
    }
  }
}
body.appendChild(div);

// 3.
let piedPage = "© Copyright 2023 - Fadilatou";
let footer = document.createElement("footer");
footer.innerHTML = piedPage;
body.appendChild(footer);

// 4
div1.innerHTML = ` 
  <label>
    <input type="checkbox" name="refrains" id="masquer-refrain" /> Masquer les refrains
  </label>
  <label>
    <input type="checkbox" name="paroles" id="masquer-paroles" /> Masquer les paroles
  </label>
  <hr>
`;
const hrElement = document.querySelector('hr');
const Refrain = document.querySelectorAll('.refrain')
const masquer_paroles = document.getElementById('masquer-paroles');
const paroles = document.querySelector(".paroles");
masquer_paroles.addEventListener('click', function (event) {
  if (event.target.checked) {
    paroles.style.display = 'none';
    hrElement.style.display = 'none';
    masquer_paroles.nextSibling.textContent = "Afficher les paroles";
  } else {
    paroles.style.display = 'block';
    hrElement.style.display = 'block';
    masquer_paroles.nextSibling.textContent = "Masquer les paroles";
  };
});
const choeur = document.querySelectorAll('.choeur');
const masquer_refrain = document.getElementById("masquer-refrain");
// console.log(masquer_refrain);
masquer_refrain.addEventListener('click', function (event) {
  for (let i = 0; i < choeur.length; i++) {
    if (event.target.checked) {
      choeur[i].classList.add('hidden');
      Refrain[i].classList.remove('hidden')
      masquer_refrain.nextSibling.textContent = "Afficher les refrains";
    } else {
      // console.log(choeur[i].textContent);
      choeur[i].classList.remove('hidden');
      Refrain[i].classList.add('hidden')
      masquer_refrain.nextSibling.textContent = "Masquer les refrains";
    };
  };
});

for (let i = 0; i < choeur.length; i++) {
  Refrain[i].addEventListener('mouseenter', function () {
    choeur[i].classList.remove('hidden');
  });
  Refrain[i].addEventListener('mouseleave', function () {
    choeur[i].classList.add('hidden');
  });
};



