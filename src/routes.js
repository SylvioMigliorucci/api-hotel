import { Router } from 'express';

const routes = new Router();

routes.get('/hello', (req, res, next) => {
    res.send('World');
});

export default routes;
