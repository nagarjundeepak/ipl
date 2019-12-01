import React, {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

function Register (props) {
  const {isAuthenticated} = props.auth;
  if (isAuthenticated) {
    props.history.push ('/');
  }
  const [data, setData] = useState ({
    username: '',
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
      username: data.username,
      email: data.email,
      password: data.password,
    };
    axios
      .post ('/api/users/register', newUser)
      .then (res => {
        props.history.push ('./login');
      })
      .catch (err => {
        setData ({errors: err.response.data});
      });
  };
  return (
    <React.Fragment>
      <div className="register container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h2 className="mt-5 text-center mb-0">Register</h2>
            <p className="text-lead text-center">create your account here</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  className={
                    data.errors.type === 'username'
                      ? 'is-invalid form-control'
                      : 'form-control'
                  }
                  placeholder="Enter your username"
                />
                <span className="invalid-feedback">{data.errors.msg}</span>
              </div>
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
                value="Register"
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

export default connect (mapStateToProps) (Register);