import { Calendar } from '../models/calendar';
import { MysqlConnection } from '../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class CalendarsRepository {

    private static instance: CalendarsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'calendar';

    static getInstance() {
        if (!this.instance) {
            this.instance = new CalendarsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all calendars and return it in a promise.
     */
    findAll(): Promise<Calendar[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((calendar: any) => new Calendar(calendar));
          });
    }

    /**
     * Make a query to the database to retrieve one calendar by its id in parameter. 
     * Return the calendar found in a promise.
     * @param id calendar id
     */
    findById(id: number): Promise<Calendar> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Calendar(results[0]));
    }


    /**
     * Make a query to the database to insert a new calendar and return the created calendar in a promise.
     * @param calendar calendar to create
     */
    insert(calendar: Calendar) {
      return this.connection.query(
        `INSERT INTO ${this.table} (detail, guid, name, type) VALUES (?,?,?,?)`,
        ["Top", "009", calendar.name, "Test"]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing calendar and return the updated calendar in a promise.
     * @param calendar calendar to update
     */
    update(calendar: Calendar) {
      return this.connection.query(
        `UPDATE ${this.table} SET detail = ?, guid = ?, name = ?, type = ? WHERE id = ?`,
        [calendar.detail, calendar.guid, calendar.name, calendar.type]
      ).then(() => {
        return this.findById(calendar.id);
      });
    }

    /**
     * Make a query to the database to delete an existing calendar and return an empry promise
     * @param id calendar id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
