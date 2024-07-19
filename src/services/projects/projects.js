import api from "../core/core-api";

const basepath = "/projects";

const projects = {
  getProjects() {
    return api.get(`${basepath}/`);
  },
  getProjectsById(projectId) {
    return api.get(`${basepath}/${projectId}`);
  },
  saveProject(projectData) {
    return api.post(`${basepath}/`, { ...projectData });
  },
  deleteProject(projectId) {
    return api.delete(`${basepath}/${projectId}`);
  },
  updateProject(projectId, projectData) {
    return api.put(`${basepath}/${projectId}`, { ...projectData });
  },
};

export default projects;
