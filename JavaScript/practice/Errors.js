// Errors in JS

try {
  console.log(10/0);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Finally");
}
