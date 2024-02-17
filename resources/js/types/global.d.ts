import {AxiosInstance} from 'axios';
import ziggyRoute from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    interface Company {
        id: number;
        user_id: number;
        name: string;
        current_balance: number;
        level: number;
        start_date: string;
        reputation: number;
    }

    interface Companies {
        companies: Company[];
    }

    var route: typeof ziggyRoute;
}
