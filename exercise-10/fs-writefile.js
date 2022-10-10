const fs = require("fs");
let text = "Psilocybin Myshrooms of the World, by Paul Stamets";

fs.writeFile("book.txt", text, (err, data) => {
  if (err) {
     console.error(err);
     return;
    }   
 console.log("File written successfully");
 console.log(fs.readFileSync("book.txt", "utf8"));
});