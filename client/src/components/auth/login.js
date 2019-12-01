import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../store/actions/authActions';

function Login (props) {
  const {isAuthenticated} = props.auth;
  if (isAuthenticated) {
    props.history.push ('/');
  }
  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [data, setData] = useState ({
    email: '',
    password: '',
    errors: {},
  });
  const handleChange = e => {
    setData ({...data, [e.target.name]: e.target.value});
  };
  const handleSubmit = e => {
    e.preventDefault ();
    const newUser = {
      email: data.email,
      password: data.password,
    };
    props.loginUser (newUser);
    setIsLoggedIn (true);
  };
  if (isLoggedIn) {
    props.history.push ('/');
  }
  return (
    <React.Fragment>
      <div className="login container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h2 className="mt-5 text-center mb-0">Login</h2>
            <p className="text-lead text-center">Signin your account here</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className={
                    data.errors.type === 'email'
                      ? 'is-invalid form-control'
                      : 'form-control'
                  }
                  placeholder="Enter your Email"
                />
                <span className="invalid-feedback">{data.errors.msg}</span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  className={
                    data.errors.type === 'password'
                      ? 'is-invalid form-control'
                      : 'form-control'
                  }
                  placeholder="Enter your Password"
                />
                <span className="invalid-feedback">{data.errors.msg}</span>
              </div>
              <input
                type="submit"
                className="btn btn-primary justify-content-center d-flex w-100"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps, {loginUser}) (Login);