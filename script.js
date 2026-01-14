const form = document.getElementById("nck-form");
const combinationOutput = document.getElementById("combination-output");
const permutationOutput = document.getElementById("permutation-output");
const partitionOutput = document.getElementById("partition-output");
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

const computePermutation = (n, k) => {
  if (k < 0n || k > n) {
    return null;
  }

  let result = 1n;
  for (let i = 0n; i < k; i += 1n) {
    result *= n - i;
  }
  return result;
};

const computePartition = (n) => {
  const limit = Number(n);
  if (!Number.isInteger(limit) || limit < 0) {
    return null;
  }
  if (limit > 400) {
    return "n が大きすぎます (p(n) は n ≤ 400 で計算します)。";
  }

  const dp = Array.from({ length: limit + 1 }, () => 0n);
  dp[0] = 1n;
  for (let i = 1; i <= limit; i += 1) {
    for (let j = i; j <= limit; j += 1) {
      dp[j] += dp[j - i];
    }
  }
  return dp[limit];
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hintText.textContent = "";
  combinationOutput.textContent = "計算中...";
  permutationOutput.textContent = "計算中...";
  partitionOutput.textContent = "計算中...";

  const nValue = Number(form.elements.n.value);
  const kValue = Number(form.elements.k.value);
  const n = toBigInt(nValue);
  const k = toBigInt(kValue);

  if (n === null || k === null) {
    combinationOutput.textContent = "入力は0以上の整数にしてください。";
    permutationOutput.textContent = "入力は0以上の整数にしてください。";
    partitionOutput.textContent = "入力は0以上の整数にしてください。";
    return;
  }

  const combination = computeCombination(n, k);
  const permutation = computePermutation(n, k);
  if (combination === null || permutation === null) {
    combinationOutput.textContent = "k は n 以下で指定してください。";
    permutationOutput.textContent = "k は n 以下で指定してください。";
    partitionOutput.textContent = "n を使って分割数を計算できます。";
    return;
  }

  const partition = computePartition(n);

  combinationOutput.textContent = combination.toString();
  permutationOutput.textContent = permutation.toString();
  if (partition === null) {
    partitionOutput.textContent = "p(n) の計算に失敗しました。";
  } else if (typeof partition === "string") {
    partitionOutput.textContent = partition;
  } else {
    partitionOutput.textContent = partition.toString();
  }

  hintText.textContent =
    "BigInt で計算するので大きな値にも対応できます (p(n) は n ≤ 400)。";
});
