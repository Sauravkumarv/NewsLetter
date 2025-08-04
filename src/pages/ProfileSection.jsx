import React, { useState } from 'react';
import '../styles/ProfileSection.css'
import { User, Mail, MapPin, Edit3, Camera } from 'lucide-react';

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rebecca Walton',
    email: 'rebecca.walton@example.com',
    location: 'San Francisco, CA',
    bio: 'Passionate content creator and technology enthusiast. I love exploring new trends and sharing insights through engaging articles and newsletters.'
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">Profile</h2>
        <button 
          className="edit-button"
          onClick={toggleEdit}
        >
          <Edit3 size={18} />
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="profile-content">
        {/* Profile Picture Section */}
        <div className="profile-pic-section">
          <div className="profile-pic-container">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
              alt="Profile" 
              className="profile-pic"
            />
            {isEditing && (
              <div className="pic-overlay">
                <Camera size={20} />
              </div>
            )}
          </div>
        </div>

        {/* Profile Fields */}
        <div className="profile-fields">
          {/* Name Field */}
          <div className="field-group">
            <label className="field-label">
              <User size={16} />
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="field-input"
              />
            ) : (
              <div className="field-display">{profileData.name}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="field-group">
            <label className="field-label">
              <Mail size={16} />
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="field-input"
              />
            ) : (
              <div className="field-display">{profileData.email}</div>
            )}
          </div>

          {/* Location Field */}
          <div className="field-group">
            <label className="field-label">
              <MapPin size={16} />
              Location
            </label>
            {isEditing ? (
              <input
                type="text"
                value={profileData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="field-input"
              />
            ) : (
              <div className="field-display">{profileData.location}</div>
            )}
          </div>

          {/* Bio Field */}
          <div className="field-group">
            <label className="field-label">
              <Edit3 size={16} />
              Bio
            </label>
            {isEditing ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="field-textarea"
                rows="4"
              />
            ) : (
              <div className="field-display bio-display">{profileData.bio}</div>
            )}
          </div>
        </div>
      </div>
      </div>
  )}

  export default ProfileSection;