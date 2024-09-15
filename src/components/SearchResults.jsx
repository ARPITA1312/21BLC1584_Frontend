import React from "react";
import './SearchResults.css';

const SearchResults = () => {
  const data = [
    {
      logo: "https://via.placeholder.com/60",  // Dummy placeholder image
      companyName: "Meta Logo",
      owner: "FACEBOOK INC.",
      registrationDate: "26th Jan 2020",
      status: "Live/Registered",
      statusDate: "26 Jun 2020",
      expiryDate: "26 Dec 2027",
      description: "Computer services, Social Media, Networking, Virtual Communities, Community",
      classes: ["Class 45", "Class 8", "Class 9"]
    },
    {
      logo: "https://via.placeholder.com/60",
      companyName: "Google Logo",
      owner: "GOOGLE LLC",
      registrationDate: "15th Feb 2019",
      status: "Live/Registered",
      statusDate: "10 Mar 2019",
      expiryDate: "15 Feb 2028",
      description: "Search engine services, Advertising, Cloud computing",
      classes: ["Class 35", "Class 42", "Class 9"]
    },
    {
      logo: "https://via.placeholder.com/60",
      companyName: "Amazon Logo",
      owner: "AMAZON INC.",
      registrationDate: "5th Dec 2018",
      status: "Live/Registered",
      statusDate: "8 Dec 2018",
      expiryDate: "5 Dec 2028",
      description: "E-commerce, Cloud computing, Artificial Intelligence",
      classes: ["Class 35", "Class 38", "Class 42"]
    },
    {
      logo: "https://via.placeholder.com/60",
      companyName: "Netflix Logo",
      owner: "NETFLIX INC.",
      registrationDate: "30th May 2020",
      status: "Live/Registered",
      statusDate: "2 Jun 2020",
      expiryDate: "30 May 2027",
      description: "Streaming services, Digital media, Entertainment",
      classes: ["Class 38", "Class 41"]
    },
    {
      logo: "https://via.placeholder.com/60",
      companyName: "Apple Logo",
      owner: "APPLE INC.",
      registrationDate: "18th Jul 2021",
      status: "Live/Registered",
      statusDate: "20 Jul 2021",
      expiryDate: "18 Jul 2030",
      description: "Hardware, Software, Electronics, Cloud computing",
      classes: ["Class 9", "Class 42"]
    }
  ];

  return (
    <div className="results-container">
      {data.map((item, index) => (
        <div className="result-row" key={index}>
          <div className="mark-section">
            <img src={item.logo} alt="logo" className="logo" />
          </div>
          <div className="details-section">
            <h3>{item.companyName}</h3>
            <p>{item.owner}</p>
            <p>{item.registrationDate}</p>
          </div>
          <div className="status-section">
            <span className="status-live">{item.status}</span>
            <p>{item.statusDate}</p>
          </div>
          <div className="expiry-section">
            <p className="expiry-date">{item.expiryDate}</p>
          </div>
          <div className="description-section">
            <p>{item.description}</p>
            <div className="classes">
              {item.classes.map((classItem, i) => (
                <span key={i} className="class-tag">{classItem}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
