const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./database.config.js");
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//********* Routes Starts Here *********//

const chatCollection = require("./Database/Schema/chat/chatSchema.js");
const articleRoutes = require("./Router/Article/articleRoutes.js");
const monthlyPicksRoutes = require("./Router/MonthlyPicks/monthlyPicksRoutes.js");
const newStoriesRoutes = require("./Router/NewStories/newStoriesRoutes.js");
const spotlightRoutes = require("./Router/Spotlight/spotlightRoutes.js");
const categoryRoutes = require("./Router/Category/categoryRoutes.js");
const workoutRoutes = require("./Router/Workout/workoutRoutes.js");
const eShopRoutes = require("./Router/E-shop/eshopRouter.js");
const booksRoutes = require("./Router/Books/booksRoutes.js");
const forumRoutes = require("./Router/Forum/forumRoutes.js");
const cartRoutes = require("./Router/Cart/cartRotes.js");
const tipsRoutes = require("./Router/Tips/tipsRoutes.js");
const favoritesRoutes = require("./Router/Favourites/favouritesRoutes.js");
const userInteractRoutes = require("./Router/UserInteract/userInteractRoutes.js");
const commentRoutes = require("./Router/Comment/commentRoutes.js");
const userRoutes = require("./Router/Users/userRoutes.js");
const teamsRoutes = require("./Router/Teams/teamsRoutes.js");
const expertsRoutes = require("./Router/Expert/expertRoutes.js");
const serviceRoutes = require("./Router/Service/serviceRoutes.js");
const trainerRoutes = require("./Router/Trainer/trainerRoutes.js");
const trackerRoutes = require("./Router/Tracker/trackerController.js");
const chatRoutes = require("./Router/Chat/chatRoutes.js");
const orderRoutes = require("./Router/PaymentSystem/order/orderRoutes.js");
const order2Routes = require("./Router/PaymentSystem/Order2/orderRoutes.js");
const order3Routes = require("./Router/PaymentSystem/Order3/order3Routes.js");
const courseRoutes = require("./Router/Courses/courseRoutes.js")

//********* Middleware's Starts Here *********//

app.use(cors());
app.use(express.json());

//********* Database and other  Here *********//

//MongoDB//
connectDB();

io.on("connection", (socket) => {
  console.log(`User Connected : ${socket.id}`);

  socket.on("send_message", (message) => {
    chatCollection.create(message);

    //Broadcasting Message to all Sockets

    io.emit("received_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnect");
  });
});

//********* Api start Here *********//

app.use(articleRoutes);
app.use(monthlyPicksRoutes);
app.use(newStoriesRoutes);
app.use(spotlightRoutes);
app.use(categoryRoutes);
app.use(workoutRoutes);
app.use(eShopRoutes);
app.use(booksRoutes);
app.use(forumRoutes);
app.use(cartRoutes);
app.use(tipsRoutes);
app.use(favoritesRoutes);
app.use(userInteractRoutes);
app.use(commentRoutes);
app.use(userRoutes);
app.use(teamsRoutes);
app.use(expertsRoutes);
app.use(serviceRoutes);
app.use(trainerRoutes);
app.use(trackerRoutes);
app.use(chatRoutes);
app.use(orderRoutes);
app.use(order2Routes);
app.use(order3Routes);
app.use(courseRoutes)
//********* Api ends Here *********//

app.get("/", async (req, res) => {
  res.send("Api is working");
});
server.listen(process.env.PORT, () => {
  console.log("server running ");
});
