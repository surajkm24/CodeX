import axios from 'axios';
const host = 'https://codex-swart.vercel.app'
export const postCodeAPI = async (code: string) => {
    try {
        let res = await axios.post(`${host}/code/js`, { code });
        return res.data;
    }
    catch (error) {
        return false;
    }
}