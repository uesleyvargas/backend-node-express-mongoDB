import databaseConnection from "../utils/database"
import User from "../models/user"

export const listUsers = async () => {
    await databaseConnection()
    const users = await User.find()
    return users
}

export const createUsers = async (user) => {
    await databaseConnection()
    const createUsers = await User.create(user)
    return createUsers
}

export const deleteUser = async (id) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}

export const updateUser = async (id, newBody) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id,newBody)
}
