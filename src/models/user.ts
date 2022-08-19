export interface IUser {
    username: string;
    login: string;
    key: string;
    remember: boolean;
    id_token: string;
    expires_in: string;
    refresh_token: string;
    scope: [];
    token_type: string;
    isAuth: boolean;
    forgotPassword: boolean;
}
