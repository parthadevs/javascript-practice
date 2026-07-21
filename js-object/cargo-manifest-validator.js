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
if (!("containerId" in manifest)) {
  errors.containerId = "Missing";
} else if (
  !Number.isInteger(manifest.containerId) ||
  manifest.containerId < 0
) {
  errors.containerId = "Invalid";
}

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
  errors.weight = "Missing";
} else if (
  typeof manifest.weight !== "number" ||
  Number.isNaN(manifest.weight) ||
  manifest.weight < 0
) {
  errors.weight = "Invalid";
}

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (!["kg", "lb"].includes(manifest.unit)) {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

const object = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
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

console.log(validateManifest(object));