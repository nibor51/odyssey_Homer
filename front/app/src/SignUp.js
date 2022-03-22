import { useState } from 'react';

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastname: '',
  });
  const myJSON = JSON.stringify(form,1,1);

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(myJSON);
  }

  return (
    <>
        <h1>
            {myJSON}
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
              Email: 
              <input
                name="email"
                value={form.email}
                onChange={updateField}
              />
          </label>
          <label>
              Password:
              <input
                name="password"
                value={form.password}
                onChange={updateField}
              />
          </label>
          <label>
              Confirm Password:
              <input
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={updateField}
              />
          </label>
          <label>
              Name:
              <input
                name="name"
                value={form.name}
                onChange={updateField}
              />
          </label>
          <label>
              Lastname:
              <input
                name="lastname"
                value={form.lastname}
                onChange={updateField}
              />
          </label>
          <button type="submit">Sign Up</button>
        </form>
    </>
  );
}