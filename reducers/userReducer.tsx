import { UserAction } from "@/actions/UserAction";
import { User } from "@/interface/User";
const userReducer = (state: User[], action: UserAction): User[] => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: Date.now().toString(),
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                },
            ];
        case 'UPDATE_USER':
            return state.map((user) =>
                user.id === action.payload.id ? { ...user, ...action.payload } : user
            );
        case 'DELETE_USER':
            return state.filter((user) => user.id !== action.payload);
        default:
            return state;
    }
};

export default userReducer;