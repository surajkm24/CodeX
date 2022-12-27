import axios from 'axios';
const host = 'https://codex-swart.vercel.app'
export const postCodeAPI = async (code: string) => {
    let res = await axios.post(`${host}/code/js`, { code });
    console.log(res);
}