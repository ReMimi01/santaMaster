import { Action } from '../models/action';
import { MysqlConnection } from '../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class ActionsRepository {

    private static instance: ActionsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'action';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ActionsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all actions and return it in a promise.
     */
    findAll(): Promise<Action[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((action: any) => new Action(action));
          });
    }

    /**
     * Make a query to the database to retrieve one action by its id in parameter. 
     * Return the action found in a promise.
     * @param id action id
     */
    findById(id: number): Promise<Action> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Action(results[0]));
    }


    /**
     * Make a query to the database to insert a new action and return the created action in a promise.
     * @param action action to create
     */
    insert(action: Action) {
      return this.connection.query(
        `INSERT INTO ${this.table} (title, picture, detail) VALUES (?,?,?)`,
        [action.title, action.picture, action.detail]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing action and return the updated action in a promise.
     * @param action action to update
     */
    update(action: Action) {
      return this.connection.query(
        `UPDATE ${this.table} SET title = ?, picture = ?, detail = ? WHERE id = ?`,
        [action.detail, action.title, action.picture]
      ).then(() => {
        return this.findById(action.id);
      });
    }

    /**
     * Make a query to the database to delete an existing action and return an empry promise
     * @param id action id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
