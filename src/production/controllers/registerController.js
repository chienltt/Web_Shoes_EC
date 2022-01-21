import { RegisterModel } from "../models/RegisterModel.js";

export const createAccount = async (req, res, next) => {
    try {
        const newUser = req.body;

        const email = newUser.email;

        const checkEmail = await RegisterModel.findOne({ email: email })
        if (checkEmail) {
            return res.status(500).json({ detail: "Email đã tồn tại!" });
        }

        console.log(newUser)

        const account = new RegisterModel(newUser);
        await account.save();

        res.status(200).json({
            status_code: 200,
            detail: "Đăng ký thành công!"
        });
    } catch (err) {
        res.status(500).json({
            status_code: 500,
            detail: "Đăng ký không thành công!"
        });
    }
}
