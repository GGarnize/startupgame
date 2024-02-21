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

    interface Skill {
        id: number;
        name: string;
        description: string;
        type: string;
    }

    interface Skills {
        skills: Skill[];
    }

    interface SkillEmployee {
        id: number;
        name: string;
        description: string;
        type: string;

        level: number;
    }

    interface Task {
        id: number;
        name: string;
        description: string;
        deadline: string;
        start_task: string;
        progress: number;
        priority: number;
        type: string;
        status: string;
    }

    interface Tasks {
        tasks: Task[];
    }

    interface Project {
        id: number;
        name: string;
        description: string;
        budget: number;
        deadline: string;
        status: string;
        company: Company;
        tasks: Task[];
    }

    interface Projects {
        projects: Project[];
    }

    interface Employee {
        id: number;
        name: string;
        happiness: number;
        profession: string;
        salary: number;
        efficiency: number;
        company: Company;
        skills: Skill[];
    }

    interface Employees {
        employees: Employee[];
    }


    var route: typeof ziggyRoute;
}
