import React, { useState } from 'react';

import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = ({ onSwitchToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSignupChange = (field, value) => {
    setSignupData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', signupData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon">📰</div>
            <span className="logo-text">NewsletterHub</span>
          </div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join our community and stay updated</p>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-container">
              <User size={18} className="input-icon" />
              <input
                type="text"
                value={signupData.fullName}
                onChange={(e) => handleSignupChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                value={signupData.email}
                onChange={(e) => handleSignupChange('email', e.target.value)}
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
                value={signupData.password}
                onChange={(e) => handleSignupChange('password', e.target.value)}
                placeholder="Create a password"
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

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-container">
              <Lock size={18} className="input-icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={signupData.confirmPassword}
                onChange={(e) => handleSignupChange('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" className="checkbox" required />
              <span className="checkbox-label">
                I agree to the <a href="#" className="terms-link">Terms of Service</a> and{' '}
                <a href="#" className="terms-link">Privacy Policy</a>
              </span>
            </label>
          </div>

          <button type="button" className="auth-button" onClick={handleSignupSubmit}>
            Create Account
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="auth-footer">
          <p className="switch-text">
            Already have an account?{' '}
            <Link to='/signin' 
              className="switch-link"
              onClick={onSwitchToSignIn}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;