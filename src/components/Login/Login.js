import { useRouter } from 'next/router'
import { LoginForm, LoginWrapper } from "./styles"
import { useState } from "react"
import { filterData } from "@/utils/filterData"

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')

    const response = await filterData('/api/auth/login', { 
      filters: {
        comparisonOperator: '=',
        columns: 'user_name',
        logicalOperator: 'AND',
        data: {
          email: username,
          password: password,
          user_role: 'admin'
        }
      }
    })

    if (response && response.length === 1) {
      setErrorMessage('')
      router.push('/dashboard')
    } else {
      setErrorMessage('Incorrect username or password, please try again.')
    }
  }

  return (
    <LoginWrapper>
      <h1>Admin Dashboard</h1>
      <LoginForm>
        {errorMessage &&
          <span>{errorMessage}</span>
        }
        <form onSubmit={handleSubmit}>
          <input type='username' name='username' placeholder='Username' required />
          <input type='password' name='password' placeholder='Password' required />
          <button type='submit'>Submit</button>
        </form>
      </LoginForm>
    </LoginWrapper>
  )
}

export default Login