import axios from 'axios';

export const EmployeeService = {
    getEmployees() {
        return axios.get('/api/generateEmployee');
    }
}
