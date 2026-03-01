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
      <img src  = "/images/logo.png" alt="Logo" width="200" height="200"/>
      <form onSubmit={handleSubmit}>
        <p><label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        /></p>
        <p>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        </p>

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