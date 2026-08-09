let inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex(
    (product) => product.name.toLowerCase() === productName.toLowerCase()
  );
}

function addProduct(product) {
  const productName = product.name.toLowerCase();
  const index = findProductIndex(productName);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${productName} quantity updated`);
  } else {
    inventory.push({
      name: productName,
      quantity: product.quantity
    });
    console.log(`${productName} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const normalizedName = productName.toLowerCase();
  const index = findProductIndex(normalizedName);

  if (index === -1) {
    console.log(`${normalizedName} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${normalizedName} available, remaining pieces: ${inventory[index].quantity}`
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(
      `Remaining ${normalizedName} pieces: ${inventory[index].quantity}`
    );
  }
}