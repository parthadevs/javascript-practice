function normalizeUnits(manifest) {
  const newObject = {
    ...manifest
  }
  if (newObject.unit === "lb") {
    newObject.weight = newObject.weight * 0.45;
    newObject.unit = "kg";
  }

  return newObject;
}

function validateManifest(manifest) {
  const errors = {};

  if (!Object.prototype.hasOwnProperty.call(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!Object.prototype.hasOwnProperty.call(manifest, "destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!Object.prototype.hasOwnProperty.call(manifest, "weight")) {
  errors.weight = "Missing";
} else if (
  typeof manifest.weight !== "number" ||
  Number.isNaN(manifest.weight) ||
  manifest.weight <= 0
) {
  errors.weight = "Invalid";
}

  if (!Object.prototype.hasOwnProperty.call(manifest, "unit")) {
    errors.unit = "Missing";
  } else if (!["kg", "lb"].includes(manifest.unit)) {
    errors.unit = "Invalid";
  }

  if (!Object.prototype.hasOwnProperty.call(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return new Object(errors);
}



function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length > 0) {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
    return;
  }

  const normalizedManifest = normalizeUnits(manifest);

  console.log(`Validation success: ${normalizedManifest.containerId}`);
  console.log(`Total weight: ${normalizedManifest.weight} kg`);
}

const manifest = {
  containerId: 1,
  destination: "Dhaka",
  weight: 10,
  unit: "kg",
  hazmat: false
};
console.log(validateManifest(manifest));