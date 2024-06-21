// calculator.js
function calculate() {
  // check validity
  const validity = validate();

  if (validity == false) return;
  var od = document.getElementById("a1").value;
  var thickness = document.getElementById("a2").value;
  var length = document.getElementById("a4").value;
  var numPipes = document.getElementById("a5").value;

  if (od && thickness && length && numPipes) {
    // Calculate total length
    var totalLength = length * numPipes;
    document.getElementById("a3").value = totalLength;

    // Calculate weight (approximate formula for steel pipes)
    var density = 7.85; // in g/cm^3
    var od_cm = od / 10;
    var thickness_cm = thickness / 10;
    var weight =
      (3.14159 *
        (od_cm - thickness_cm) *
        thickness_cm *
        totalLength *
        density *
        numPipes) /
      1000;

    document.getElementById("a6").value = weight.toFixed(2);
  }
}

function validate() {
  // Check if the form is valid
  if (document.getElementById("quotationForm").checkValidity()) {
    return true;
  } else {
    document.getElementById("quotationForm").reportValidity();
    return false;
  }
}

function sendQuotationEmail() {
  // check validity
  const validity = validate();

  if (validity == false) return;
  // Get form data or use predefined values
  var od = document.getElementById("a1").value || "Predefined OD";
  var wallThickness =
    document.getElementById("a2").value || "Predefined Wall Thickness";
  var lengthOfPipe =
    document.getElementById("a4").value || "Predefined Length of Pipe";
  var numberOfPipes =
    document.getElementById("a5").value || "Predefined Number of Pipes";
  var totalLength =
    document.getElementById("a3").value || "Predefined Total Length";
  var totalWeight =
    document.getElementById("a6").value || "Predefined Total Weight";

  // Construct mailto link
  var mailtoLink = `mailto:info@metalzoneuae.com?subject=${encodeURIComponent(
    "Pipe Weight Calculator Quotation Request"
  )}&body=${encodeURIComponent(
    `OD: ${od}\nWall Thickness: ${wallThickness}\nLength of Pipe: ${lengthOfPipe}\nNumber of Pipes: ${numberOfPipes}\nTotal Length: ${totalLength}\nTotal Weight: ${totalWeight}\n\n Your Name`
  )}`;

  // Redirect to mailto link
  window.location.href = mailtoLink;
}
