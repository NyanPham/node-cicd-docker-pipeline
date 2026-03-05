const request = require("supertest");
const app = require("./app");

describe("API Endpoint Tests", () => {
  it("Should return status 200 and the message Hello CI/CD!", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello CI/CD!");
  });
});
