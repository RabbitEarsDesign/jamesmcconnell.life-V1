import React, { useState } from "react";
// COMPONENTS
import UploadForm from "../components/uploadForm/UploadForm";
import AuthForm from "../components/authForm/AuthForm";

function UploadPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (data) => {
    console.log(data);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <UploadForm /> : <AuthForm loginHandler={loginHandler} />}
      {/* <AuthForm loginHandler={loginHandler} />
      <UploadForm /> */}
    </div>
  );
}

export default UploadPage;
