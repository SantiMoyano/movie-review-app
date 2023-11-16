import SessionManager from "../SessionManager";
const { token } = SessionManager();

function config() {
  if (token) {
    return `bearer ${token}`;
  }
}

export default config;
