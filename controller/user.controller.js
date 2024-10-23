const userService = require("../service/user.service");

const createUser = (req, res) => {
  const data = req.body;
  const result = userService.createUser(data);
  return res
    .status(201)
    .json({ msg: `User Created Successfully`, data: result });
};

const findAllUsers = async (req, res) => {
  const data = req.body;
  const details = await userService.findAllUsers(data);
  if (details.length < 1) {
    return res.json({ msg: `No users found`,  data });
  }
  return res.status(200).json({ msg: `User found`,  data: details});
};



const findById = async (req, res) => {
  const id = req.params.id;
  const userId = req.body;
  const user = await userService.findById(id, userId);
  if (user) {
    return res.status(200).json({ msg: `user with id ${id}found`, id: user });
  }
};
const updateUserId = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const UseRId = await userService.updateUserId(id, body);
  if (UseRId) {
    return res
      .status(200)
      .json({ msg: `User with id ${id} updated`, id: UseRId });
  }
};

const deleteById = async (req, res) =>{
    const id = req.params.id;
    const usEr = req.body;
    const body = await userService.deleteById(id, usEr);
    
    if(body){
        return res.status(200).json({msg: `user with id ${id} deleted`, id: body});
    }
};
module.exports = { createUser, findAllUsers, findById, updateUserId, deleteById };
