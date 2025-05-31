import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const {authorization} = req.headers;
  let token;
  
  if (authorization) {
    token = authorization.replace("Bearer ", "");
  }  
  if (token === '') {
      return next("Необходимо пройти авторизацию");
    }
    let payload;
    try {
    payload = jwt.verify(token, 'secret');
    
  } catch (err) {
    return next("Необходимо пройти авторизацию");
  }
  req.user = payload
  
  return next();
};