import axios from 'axios';

async function Login(name, password, setStatus, setLoading) {
  return new Promise((resolve, reject) => {
    axios
      .post('http://192.168.1.6:8787/login', {name, password})
      .then(res => {
        setLoading(false);
        const data = res.data;
        setStatus(data.status);
        // if (data.status === 'Success') {
        //   setUser(data.userName);
        //   setAuth(true);
        //   AsyncStorage.setItem('token', 'fewufewi');
        // }
        resolve('Oi');
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default Login;
