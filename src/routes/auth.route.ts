import { Route } from '../routes/types';
import validate from '../validator';
import { registerUser, loginUser } from '../controllers/auth.controller';

const registerUserReq = validate({
    properties: ['username*', 'email*', 'password*']
});

const loginUserReq = validate({
    properties: ['username*', 'password*']
});

export default {
  '/register': ['', [], {
    post: [registerUserReq, registerUser],
  }],
  '/login': ['', [], {
    post: [loginUserReq, loginUser],
  }],
} as Route;