import React from "react";
import { useEffect, useState } from "react";
import PhylloSDK from "../../phylloSDKService/phylloSDKInit";
import { getAccounts } from "../../phylloSDKService/phylloServiceAPIs";
import Navbar from "../Navbar/Navbar";
import "./AccountSummary.css";

const Users = () => {
  let [accounts, setAccounts] = useState([]);
  let [attributes, setAttributes] = useState({});
  let phylloSDK = new PhylloSDK();

  const handleAddAccount = async () => {
    await phylloSDK.openPhylloSDK();
  };

  const flattenObj = (ob) => {
    let result = {};
    for (const i in ob) {
      if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
        const temp = flattenObj(ob[i]);
        for (const j in temp) {
          result[i + "." + j] = temp[j];
        }
      } else {
        result[i] = ob[i];
      }
    }
    return result;
  };

  useEffect(() => {
    (async () => {
      let response = await getAccounts(localStorage.getItem("PHYLLO_USER_ID"));
      let arr = response.data.data;
      if (arr.length > 0) {
        let updatedArray = arr.map((obj) => {
          let flattenedObj = flattenObj(obj);
          return flattenedObj;
        });
        setAccounts(updatedArray);
        setAttributes(updatedArray[0]);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="table-responsive" style={{ display: "block", margin: "auto", width: "95%" }}>
        <table className="table table-striped table-bordered" style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th>Attribute</th>
              {accounts.map((obj, idx) => {
                return (
                  <th scope="col" key={idx}>
                    Account-{idx + 1}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {Object.entries(attributes).map((obj, idx) => {
                  let property = obj[0];
                  return <tr key={idx}>{property}</tr>;
                })}
              </td>
              {accounts.map((obj, idx) => {
                return <Account accountObj={obj} key={idx} attributes={attributes} />;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <button className="account-connect-button" onClick={handleAddAccount}>
        Add Another Account
      </button>
    </div>
  );
};

function Account(props) {
  let account = props.accountObj;

  return (
    <td>
      {Object.entries(props.attributes).map((obj, idx) => {
        let key = obj[0];
        if (key === "profile_pic_url" || key === "work_platform.logo_url") {
          return (
            <tr key={idx}>
              <img src={account[key]} alt="" />
            </tr>
          );
        } else if (key === "status") {
          return (
            <tr key={idx}>
              <div className="status">
                {account[key]}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: account[key] === "CONNECTED" ? "green" : account[key] === "NOT_CONNECTED" ? "red" : "orange",
                    borderRadius: "50%",
                    marginLeft: "10px",
                  }}
                ></div>
              </div>
            </tr>
          );
        } else if (account[key] === undefined) {
          return <tr>-</tr>;
        }
        return <tr key={idx}>{account[key]}</tr>;
      })}
    </td>
  );
}

export default Users;
