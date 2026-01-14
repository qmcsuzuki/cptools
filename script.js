const form = document.getElementById("nck-form");
const resultOutput = document.getElementById("result-output");
const hintText = document.getElementById("hint-text");

const toBigInt = (value) => {
  if (!Number.isInteger(value) || value < 0) {
    return null;
  }
  return BigInt(value);
};

const computeCombination = (n, k) => {
  if (k < 0n || k > n) {
    return null;
  }

  let adjustedK = k;
  if (k > n - k) {
    adjustedK = n - k;
  }

  let numerator = 1n;
  let denominator = 1n;
  for (let i = 1n; i <= adjustedK; i += 1n) {
    numerator *= n - adjustedK + i;
    denominator *= i;
  }

  return numerator / denominator;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hintText.textContent = "";

  const nValue = Number(form.elements.n.value);
  const kValue = Number(form.elements.k.value);
  const n = toBigInt(nValue);
  const k = toBigInt(kValue);

  if (n === null || k === null) {
    resultOutput.textContent = "入力は0以上の整数にしてください。";
    return;
  }

  const result = computeCombination(n, k);
  if (result === null) {
    resultOutput.textContent = "k は n 以下で指定してください。";
    return;
  }

  resultOutput.textContent = result.toString();
  hintText.textContent = "BigInt で計算するので大きな値にも対応できます。";
});
