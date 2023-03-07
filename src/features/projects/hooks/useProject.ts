import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useEffect, useState } from "react";
// import { BASE_URL } from "../../../config/default.json";

export interface IProject {
  id: number;
  title: string;
  description: string;
  status: "IN_PROGRESS";
  projectImgUrl: string;
  created_date: string;
  roles: IRole[] | null;
}

export interface IRole {
  roleName: string;
  description: string;
  user: {
    id: number;
    avatarUrl: string;
    username: string;
  };
}
export default function useProject(projectId: string) {
  return useQuery<IProject, Error>({
    queryKey: ["project"],
    queryFn: () => axios.get(`/api/v1/projects/${projectId}`).then(({ data }) => data as IProject),
  });
}
