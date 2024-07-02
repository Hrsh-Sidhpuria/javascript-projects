let speech = new SpeechSynthesisUtterance();

let addVoice = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  addVoice = window.speechSynthesis.getVoices();
  speech.voice = addVoice[0];

  voiceSelect.innerHTML = "";

  addVoice.forEach((voice, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.text = voice.name;
    voiceSelect.appendChild(option);
  });
};

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let selectedVoiceIndex = voiceSelect.value;
  speech.voice = addVoice[selectedVoiceIndex];
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
