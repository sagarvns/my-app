import React, { useEffect, useState } from "react";
import "./ChatBox.css"; 
import axios from "axios";

export const ChatBox = () => {
  const [state, setState] = useState({ message: "" });
  const [data, showData] = useState([]);

  const show = () => {
    axios
      .get("http://localhost:3000/contact")
      .then((res) => {
        showData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    show();
  }, []);

  const handler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onsavedata = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/contact", state)
      .then((res) => {
        console.log(res.data);
        setState({ message: "" });
        show();
      })
      .catch((err) => console.error("Error saving data:", err));
  };

  const deleteditem = (id) => {
    axios.delete(`http://localhost:3000/contact/${id}`).then((res) => {
      console.log("massagedeleted");
      show();
    });
  };
  return (
    <>
      <p style={{ textAlign: "right", fontWeight: "bold" }}>
        <img src="/image/Logout.png" style={{ height: "30px" }} alt="Logout" />{" "}
        Logout
      </p>
      <div className="chat-container">
        <h5 className="chat-title">ChatBox</h5>

        <div className="message-out focusable-list-item">
          <ul className="chat-messages">
            {data.map((item, index) => (
              <p key={index}>
                {item.message} <span style={{ Text: "black" }}>✔</span>{" "}
                <button
                  style={{
                    border: "none",
                    paddingRight: "3px",
                    marginRight: "50px",
                  }}
                >
                  <img
                    src="/image/red1.png"
                    height={"15px"}
                    onClick={() => {
                      deleteditem(item.id);
                    }}
                  />{" "}
                </button>{" "}
              </p>
            ))}
          </ul>
        </div>

        <form onSubmit={onsavedata}>
          <div className="input-container" style={{ marginTop: "400px" }}>
            <input
              name="message"
              onChange={handler}
              type="text"
              value={state.message}
              placeholder="Type your message here..."
              className="chat-input"
            />
            <button type="submit" className="chat-button">
              <img
                src="/image/send.png"
                style={{ height: "30px" }}
                alt="Send"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
