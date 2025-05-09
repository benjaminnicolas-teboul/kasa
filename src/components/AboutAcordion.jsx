
import React, { useState } from "react";
import aboutList from "../datas/aboutList.json";
import Chevron from "./Chevron";

const AboutAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div>
      {aboutList.map((item, idx) => (
        <div key={item.title} style={{ marginBottom: "1rem" }}>
          <button
            onClick={() => handleToggle(idx)}
            className="about-btn"
          
          >
            <span>{item.title}</span>
            <Chevron
              open={openIndexes.includes(idx)}
              color="#fff"
              size={45}
              strokeWidth={1.5}
            />
          </button>
          {openIndexes.includes(idx) && (
            <div
              style={{
                background: "#f2f2f2",
                borderRadius: "0 0 8px 8px",
                padding: "1em 2em",
                color: "#222",
                animation: "fadeIn 0.3s"
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutAccordion;

