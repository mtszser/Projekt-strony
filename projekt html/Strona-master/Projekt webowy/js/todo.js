// przycisk close
const todolist = document.getElementsByClassName("list");

for (let i = 0; i < todolist.length; i++) 
{
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todolist[i].appendChild(span);
}

// przycisk close "usuwa" dane zadanie
const close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) 
{
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
// Zaznaczanie zadania
var list = document.querySelectorAll('ul')[1];
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// przycisk dodaj, który dodaje nowe zadanie(li)
function newElement() 
{
  let li = document.createElement("li");
  let inputValue = document.getElementById("myinput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  // alert o wysłaniu pustej listy
  if (inputValue === '') 
  {
    alert("Nie można wysłać pustego pola!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myinput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) 
  {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const input = document.getElementById("myinput");

// Po wciśnięciu entera, nie trzeba klikać przycisku "dodaj"
input.addEventListener("keyup", function(event) 
{
  if (event.keyCode === 13) 
  {
    event.preventDefault();
    document.getElementById("td_but").click();
  }
});