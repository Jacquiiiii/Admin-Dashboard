import Link from "next/link"
import { LoginForm, LoginWrapper } from "./styles"

const Login = () => {
  return (
    <LoginWrapper>
      <h1>Admin Dashboard</h1>
      <LoginForm>
        <input placeholder='Username' />
        <input placeholder='Password' />
        <button><Link href="/dashboard">Submit</Link></button>
      </LoginForm>
    </LoginWrapper>
  )
}

export default Login