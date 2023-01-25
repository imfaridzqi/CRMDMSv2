if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const moment = require("moment");
const LocalStrategy = require("passport-local");
const User = require("./models/user");


const datasetsRoutes = require("./routes/datasets");
const programRoutes = require("./routes/program");
const concernRoutes = require("./routes/concern");
const statusRoutes = require("./routes/status");
const sumberRoutes = require("./routes/sumber");
const userRoutes = require("./routes/user");
const closingRoutes = require("./routes/closing");
const chartRoutes = require("./routes/chart");
const dashboardRoutes = require("./routes/dashboard");
const alumniRoutes = require("./routes/alumni");

// process.env.DB_URL || 
mongoose.connect(process.env.DB_URL || "mongodb://localhost:27017/DMSDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

const sessionConfig = {
    secret: process.env.SECRET || "thisshouldbeabettersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.moment = moment;
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use("/datasets", datasetsRoutes);
app.use("/program", programRoutes);
app.use("/concern", concernRoutes);
app.use("/status", statusRoutes);
app.use("/sumber", sumberRoutes);
app.use("/user", userRoutes);
app.use("/closing", closingRoutes);
app.use("/chart", chartRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/alumni", alumniRoutes);

app.get("/", (req, res) => {
    res.redirect("/dashboard");
});

app.all("*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something Went Wrong!";
    res.status(statusCode).render("error", { err });
  });
  
app.listen(process.env.PORT || 4000, ()=> {
    console.log("App listening on port 4000");
});