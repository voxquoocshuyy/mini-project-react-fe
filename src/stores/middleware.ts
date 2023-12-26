import { authApi } from '@/services/authService';

export const middleware = [authApi.middleware];
