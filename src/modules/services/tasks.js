import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

class TasksService {
  getTasks() {
    return fetch(`${BASE_URL}/tasks`).then((response) => response.json());
  }

  getTaskById(id) {
    return fetch(`${BASE_URL}/tasks/${id}`).then((response) => response.json());
  }

  createTask(task) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    };

    return fetch(`${BASE_URL}/tasks`, options).then((response) => response.json());
  }

  updateTask(id, data) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetch(`${BASE_URL}/tasks/${id}`, options).then((response) => response.json());
  }

  deleteTask(id) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${BASE_URL}/tasks/${id}`, options).then((response) => response.json());
  }
}

export default new TasksService();
