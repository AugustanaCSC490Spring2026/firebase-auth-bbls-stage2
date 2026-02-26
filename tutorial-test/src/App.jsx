import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  function handleChange(e) {
    const { name, value } = e.target 
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError("All fields are required.")
      return
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")
    console.log("Form submitted:", formData)
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <table>
          
          <td>
            <tr>
              <label>Email</label>  
             <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            </tr>
            <tr>
               <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
            </tr>
          </td>
                
        </table>
        

        {error && <p className="error">{error}</p>}

        <button
          type="submit"
          disabled={!formData.email || !formData.password}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default App