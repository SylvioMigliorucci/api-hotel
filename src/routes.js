import { Router } from 'express';
import HospedeController from './app/Controllers/HospedeController';
import CheckinController from './app/controllers/CheckinController';

const routes = new Router();

routes.get('/hello', (req, res, next) => {
    res.send('World');
});

routes.post('/hospedes', HospedeController.store);
routes.get('/hospedes', HospedeController.index);
routes.post('/checkin', CheckinController.store);
routes.get('/checkin', CheckinController.index);
// routes.get('/checkout', CheckinController.show);

export default routes;
