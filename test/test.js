const app = require("../backend/api");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("Homepage", done => {
    chai
    .request(app)
    .get("/")
    .end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
  });
  it("Getting all items from a flux", done => {
    chai
    .request(app)
    .get("/items")
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });
  it("Getting all flux", done => {
    chai
    .request(app)
    .get("/flux")
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });
});
