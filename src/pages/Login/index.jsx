// import { useEffect } from 'react';
// import { http } from '../../utils';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await http.post('/login/api', {
  //       username: 'ken',
  //       password: '123',
  //     });
  //     console.log(data);
  //   })();
  // }, []);

  const navigate = useNavigate();

  const loginHandler = () => {
    window.localStorage.setItem('auth', '123');
    navigate('/layout');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => loginHandler()}>Login</button>
    </div>
  );
}
