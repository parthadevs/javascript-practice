const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const result = [];
  const seen = new Set();

  for (const raw of rawData) {
    const [sku, name, qty, expires, zone] = raw.split("|");
    if (seen.has(sku)) {
      continue;
    }
    seen.add(sku);

    result.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general",
    });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const result = [];

  for (const item of shipment) {
    if (item.qty <= 0) {
      result.push({ type: "discard", item })
    } else {
      const exists = pantry.some(p => p.sku === item.sku);
      if (exists) {
        result.push({ type: "restock", item })
      } else {
        result.push({ type: "donate", item })
      }
    }
  }

  return result;
}
function groupByZone(actions) {
  const result = {};
  for (const action of actions) {
    const zone = action.item.zone;

    if (!result[zone]) {
      result[zone] = [];
    }

    result[zone].push(action);
  }
  return result;
}

function clonePantry(pantry) {
  const copy = [];

  for (const item of pantry) {
    copy.push({ ...item });
  }

  return copy;
}

const parsedShipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, parsedShipment);
const grouped = groupByZone(actions);
console.log(grouped);