import { useEffect, useState } from 'react';
import { authService } from '../assets/Services/authService';
import { useNavigate } from 'react-router-dom';
interface UserData {
  username: string;
  email: string;
  name: string;
  surname: string;
}
function Dashboard() {
  const [user, setUser] = useState<UserData>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUser = async () => {
      try {
        const userData = await authService.register(data);
        setUser(userData);
      } catch (err) {
        setError('Foydalanuvchi maʼlumotlarini olishda xatolik yuz berdi');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return <div>Maʼlumot topilmadi</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Xush kelibsiz, {user.name}!</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Ism:</strong> {user.name}</p>
      <p><strong>Familiya:</strong> {user.surname}</p>
    </div>
  );
}

export default Dashboard;
