import { User } from "../types";

const usersFromServer = [
    { id: 1, name: 'Joe Biden', carColorId: 5 },
    { id: 2, name: 'Elon Musk', carColorId: 4 },
    { id: 3, name: 'Pan Roman', carColorId: 2 },
];

export const findAll = (): User[] => usersFromServer;

export const getById = (userId: number): User | null => (
    usersFromServer.find(u => u.id === userId) || null
);

export const createOne = ({name, carColorId}: Omit<User, 'id'>): User => {
    const newUser = {
        name,
        carColorId,
        id: getMaxId() + 1,
    }

    usersFromServer.push(newUser);

    return newUser;
};

export const getMaxId = () => Math.max(...usersFromServer.map(u => u.id)) || 0;

export const validate = ({ name, carColorId }: Omit<User, 'id'>) => typeof name !== 'string' || typeof carColorId !== 'number'