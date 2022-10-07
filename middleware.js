module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.flash("error", "Harap login terlebih dahulu");
      return res.redirect("/user/login");
    }
    next();
};