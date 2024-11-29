import React, { useState,useContext,useEffect,createContext, Children } from "react";
import userJson from '../constants/users.json'
import IUserInterface from "../components/core/interface/IUserInterface";
import { getItem } from "../components/core/storage/storage";
const UserContext = createContext<{
    users: IUserInterface[];
    setUsers: React.Dispatch<React.SetStateAction<IUserInterface[]>>;
}>({
    users: [],
    setUsers: () => { }
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const usersWithCheckbox = userJson.map((user: IUserInterface) => ({
        ...user,
        isChecked: false
    }));

    const [users, setUsers] = useState<IUserInterface[]>(usersWithCheckbox);
    useEffect(() => {
        const userExist = getItem('users');
        if (userExist) {
            const parsedUsers = JSON.parse(userExist).map((user: IUserInterface) => ({
                ...user,
                isChecked: false 
            }));
            setUsers(parsedUsers);
        }
        else {
            setUsers(usersWithCheckbox);
        }
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => useContext(UserContext);

export default UserProvider