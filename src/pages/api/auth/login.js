import { handlePostToCheckLoginCreds } from "@/apis/auth/login/loginController"

const loginHandler = (req, res) => {
  if (req.method === 'POST') {
    handlePostToCheckLoginCreds(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default loginHandler