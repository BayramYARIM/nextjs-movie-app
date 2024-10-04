import React from "react";

import styles from "./styles.module.css";

function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginform}>
          <h2>
            Movie App <br></br> Login
          </h2>
          <form>
            <div className={styles.formgroup}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
