//word & character counter
let inputTextArea = document.getElementById("comment");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim(  );
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;

});

//uppercase
function upper()
{
  var uc = document.getElementById('comment').value;
  document.getElementById('comment').value = uc.toUpperCase();
}
//lowercse
function lower()
{
  var lc = document.getElementById('comment').value;
  document.getElementById('comment').value = lc.toLowerCase();
}

//sentence
function sentence(){
  return string.charAt(0).toUpperCase() + string.slice(1);
}