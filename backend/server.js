// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));

// /!\ json-server-auth يضيف قواعد auth للـ router
server.db = router.db;
server.use(jsonServer.defaults());
server.use(auth);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server Auth running on port ${PORT}`);
});
