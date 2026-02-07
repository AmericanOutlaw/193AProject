function makeBigger() {
  document.getElementById("inputText").style.fontSize = "24pt";
};

function fancify() {
  const txt = document.getElementById("inputText");
  const fancy = document.getElementById("fancyRadio").checked;

  if (fancy) {
    txt.style.fontWeight = "bold";
    txt.style.color = "blue";
    txt.style.textDecoration = "underline";
  } else {
    txt.style.fontWeight = "normal";
    txt.style.color = "black";
    txt.style.textDecoration = "none";
  }
}

function moo() {
  const txt = document.getElementById("inputText");

  // turn uppercase
  let str = txt.value.toUpperCase();

  // 2) add -Moo using period as indicator for sentence end
  let sentences = str.split(".");

  // everything except the last element came before a period
  for (let i = 0; i < sentences.length - 1; i++) {
    let s = sentences[i].trim();
    if (s.length === 0) continue;

    let words = s.split(/\s+/);
    words[words.length - 1] = words[words.length - 1] + "-Moo";
    sentences[i] = words.join(" ");
  }

  // re-join with periods
  str = sentences.join(".");
  txt.value = str;
}