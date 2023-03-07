import axios from "axios";

export async function createProject(title: string, desription: string, myRole: string) {
  const url = "/api/v1/projects/new";
  return axios.post(url, {
    title,
    desription,
    my_role: myRole,
  });
}
