
import https from './https';

export const loginUser = (data) => {
    return https.post("/users", data);
};
