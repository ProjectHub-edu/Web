type Project = {
    id: number;
    title: string;
    description: string;
    owner: User;
    members: User[];
    status: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
}

export type User = {
    id: number;
    avatar: string;
    username: string;
    email: string;
    description: string;
    projects: Project[];
}
