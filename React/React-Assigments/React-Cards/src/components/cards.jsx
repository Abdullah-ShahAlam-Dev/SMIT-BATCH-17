// =============================================
//  CARDS COMPONENT - Dark Professional Theme
// =============================================

import React from 'react';
import USERS_DATA from '../data.jsx';
import '../css/cards.css';

// Single card component
function UserCard({ user }) {
  return (
    <div className="card">

      {/* Colorful dark banner on top */}
      <div className="card-cover" style={{ backgroundColor: user.coverColor }}></div>

      {/* Avatar with online status dot */}
      <div className="avatar-wrapper">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <div className={`status-dot status-${user.status}`}></div>
      </div>

      {/* Card content */}
      <div className="card-body">

        <h2 className="user-name">{user.name}</h2>

        {/* Badges */}
        <div className="badge-container">
          {user.badges.map((badge, index) => (
            <span key={index} className={`badge badge-${badge.type}`}>
              {badge.label}
            </span>
          ))}
        </div>

        <p className="bio">{user.bio}</p>

        <div className="card-divider"></div>

        {/* Followers / Following */}
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">{user.stats.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-sep"></div>
          <div className="stat-item">
            <span className="stat-number">{user.stats.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="follow-btn">+ Follow</button>
          <button className="icon-btn">💬</button>
          <button className="icon-btn">🤍</button>
        </div>

      </div>
    </div>
  );
}

// Card list - loops through all users
function CardList() {
  return (
    <>
      {USERS_DATA.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default CardList;
