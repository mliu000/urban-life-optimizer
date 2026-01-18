import "./InputGrid.css";
import { useState, useEffect } from "react";

const inputConfig = [
  {
    id: "homePostalCode",
    label: "Home postal code",
    type: "text",
    placeholder: "Enter a text",
    required: true,
  },
  {
    id: "officePostalCode",
    label: "Office postal code",
    type: "text",
    placeholder: "Enter a text",
    required: true,
  },
  {
    id: "transportationMethod",
    label: "Transportation method",
    type: "select",
    options: ["Transit", "Car", "Bike", "Walk"],
    required: true,
  },
  {
    id: "commuteTime",
    label: "Commute time",
    type: "text",
    placeholder: "Enter a number",
    required: true,
  },
  {
    id: "maxCommuteTimeTolerance",
    label: "Max commute time tolerance",
    type: "text",
    placeholder: "Enter a number",
  },
];

function InputGrid({ setGridPage, formData, setFormData }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + 5;
        });
      }, 200);
    } else {
      setProgress(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <div className="inputContainer">
        <div className="inputGrid">
          {inputConfig.map((field) => (
            <div key={field.id} className="inputGroup">
              <label className="inputLabel">
                {field.required && <span className="required">* </span>}
                {field.label}
              </label>

              {field.type === "select" ? (
                <select
                  className="inputStyle"
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="inputStyle"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="actionContainer">
        <button className="next-btn" onClick={() => setGridPage(2)}>
          Next
        </button>
        {/* <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Get Recommendations"}
        </button> */}

        {/* {loading && (
          <div className="progressWrapper">
            <div className="progressBarContainer">
              <div
                className="progressBarFill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="loadingText">Analyzing your urban lifestyle...</p>
          </div>
        )}

        {response && !loading && (
          <div className="response fade-in">
            <h3>Recommendations:</h3>
            <p>{response}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default InputGrid;
