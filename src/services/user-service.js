import { myAxios } from "./helper";

export const signIn = (user) => {
    return myAxios.post("/user/authenticate", user)
        .then((response) => response.data());
}
