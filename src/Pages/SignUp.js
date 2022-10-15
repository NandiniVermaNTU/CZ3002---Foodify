import React, { Component } from 'react';


function SignUp() {

    return (
      <form>
        <h3 className='signUp'>Sign Up </h3>

        <div className="mb-3">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an account? <a href="/sign-in">Sign in</a>
        </p>
      </form>
    )
}

export default SignUp;