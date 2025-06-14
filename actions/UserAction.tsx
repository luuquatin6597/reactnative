export type UserAction =
    | { type: 'ADD_USER'; payload: { name: string; email: string; password: string } }
    | { type: 'UPDATE_USER'; payload: { id: string; name: string; email: string; password: string } }
    | { type: 'DELETE_USER'; payload: string };