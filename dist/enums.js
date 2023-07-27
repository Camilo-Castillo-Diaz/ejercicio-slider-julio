// alamacenar lista de valores esticos
var Users;
(function (Users) {
    Users[Users["payedUser"] = 0] = "payedUser";
    Users[Users["AdminUser"] = 1] = "AdminUser";
    Users[Users["MegaUser"] = 2] = "MegaUser";
})(Users || (Users = {}));
var myuser = Users.AdminUser;
console.log(myuser);
