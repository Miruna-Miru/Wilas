import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Community.css';

const Community = () => {
  const navigate = useNavigate();
  
  // State to hold communities and new community form
  const [communities, setCommunities] = useState([
    { id: 1, name: 'Tech Enthusiasts', members: ['Miru', 'Harishma', 'Leo'] },
    { id: 2, name: 'Music Lovers', members: ['David', 'Evelyn', 'Frank'] },
    { id: 3, name: 'Foodies', members: ['Bhava', 'Simba'] },
  ]);
  const [newCommunityName, setNewCommunityName] = useState('');

  // Function to handle navigating to the chat for the selected community
  const handleCommunityClick = (id) => {
    navigate(`/Chat/${id}`); // Go to the community-specific chat page
  };

  // Function to create a new community
  const handleCreateCommunity = () => {
    if (newCommunityName.trim()) {
      const newCommunity = {
        id: communities.length + 1,
        name: newCommunityName,
        members: ['You'], // Default to the creator being the first member
      };
      setCommunities([...communities, newCommunity]);
      setNewCommunityName(''); // Clear the input field
    }
  };

  return (
    <div className="community-container">
      <h2>Join a Community</h2>
      <div className="new-community-form">
        <input
          type="text"
          placeholder="Enter community name"
          value={newCommunityName}
          onChange={(e) => setNewCommunityName(e.target.value)}
        />
        <button onClick={handleCreateCommunity}>Create Community</button>
      </div>
      {communities.map((community) => (
        <div 
          key={community.id} 
          className="community-box" 
          onClick={() => handleCommunityClick(community.id)} // Handle community click
        >
          <h3>{community.name}</h3>
          <p>Members: {community.members.join(', ')}</p>
          <button className="join-button">Join</button>
        </div>
      ))}
    </div>
  );
};

export default Community;
