import axios from "axios";

export const updateMinTime = async (email, minTime) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/employees/min-time",
      { email, minTime }
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const updateMaxTime = async (email, maxTime) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/api/employees/max-time",
      { email, maxTime }
    );
  } catch (error) {
    console.error("Fetch error:", error);
 }
};