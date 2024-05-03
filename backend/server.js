// const express = require("express");
// const cors = require('cors');
// const mongoose = require("mongoose");
// const port = 3001;
// const todoroutes = require("./routes/todos");
// const signupRouter = require("./routes/signup");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://mongo:27017/todos", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

//   const app = express();
//   app.use(cors());
//   app.use(cors({ origin: 'http://localhost:3000' }));
//   app.use(express.json());
  
//   app.use("/api", todoroutes);
//   app.use("/api/signup", signupRouter);

//   // app.listen(port, () => {
//   //   console.log(`Server is listening on port: ${port}`);
//   // });
//   const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// }
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongo:27017/todos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}
