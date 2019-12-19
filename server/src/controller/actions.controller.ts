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
    router.use(express.static('uploads'));
     
    router.post('/', async (req : Request, res : Response) => {
      try {
          if(!req.files) {
              res.send({
                  status: false,
                  message: 'No file uploaded'
              });
          } else {
              //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
              let action : any = req.files.action;
              
              //Use the mv() method to place the file in upload directory (i.e. "uploads")
              action.mv('./uploads/' + action.name);
  
              //send response
              res.send({
                  status: true,
                  message: 'File is uploaded',
                  data: {
                      name: action.name,
                      mimetype: action.mimetype,
                      size: action.size
                  }
              });
          }
      } catch (err) {
          res.status(500).send(err);
      }
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
