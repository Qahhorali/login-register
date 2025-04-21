import { useState } from 'react';
import image from '../assets/images/male.png'
import { authService } from '../assets/Services/authService';
function Login() {
   cont navigation = 

  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [accesLogin, setAccesLogin] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    const { name, value } = e.target;
  setForm({ ...form, [name]: value });

  setErrors(prev => ({
    ...prev,
    [name]: ''
  }));
  };

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: '',
      password: ''
    };

    let hasError = false;

    if (!form.username.trim()) {
      newErrors.username = 'Username kiriting';
      hasError = true;
    }

    if (!form.password.trim()) {
      newErrors.password = 'Parol kiriting';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setError(null);
    try {
      const result = await authService.login(form);
      setAccesLogin('Tizimga muaffaqiyatli kirdingiz')
      console.log("Token:", result.token);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Noma’lum xatolik';
      setError(errorMessage);
    }
  };

  return (
    <div className="login px-[20px] w-full h-[100vh] flex justify-center lg:justify-between items-center">
      <div className=" w-full max-w-[700px] login-form flex flex-col items-center">
        <h1 className='font-bold text-[40px] text-[#252525]'>Xush Kelibsiz!</h1>
        <p className='font-[400] text-[16px] text-[#4B4B4B] pb-[56px]'>Login parolingizni kiritib o‘z kabinetingizga kiring.</p>
        <form onSubmit={handleSubmit} action="#" className='w-full max-w-[400px] flex flex-col gap-[20px]'>
            <div className="login-group flex flex-col gap-[10px]">
                <label htmlFor="#" className='font-[500] text-[18px]'>Login</label>
                <input name='username' onChange={handleChange} type="text" placeholder='Loginingizni kiriting' className='w-full max-w-[400px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] focus:outline-none' />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>
            <div className="password-group flex flex-col">
                <label htmlFor="#" className='font-[500] text-[18px]'>Parol</label>
                <input name='password' onChange={handleChange} type="text" placeholder='Paroliningizni kiriting' className='w-full max-w-[400px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] focus:outline-none' />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button className=' w-full max-w-[400px] h-[46px] border text-[white] transition-all duration-300 ease-in-out bg-[#607AFB] rounded-[8px] hover:bg-[white] hover:text-[#607AFB] hover:border-[#607AFB]'>Kirish</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {accesLogin && <p style={{ color: 'green' }}>{accesLogin}</p>}
        </form>
      </div>
      <div className="img w-full hidden lg:block max-w-[800px] h-[600px] bg-no-repeat bg-cover"
       style={{ backgroundImage: `url(${image})` }}>
        
      </div>
    </div>
  )
}

export default Login
