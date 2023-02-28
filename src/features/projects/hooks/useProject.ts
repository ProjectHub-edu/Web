import { useEffect, useState } from "react";
import { BASE_URL } from "../../../config/default.json";
interface IProject {
  id: number;
  title: string;
  description: string;
  status: string;
  project_img_url: string;
  created_date: string;
  roles: [
    {
      role_name: string;
      description: string;
      user: {
        id: number;
        image_url: string;
        name: string;
      };
    }
  ];
}
export default function useProject(projectId: string) {
  const [project, setProject] = useState<IProject | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const url = `/api/v1/projects/${projectId}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setProject(result);
        setPending(false);
      });
  }, []);

  return [project, pending] as [IProject | null, boolean];
}
