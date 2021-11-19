const UserRole = require("../modules/userrole");

exports.create = async (req,res) => {
    const {role} = req.body;
    console.log(role);
   const userRole = await new UserRole({
        role
   }).save();
   res.json(userRole);
};