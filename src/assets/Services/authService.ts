const API_URL = 'https://onlyauth.pythonanywhere.com';

interface LoginData {
    username: string;
    password: string;
  }
  
  interface RegisterData {
    name: string;
    email: string;
    surname: string;
    password: string;
    username: string;
  }

export const authService = {
    async login(data: LoginData) {
        try {
          const response = await fetch(`${API_URL}/token/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) throw new Error('Login failed');
          const result = await response.json();
          localStorage.setItem('token', result.token);
          return result;
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        }
    },
    async register(data: RegisterData) {
        try {
          const response = await fetch(`${API_URL}/register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (!response.ok) throw new Error('Registration failed');
          const result = await response.json();
          return result;
        } catch (error) {
          console.error('Register error:', error);
          throw error;
        }
    },

    async getUserData(token: RegisterData) {
      try {
        const response = await fetch(`${API_URL}/my-account/`, {
          method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(token),
        });
  
        if (!response.ok) throw new Error('Foydalanuvchi maʼlumotlarini olishda xatolik yuz berdi');
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('User data fetch error:', error);
        throw error;
      }
    },

    logout() {
        localStorage.removeItem('token');
    },
    
    getToken() {
      return localStorage.getItem('token');
    }
}