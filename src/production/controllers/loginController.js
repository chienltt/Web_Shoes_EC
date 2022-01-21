import { LoginModel } from "../models/LoginModel.js";

export const loginAccount = async (req, res, next) => {
    try {
        const account = req.body;
        const email = account.email;
        const password = account.password;

        const checkEmail = await LoginModel.findOne({ email: email })
        if (!checkEmail) {
            return res.status(500).json({ detail: "Email của bạn không tồn tại!" });
        }

        const checkPassword = await LoginModel.findOne({ email: email, password: password })
        if (!checkPassword) {
            return res.status(500).json({ detail: "Mật khẩu của bạn không chính xác!" });
        }

        const user = await LoginModel.findOne({ email: email, password: password })
        if (user.active === "NO") {
            return res.status(500).json({ detail: "Tài khoản của bạn đã bị khóa!" });
        }

        const userRes = {
            fullName: user._doc.fullName,
            avatar: user._doc.avatar
        }

        console.log(userRes)

        res.status(200).json({
            status_code: 200,
            detail: "Đăng nhập thành công!",
            user: userRes,
        });
    } catch (err) {
        res.status(500).json({
            status_code: 500,
            detail: "Phát hiện lỗi. Vui lòng thử lại!"
        });
    }
}