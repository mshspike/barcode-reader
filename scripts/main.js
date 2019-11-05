/*
document.getElementById("btn_scan").onclick = function() {
  console.log("btn_scan clicked");
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#barcode')
    },
    decoder: {
      readers: ['"code_128_reader']
    }
  }, function(err) {
    if (err) {
      console.log(err);
      return
    }
    alert("Initialization finished. Ready to start");
    Quagga.start();

    Quagga.onDetected(function(data) {
      if (SpeechRecognitionResult.codeResult.code) {
        alert(result.codeResult.code);
        Quagga.stop();
      }
    });
  });
};
*/

$(function() {
  var liveStreamConfig = {
    inputStream: {
      type: "LiveStream"
    },
    locator: {
      
    }
  }
});