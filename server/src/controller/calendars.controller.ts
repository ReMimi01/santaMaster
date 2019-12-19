import { Calendar } from './../models/calendar';
import { CalendarsService } from './../services/calendars.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CalendarsController = (app: Application) => {

    const router: Router = express.Router();
    const calendarsService = CalendarsService.getInstance();

    /**
     * Return all calendars in JSON
     */
    router.get('/', (req: Request, res: Response) => {
      calendarsService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Return only one calendar in JSON relative to its id
     */
    router.get('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      calendarsService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Create a new calendar from a JSON body and return the created calendar in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const calendar: Calendar = req.body; // Automatically transform in a Calendar object

      calendarsService.create(calendar).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Update a calendar relative to its id and return the updated calendar in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const calendar: Calendar = req.body; // req.params.id is automatically set into the body

      calendarsService.update(calendar).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Delete a calendar relative its id.
     */
    router.delete('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      calendarsService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    app.use('/calendars', router);
};
