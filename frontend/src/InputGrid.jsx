import "./InputGrid.css";
import { useState } from "react";
import { askGemini } from "./api";

const inputConfig = [
  {
    id: "homeNeighbourhood",
    label: "Home postal code",
    type: "text",
    placeholder: "Enter a text",
  },
  {
    id: "officeNeighbourhood",
    label: "Office postal code",
    type: "text",
    placeholder: "Enter a text",
  },
  {
    id: "daysOfWork",
    label: "Days per week in-person",
    type: "select",
    placeholder: "Select from dropdown",
  },
  {
    id: "transportationMethod",
    label: "Transportation method",
    type: "text",
    placeholder: "Select from dropdown",
  },
  {
    id: "monthlyIncome",
    label: "Monthly income",
    type: "text",
    placeholder: "Enter a number",
  },
  {
    id: "commuteTime",
    label: "Commute time",
    type: "text",
    placeholder: "Enter a number",
  },
  {
    id: "commuteTolerance",
    label: "Max commute time tolerance",
    type: "text",
    placeholder: "Enter a number",
  },
  {
    id: "workHours",
    label: "Daily work hours",
    type: "text",
    placeholder: "Select from dropdown",
  },
  {
    id: "hasDog",
    label: "Do you have a dog?",
    type: "text",
    placeholder: "Select from dropdown",
  },
  {
    id: "roommatePreference",
    label: "Preference for the number of roommates",
    type: "text",
    placeholder: "Select from dropdown",
  },
  {
    id: "monthlyBudget",
    label: "Monthly budget",
    type: "text",
    placeholder: "Enter a number",
  },
  {
    id: "rentExpense",
    label: "Ideal monthly expense on rent",
    type: "text",
    placeholder: "Enter a number",
  },
];

function InputGrid() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await askGemini(
        "Analyze this user's urban life situation and give recommendations",
        formData
      );
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="inputContainer">
        <div className="inputGrid">
          {inputConfig.map((field) => (
            <div key={field.id} className="inputGroup">
              <label className="inputLabel">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : "Get Recommendations"}
        </button>
        {response && <div className="response">{response}</div>}
      </div>
    </div>
  );
}

export default InputGrid;
