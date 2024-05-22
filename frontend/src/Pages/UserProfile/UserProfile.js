import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const UserProfile = () => {
  const { userInfo } = useFirebase();
  return (
    <>
      <div style={{ margin: "11rem auto" }}>
        <div className="section mt-4">
          <h1 className="text-center text-uppercase text-info-emphasis mt-4 mb-4">
            User Profile
          </h1>

          <div className="text-center">
            <img
              style={{ width: "180px", height: "180px" }}
              className="mt-4 mb-3 rounded-circle"
              src={userInfo.photoURL}
              alt="user_profile_image"
            />
            <h3>{userInfo.displayName}</h3>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
