import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import { useLocation, useNavigate } from "react-router";
import useFunction from "../../Hooks/useFunction";

const Login = () => {
  const { setUserInfo, setError, handleGoogleLogin, setLoading } =
    useFirebase();
  const location = useLocation();
  const navigate = useNavigate();
  const { alert } = useFunction();
  const windowScroll = () => {
    window.scrollTo(0, 0);
    navigate(location?.state ? location.state : "/");
  };

  const handleLogin = () => {
    handleGoogleLogin()
      .then((result) => {
        setUserInfo(result.user);
        windowScroll();
        alert.show(`Login Successful`);
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(true);
  };

  return (
    <>
      <div style={{ margin: "11rem auto" }}>
        <div className="section mt-4">
          <h1 className="text-center text-uppercase text-info-emphasis mt-4 mb-4">
            Please Login
          </h1>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-info "
              onClick={handleLogin}
            >
              <i className="fa-brands fa-google-plus-g fw-bold"></i> Google
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
