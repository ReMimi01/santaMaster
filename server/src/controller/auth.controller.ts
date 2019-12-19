import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import express, { Router, Request, Response, Application } from 'express';

export const AuthController = (app: Application) => {

    const router: Router = express.Router();
    const usersService = UsersService.getInstance();

    /*
    * Login
    */
    router.post('/login', (req: Request, res: Response) => {
        const user: User = req.body; // Automatically transform in a User object
        usersService.login(user.email, user.password)
        .then(result => user ? res.json(result) : res.status(400).send('Username or password is incorrect'))
        .catch(err => console.log(err));
        
    })

    app.use('/auth', router);
}