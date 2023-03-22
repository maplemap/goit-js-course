import axios from 'axios';
/* 
  C-create R-read U-update D-delete
*/

const BASE_URL = 'http://localhost:3000';

class TasksServiceWithFetch {
  // R-read
  // GET
  getTasks() {
    return fetch(`${BASE_URL}/tasks`).then((response) => response.json());
  }

  getTaskById(id) {
    return fetch(`${BASE_URL}/tasks/${id}`).then((response) => response.json());
  }

  // C-create
  // POST
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

  // U-Update
  // PATCH
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

  // D-Delete
  // DELETE
  deleteTask(id) {
    // const options = {
    //   method: 'DELETE',
    // };

    // return fetch(`${BASE_URL}/tasks/${id}`, options).then((response) => response.json());
    return axios.delete(`${BASE_URL}/tasks/${id}`);
  }
}

class TasksService {
  getTasks() {
    return axios.get(`${BASE_URL}/tasks`).then(({ data }) => data);
  }

  getTaskById(id) {
    return axios.get(`${BASE_URL}/tasks/${id}`).then(({ data }) => data);
  }

  createTask(newTask) {
    return axios.post(`${BASE_URL}/tasks`, newTask).then(({ data }) => data);
  }

  updateTask(id, data) {
    return axios.patch(`${BASE_URL}/tasks/${id}`, data).then(({ data }) => data);
  }

  deleteTask(id) {
    return axios.delete(`${BASE_URL}/tasks/${id}`);
  }
}

export default new TasksService();

// const taskService = new TasksService();

// taskService.getTasks().then((data) => console.log(data));
// taskService.getTaskById(13).then((data) => console.log(data));
// taskService.createTask({ value: 'Манго', done: false }).then((data) => console.log(data));
// taskService
//   .updateTask(356, { value: 'Tomato Green' })
//   .then((data) => {
//     console.log('then', data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// taskService.deleteTask(11).then((data) => console.log(data));
