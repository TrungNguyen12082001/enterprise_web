import axios from "axios";
import { GET_USER_LIST } from "../constants/user-const";

export const getUserList = (userId) => {
  userId = userId || "";
  return async (dispatch) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios({
        method: "GET",
        url: `https://localhost:7133/api/User/GetAllUsers/${userId}`,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log("res: ", res);
      dispatch({
        type: "GET_USER_LIST",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const addUser = () => {
//   return async (dispatch) => {
//     try {
//       // const user = JSON.parse(localStorage.getItem("user"));
//       const res = await axios({
//         method: "POST",
//         url: "https://localhost:7133/api/User",
//         // data: newUser,
//       });
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const addUser = async (newUser) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const res = await axios({
  //   method: "GET",
  //   url: "https://localhost:7133/api/User",
  //   headers: { Authorization: `Bearer ${user.token}` },
  // });
  // console.log(res);
  const data = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return await axios.post("https://localhost:7133/api/User", newUser, data);
};
