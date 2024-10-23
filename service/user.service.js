const { default: mongoose } = require("mongoose");
const userModel = require("../models/user.model.js");
const createUser = (obj) => {
  try {
    const user = userModel.create(obj);
    return user;
  } catch (error) {
    return error;
  }
};

const findAllUsers = () => {
  try {
    const data = userModel.findAll();
    if (data.length > 0) {
      return data;
    } else {
      return "No users found";
    }
  } catch (error) {
    return error;
  }
};

const findById = (id) => {
  try {
    const user = userModel.findById(id);
    if (user) {
      return user;
    } else {
      return `user with id ${id} not found`;
    }
  } catch (error) {
    return error;
  }
};


const updateUserId = async (id, obj) => {
  const filter = { _id: id };
  const update = obj;
  const user = await userModel.updateOne(filter, update);
  if (user) {
    return user;
  } else {
    return `user with id ${id} not found`;
  }
};

const deleteById = async (id) => {
  const query = {_id: id}
  const deleTe = await userModel.deleteOne(query);
try {
  if (deleTe) {
    return deleTe;
  } else {
    return `user with id ${id} not deleted`
    
  }
} catch (error) {
  return error;
}
};

module.exports = { createUser, findAllUsers, findById, updateUserId, deleteById };
