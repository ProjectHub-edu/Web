export type Project = {
    id: number;
    img: string;
    title: string;
    description: string;
    owner: User;
    members: User[];
    status: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    availableRoles: string[];
}

export type User = {
    id: number;
    avatar: string;
    username: string;
    email: string;
    description?: string;
    projects: Project[];
}
