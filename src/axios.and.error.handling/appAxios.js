import axios from 'axios';

const ProtectedAxios = axios.create({
  base_url: ''
});

export default ProtectedAxios;
