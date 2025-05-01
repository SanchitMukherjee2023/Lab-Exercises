import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <h2>Novell Services Login</h2>
      <table>
      <tr>
        <td><label>Username:</label></td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td><label>Password:</label></td>
        <td><input type="password" /></td>
      </tr>
      <tr>
        <td><label>City of Employment:</label></td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td><label>Web server:</label></td>
        <td>
          <select>
            <option>-- Choose a server --</option>
            <option>Server 1</option>
            <option>Server 2</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <p>Please specify your role:</p>
          </td>
          <td>
          <label><input type="radio" name="role" /> Admin</label><br />
          <label><input type="radio" name="role" /> Engineer</label><br />
          <label><input type="radio" name="role" /> Manager</label><br />
          <label><input type="radio" name="role" /> Guest</label>
          
        </td>
      </tr>
      <tr>
        <td>
          <p>Single Sign-on to the following:</p>
          </td><td>
          <label><input type="checkbox" /> Mail</label><br />
          <label><input type="checkbox" /> Payroll</label><br />
          <label><input type="checkbox" /> Self-service</label>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </td>
      </tr>
    </table>
    </form>
  );
};

export default LoginForm;
