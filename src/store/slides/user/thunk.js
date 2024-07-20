import { registerUserWithEmailPassword } from "../../../firebase/providers"

export const signUpWithEmailAndPassword = (data) => {
    return async (dispatch) => {
        try {
            const resp = await registerUserWithEmailPassword(data)
            console.log(resp)
            // if (resp.ok) {
            //     const userInfo = {
            //         createdAt: new Date().getTime(),
            //         email: resp.email,
            //         loginMethod: "EMAIL",
            //         name: resp.name,
            //         role: "CLIENT",
            //         updatedAt: new Date().getTime(),
            //     }
            //     await addNewUser(resp.uid, userInfo)
            //     return true
            // } else {
            //     return false
            // }
        } catch (error) {
            return false
        }
    }
}