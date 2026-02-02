// Object with multiple properties and a method
const camera = {
  brand: "Canon",
  sensor: "APS-C",
  baseISO: 100,

  describeCamera: function () {
    return `Camera: ${this.brand} (${this.sensor})`;
  }
};

// Function #1 – calculates exposure value
// Parameters IN: aperture, shutter, iso
// Parameter OUT: exposure value
function calculateEV(aperture, shutter, iso) {
  return Math.log2((aperture ** 2) / shutter) - Math.log2(iso / 100);
}

// Function #2 – determines exposure rating
function getExposureRating(ev) {
  if (ev > 14) {
    return "Very Bright Scene ☀️";
  } else if (ev > 10) {
    return "Normal Daylight 🌤️";
  } else {
    return "Low Light 🌙";
  }
}

// Function #3 – invoked by button click event
function calculateExposure() {
  const aperture = Number(document.getElementById("aperture").value);
  const shutter = Number(document.getElementById("shutter").value);
  const iso = Number(document.getElementById("iso").value);

  const ev = calculateEV(aperture, shutter, iso);
  const rating = getExposureRating(ev);

  document.getElementById("output").innerHTML = `
    <p>${camera.describeCamera()}</p>
    <p>Exposure Value: <strong>${ev.toFixed(2)}</strong></p>
    <p>Scene Type: <strong>${rating}</strong></p>
  `;
}
