import React from 'react'
import './Settings.css'

const Settings = () => {
  return (
    <div className="settings-container">
        <div className="settings-body">
            <h1>Settings</h1>
            
            <div className="settings-body-content">
            <button className="settings-button">Edit Profile</button>
            <button className="settings-button">Privacy & Security</button>
            <button className="settings-button">Blocked Accounts</button>
            <button className="settings-button">Privacy Policy & Community Guidelines</button>
            <button className="settings-button">Log Out</button>
            </div>

            </div>
    </div>
  )
}

export default Settings