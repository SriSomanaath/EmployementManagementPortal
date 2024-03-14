import React, { useEffect, useState } from "react";
import axios from "axios";
import { updateMaxTime, updateMinTime } from "./../Services/services";
import { TiArrowUnsorted } from "react-icons/ti";

const HeroSection = () => {
  const [params, setParams] = useState("");
  const [sortedParams, setSortedParams] = useState(null); // State variable to store sorted data
  const [inputValues, setInputValues] = useState({});
  const [sortState, setSortState] = useState({
    FirstName: null,
    LastName: null,
  });
  const [sortedColumn, setSortedColumn] = useState(null);
  const columnName = [
    "Email",
    "FirstName",
    "ID",
    "LastName",
    "Role",
    "MinTimeInHrs",
    "MaxTimeInHrs",
    "SlackEmail",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/employees");
        setParams(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchData();
    return () => {};
  }, []);

  const handleInputChange = (email, param, value) => {
    setInputValues({
      ...inputValues,
      [email]: {
        ...inputValues[email],
        [param]: value,
      },
    });
    if (param === "MinTimeInHours") {
      updateMinTime(email, value);
    } else if (param === "MaxTimeInHours") {
      updateMaxTime(email, value);
    }
  };

  const handleSort = (column) => {
    // Determine the sort order for the column
    let sortOrder;
    if (column === sortedColumn) {
      sortOrder = sortState[column] === "asc" ? "desc" : "asc";
    } else {
      sortOrder = "asc";
    }
    // Sort the data based on the sort order
    const sortedData = Object.keys(params).sort((a, b) => {
      let valueA = params[a][column];
      let valueB = params[b][column];

      // Handle cases where the value is undefined
      if (!valueA || valueA === "") {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (!valueB || valueB === "") {
        return sortOrder === "asc" ? 1 : -1;
      }

      // Convert values to numbers if they are strings and not NaN
      if (typeof valueA === "string" && !isNaN(Number(valueA))) {
        valueA = Number(valueA);
      }
      if (typeof valueB === "string" && !isNaN(Number(valueB))) {
        valueB = Number(valueB);
      }

      // Compare as numbers
      if (!isNaN(valueA) && !isNaN(valueB)) {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }

      // Compare as strings if they are not numbers
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      // If values are not numbers or strings, return 0
      return 0;
    });

    // Update the state
    setSortState({ ...sortState, [column]: sortOrder });
    setSortedColumn(column);
    setSortedParams(sortedData);
  };

  return (
    <div>
      <div>
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                {columnName.map((column) => (
                  <th
                    key={column}
                    className={`pl-2 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider cursor-pointer ${
                      sortedColumn === column ? "text-gray-800" : ""
                    }`}
                    style={{ width: "200px" }}
                    onClick={() => handleSort(column)}
                  >
                    {column}
                    <button className="ml-2">
                      <TiArrowUnsorted
                        style={{ paddingLeft: "1px", paddingTop: "4px" }}
                      />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {(sortedParams || Object.keys(params)).map((email) => (
                <tr
                  key={email}
                  className="shadow-lg gap-y-2 rounded-md  hover:shadow-2xl"
                >
                  <td className="pl-2" style={{ width: "200px" }}>
                    {email}
                  </td>
                  {Object.keys(params[email]).map((param) => (
                    <td
                      key={param}
                      className="px-4 py-4 whitespace-no-wrap text-sm leading-5"
                      style={{ width: "200px" }} // Adjust width here
                    >
                      {param === "MinTimeInHours" ||
                      param === "MaxTimeInHours" ? (
                        <input
                          value={
                            inputValues[email]?.[param] || params[email][param]
                          }
                          onChange={(e) =>
                            handleInputChange(email, param, e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                      ) : (
                        params[email][param]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
