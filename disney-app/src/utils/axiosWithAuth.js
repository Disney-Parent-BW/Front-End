import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem ('token');

    return axios.create ({
        baseURL: 'https://disney-parent-api.herokuapp.com/', 
        headers: {
            Authorization: `Bearer ${token}`,
        } 
   })
}

export default axiosWithAuth;