document.getElementById("btn_scan").onclick = function() {
  console.log("btn_scan clicked");
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#barcode')
    },
  }, function(err) {
    if (err) {
      console.log(err);
      return
    }
    alert("Initialization finished. Ready to start");
    Quagga.start();

    Quagga.onDetected(function(data) {
      alert(data.codeResult.code);
    });
  });
};