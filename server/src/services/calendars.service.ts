import { CalendarsRepository } from '../repository/calendars.repository';
import { Calendar } from 'src/models/calendar';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les calendar doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class CalendarsService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: CalendarsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new CalendarsService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: CalendarsRepository;
    private constructor() {
        this.repository = CalendarsRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of calendars.
     */
    getAll(): Promise<Calendar[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the calendar relative to the id in parameter.
     * @param id calendar id
     */
    getById(id: number): Promise<Calendar> {
        return this.repository.findById(id);
    }

    /**
     * Create a new calendar and return a promise which contains the created calendar.
     * @param calendar calendar to create
     */
    create(calendar: any): Promise<Calendar> {
      return this.repository.insert(calendar);
    }

    /**
     * Update the calendar in parameter and return a promise which contains the updated calendar.
     * @param calendar calendar to update
     */
    update(calendar: any): Promise<Calendar> {
      return this.repository.update(calendar);
    }

    /**
     * Delete the calendar related to the id in parameter. Return an empty promise.
     * @param id calendar id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
