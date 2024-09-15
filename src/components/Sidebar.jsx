import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <div className="filter-section">
        <label htmlFor="status">Status</label>
        <select id="status">
          <option value="">All</option>
          <option value="registered">Registered</option>
          <option value="pending">Pending</option>
          <option value="abandoned">Abandoned</option>
          <option value="others">Others</option>
        </select>
      </div>
      <h2>Owners</h2>
      {/* Add radio buttons and checkboxes for owners */}
      <div className="filter-section">
        <input type="checkbox" id="tesla" />
        <label htmlFor="tesla">Tesla, Inc.</label>
      </div>
      {/* Add more owner checkboxes */}
    </div>
  );
}

export default Sidebar;
