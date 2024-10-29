import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Adjust as necessary for your styles
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header'; // Make sure this component exists
import axios from 'axios';

const AccountInfo = () => {
    const navigate = useNavigate();

    // State for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150'); // Default profile picture
    
    // Handle profile picture change
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePicture(reader.result);
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user');
                const { username, email, profilePicture } = response.data;
                setUsername(username);
                setEmail(email);
                setProfilePicture(profilePicture || 'https://via.placeholder.com/150');
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        fetchUserInfo();
    }, []);

    const handleSave = async () => {
        try {
            const formData = new FormData(); // Create FormData object
            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);
            if (profilePicture) {
                formData.append('profilePicture', profilePicture); // Append profile picture file
            }
    
            await axios.post('http://localhost:5000/api/user', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
                },
            });
            alert('Account information saved successfully!');
        } catch (error) {
            console.error('Error saving account info:', error);
            alert('Failed to save account information.');
        }
    };
    

    return (
        <div>
            <Header />
            <div className="account-info-page">
                {/* Left side - Account Info */}
                <div className="info-section">
                    <h2 className="account-info-header">Account Information</h2>

                    {/* Username */}
                    <div className="info-field">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                            className="editable-input"
                        />
                    </div>

                    {/* Email */}
                    <div className="info-field">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="editable-input"
                        />
                    </div>

                    {/* Password */}
                    <div className="info-field">
                        <label>Change Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                            className="editable-input"
                        />
                       <button className="change-password-btn" onClick={handleSave}>Save Account Info</button>
                    </div>

                    {/* Back Button */}
                    <div className="back-icon" onClick={() => navigate('/')}>
                        <FaArrowLeft /> Back to Home
                    </div>
                </div>

                {/* Right side - Profile Picture */}
                <div className="profile-picture-section">
                    <img src={profilePicture} alt="Profile" className="profile-picture" />
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="file-input"
                        onChange={handleProfilePictureChange}
                    />
                    <label htmlFor="file-input" className="edit-picture-btn">
                        <i className="fas fa-edit"></i> Change Picture
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
