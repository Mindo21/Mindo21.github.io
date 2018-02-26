function read(id){
  var element = document.getElementById(id);
  if(responsiveVoice.voiceSupport()) {
    responsiveVoice.resume();
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(element.textContent, "UK English Female");
    }
  } else {
    alert("We are sorry, but your browser does not support Responsive Voice.");
  }
  document.activeElement.blur();
}

function stopSpeaking(){
  responsiveVoice.cancel();
  document.activeElement.blur();
}

function pauseSpeaking(){
  responsiveVoice.pause();
  document.activeElement.blur();
}
