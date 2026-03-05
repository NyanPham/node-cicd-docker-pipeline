const app = require("./app");
const port = process.env.PORT || 3169;

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
