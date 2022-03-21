import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');

  function updateEmailField(e) {
    setEmail(e.target.value);
  }

  return (
    <>
        <h1>
            {email}
        </h1>
        <label>
            Email: 
            <input
                value={email}
                onChange={updateEmailField}
            />
        </label>
    </>
  );
}