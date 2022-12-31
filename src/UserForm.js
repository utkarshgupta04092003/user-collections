import React from "react";

function UserForm(props) {
  return (
    <form className="form-container" onSubmit={props.handleSubmit}>
      <h2>User Collection</h2>

      <div class="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
          onChange={props.handleChange}
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </div>

      <div class="form__group field">
        <input
          type="email"
          className="form__field"
          placeholder="Email"
          name="email"
          id="email"
          required
          onChange={props.handleChange}
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
      </div>

      <div class="form__group field">
        <input
          type="password"
          className="form__field"
          placeholder="Password"
          name="password"
          id="password"
          required
          onChange={props.handleChange}
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </div>

      {/* done till here */}

      <div class="form__group field">
        <input
          type="password"
          className="form__field"
          placeholder="Confirm Password"
          name="confirm-password"
          id="confirm-password"
          required
          onChange={props.handleChange}
          />
        <label htmlFor="confirm-password" className="form__label">
          Confirm Pass
        </label>
      </div>
      

     

      {/* <div className="form-field "> */}
        <button>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Submit</span>
        </button>
      {/* </div> */}
    </form>
  );
}
export default UserForm;
