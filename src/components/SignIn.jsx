import { useState } from 'react'
import '../styles/SignIn.css'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    program: '',
    fitnessPermission: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const programs = [
    'Engineering',
    'Science',
    'Mathematics',
    'Arts',
    'Applied Health Sciences',
    'Environment',
    'Other',
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate UWaterloo email
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.endsWith('@uwaterloo.ca')) {
      newErrors.email = 'Please use your UWaterloo email (@uwaterloo.ca)'
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Validate program
    if (!formData.program) {
      newErrors.program = 'Please select your program'
    }

    // Validate fitness permission
    if (!formData.fitnessPermission) {
      newErrors.fitnessPermission = 'You must grant permission to read fitness data'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      // TODO: Replace with actual API call
      console.log('Form submitted:', formData)
      alert('Sign in successful! (This is a demo)')
      
      // Reset form after successful submission
      setFormData({
        email: '',
        password: '',
        program: '',
        fitnessPermission: false,
      })
      setErrors({})
    } catch (error) {
      console.error('Sign in error:', error)
      setErrors({ submit: 'Failed to sign in. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1>Sign In</h1>
        <p className="signin-subtitle">Welcome to Stride</p>

        <form onSubmit={handleSubmit} className="signin-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">UWaterloo Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="student@uwaterloo.ca"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Program Field */}
          <div className="form-group">
            <label htmlFor="program">Program</label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className={errors.program ? 'input-error' : ''}
            >
              <option value="">Select your program</option>
              {programs.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
            {errors.program && <span className="error-message">{errors.program}</span>}
          </div>

          {/* Fitness Permission Checkbox */}
          <div className="form-group checkbox-group">
            <label htmlFor="fitnessPermission" className="checkbox-label">
              <input
                type="checkbox"
                id="fitnessPermission"
                name="fitnessPermission"
                checked={formData.fitnessPermission}
                onChange={handleInputChange}
              />
              <span>I grant permission to read fitness data from my phone</span>
            </label>
            {errors.fitnessPermission && (
              <span className="error-message">{errors.fitnessPermission}</span>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

          {/* Submit Button */}
          <button type="submit" className="signin-button" disabled={isSubmitting}>
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Footer */}
        <div className="signin-footer">
          <p>
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
          <p>
            <a href="#forgot-password">Forgot password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
