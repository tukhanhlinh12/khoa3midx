import React, { useState } from "react";

const Profile = () => {
  const [update, setupdate] = useState(true);
  const email = JSON.parse(localStorage.getItem("user"));

  
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <div
        style={{ width: "100%", height: "700px", textAlign: "center" }}
        className="profile-content"
      >
        <div style={{ display: "inline-block", width: '40%' }}>
          <table style={{ marginTop: "150px" }}>
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td style={{ color: "white" }}>Email</td>
              <td>
                <input type="text" style={{ width: "200px", background: 'none', color: 'white', fontSize: '16px' }} value={` ${email.email}`} disabled/>
              </td>
            </tr>
            <br />
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td style={{ color: "white" }}>Tên khách hàng</td>
              <td>
                <input type="text" style={{ width: "200px" }} />
              </td>
            </tr>
            <br />
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td style={{ color: "white" }}>Ngày sinh</td>
              <td>
                <input type="date" style={{ width: "200px" }} />
              </td>
            </tr>
            <br />
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td style={{ color: "white" }}>Số điện thoại</td>
              <td>
                <input type="text" style={{ width: "200px" }} />
              </td>
            </tr>
            <br />
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td style={{ color: "white" }}>Địa chỉ</td>
              <td>
                <input type="text" style={{ width: "200px" }} />
              </td>
            </tr>
          </table>
        </div>
        {update ? (
          <button
            onClick={() => setupdate(!update)}
            style={{
              marginLeft: "20px",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            CẬP NHẬT THÔNG TIN
          </button>
        ) : (
          <button
            onClick={() => setupdate(!update)}
            style={{
              marginLeft: "78px",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            LƯU THÔNG TIN
          </button>
        )}
      </div>
    </>
  );
};

export default Profile;