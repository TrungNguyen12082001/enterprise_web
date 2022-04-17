import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = (user, history) => {
  return async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://localhost:7133/api/Account/login",
        data: user,
      });
      console.log("res: ", res);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        const userData = JSON.parse(localStorage.getItem("user"));
        var userInfo = jwt_decode(userData.token);
        if (userInfo.role != "SuperAdmin") {
          history("/user");
        } else {
          history("/admin");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
