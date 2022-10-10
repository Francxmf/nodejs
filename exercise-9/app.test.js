const supertest = require("supertest");

 const createApp = require("./app.js");

 const app = createApp();

 const request = supertest(app);

 test("GET /", async () => {
   const response = await request
     .get("/")
     .expect(200)
     .expect("Content-Type", "text/html"); 
   expect(response.text).toEqual("<html><body>The fun guy of fungi - some of them can feed you, some of them can kill you - some, can heal you - some can harm you.</body></html>"); //2
 });

