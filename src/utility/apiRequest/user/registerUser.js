import apiCaller from '../apiCaller';

const registerUser = async (payload) =>
    await apiCaller.post("/users/register", payload)

export default registerUser;