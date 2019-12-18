import { Action } from './../models/action';
import { ActionsService } from './../services/actions.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ActionsController = (app: Application) => {

    const router: Router = express.Router();
    const actionsService = ActionsService.getInstance();

    /**
     * Return all actions in JSON
     */
    router.get('/', (req: Request, res: Response) => {
      actionsService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Return only one action in JSON relative to its id
     */
    router.get('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      actionsService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Create a new action from a JSON body and return the created action in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const action: Action = req.body; // Automatically transform in a Action object

      actionsService.create(action).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Update a action relative to its id and return the updated action in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const action: Action = req.body; // req.params.id is automatically set into the body

      actionsService.update(action).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Delete a action relative its id.
     */
    router.delete('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      actionsService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    app.use('/actions', router);
};
