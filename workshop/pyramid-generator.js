function pyramid(char, rows, inverted) {
  let result = "\n";

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      result +=
        " ".repeat(rows - i - 1) +
        char.repeat(i * 2 + 1) +
        "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      result +=
        " ".repeat(rows - i - 1) +
        char.repeat(i * 2 + 1) +
        "\n";
    }
  }

  return result;
}