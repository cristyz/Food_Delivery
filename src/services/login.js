import axios from 'axios';

async function singUp(name, password, setStatus, setLoading) {
  return new Promise((resolve, reject) => {
    axios
      .post('http://192.168.1.6:8787/login', {name, password})
      .then(res => {
        setLoading(false);
        const data = res.data;
        setStatus(res.data.status);
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default singUp;
