import { ActionsRepository } from '../repository/actions.repository';
import { Action } from 'src/models/action';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les action doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class ActionsService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: ActionsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ActionsService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: ActionsRepository;
    private constructor() {
        this.repository = ActionsRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of actions.
     */
    getAll(): Promise<Action[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the action relative to the id in parameter.
     * @param id action id
     */
    getById(id: number): Promise<Action> {
        return this.repository.findById(id);
    }

    /**
     * Create a new action and return a promise which contains the created action.
     * @param action action to create
     */
    create(action: any): Promise<Action> {
      return this.repository.insert(action);
    }

    /**
     * Update the action in parameter and return a promise which contains the updated action.
     * @param action action to update
     */
    update(action: any): Promise<Action> {
      return this.repository.update(action);
    }

    /**
     * Delete the action related to the id in parameter. Return an empty promise.
     * @param id action id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
