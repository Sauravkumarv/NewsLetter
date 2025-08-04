import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import './SignIn.css';

const SignIn = ({ onSwitchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signinData, setSigninData] = useState({
    email: '',
    password: ''
  });

  const handleSigninChange = (field, value) => {
    setSigninData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    console.log('Signin data:', signinData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon">📰</div>
            <span className="logo-text">NewsletterHub</span>
          </div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account to continue</p>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                value={signinData.email}
                onChange={(e) => handleSigninChange('email', e.target.value)}
                placeholder="Enter your email"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-container">
              <Lock size={18} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={signinData.password}
                onChange={(e) => handleSigninChange('password', e.target.value)}
                placeholder="Enter your password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox" />
              <span className="checkbox-label">Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="button" className="auth-button" onClick={handleSigninSubmit}>
            Sign In
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="auth-footer">
          <p className="switch-text">
            Don't have an account?{' '}
            <Link to='/signup'
              className="switch-link"
              onClick={onSwitchToSignUp}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;