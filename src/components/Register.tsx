import { useState } from 'react';
import image from '../assets/images/male.png'
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [trueMessage, setTrueMessage] = useState<string | null>(null)

  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: ''
    };
  
    let hasError = false;
  
    if (!form.name.trim()) {
      newErrors.name = 'Ismni kiriting';
      hasError = true;
    }
  
    if (!form.surname.trim()) {
      newErrors.surname = 'Familiyangizni kiriting';
      hasError = true;
    }
  
    if (!form.username.trim()) {
      newErrors.username = 'Username kiriting';
      hasError = true;
    }
  
    if (!form.email.trim()) {
      newErrors.email = 'Email kiriting';
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
  

    setErrorMessage(null);
    setTrueMessage(null)
    try {
      setTrueMessage("Muaffaqiatli Royhatdan O'tdingiz")
      navigate('/login')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Nomaʼlum xatolik';
      setErrorMessage(message);
    }
  };
  

  return (
    <div className="register px-[20px] w-full h-[100vh] flex justify-center lg:justify-between items-center">
      <div className=" w-full max-w-[700px] login-form flex flex-col items-center">
        <h1 className='font-bold text-[40px] text-[#252525]'>Ro'yhatdan O'tish</h1>
        <p className='font-[400] text-[16px] text-[#4B4B4B] pb-[56px]'>Kerakli ma’lumotlarni kiritib ro‘yxatdan o‘ting</p>
        <form onSubmit={handleSubmit} action="#" className='w-full max-w-[400px] flex flex-col gap-[20px]'>
            <div className="name-group flex flex-col gap-[10px]">
                <label htmlFor="#" className='font-[500] text-[18px]'>Ismingiz</label>
                <input onChange={handleChange} type="text" name='name' placeholder='Ismingizni kiriting' className='w-full max-w-[400px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] text-[14px] focus:outline-none' />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="surname-group flex flex-col">
                <label htmlFor="#" className='font-[500] text-[18px]'>Familyangiz</label>
                <input onChange={handleChange} type="text" name='surname' placeholder='Familyangizni kiriting' className='w-full max-w-[400px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] text-[14px] focus:outline-none' />
                {errors.surname && <p className="text-red-500">{errors.surname}</p>}
            </div>
            <div className="double-group flex gap-[20px]">
              <div className="username-group flex flex-col">
                  <label htmlFor="#" className='font-[500] text-[18px]'>Username</label>
                  <input onChange={handleChange} type="text" name='username' placeholder='Username kiriting' className='w-full max-w-[180px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] text-[14px] focus:outline-none' />
                  {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>
              <div className="email-group flex flex-col">
                <label htmlFor="#" className='font-[500] text-[18px]'>Email</label>
                <input onChange={handleChange} type="email" name='email' placeholder='Emailingizni kiriting' className='w-full max-w-[180px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] text-[14px] focus:outline-none' />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            </div>
            <div className="surname-group flex flex-col">
                <label htmlFor="#" className='font-[500] text-[18px]'>Parol</label>
                <input onChange={handleChange} type="text" name='password' placeholder='Parolingizni kiriting' className='w-full max-w-[400px] h-[46px] border px-[20px] bg-[#F9F8FA] rounded-[8px] text-[14px] focus:outline-none' />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button className=' w-full max-w-[400px] h-[46px] border text-[white] transition-all duration-300 ease-in-out bg-[#607AFB] rounded-[8px] text-[14px] hover:bg-[white] hover:text-[#607AFB] hover:border-[#607AFB]'>Kirish</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {trueMessage && <p style={{ color: 'green' }}>{trueMessage}</p>}
        </form>
      </div>
      <div className="img hidden lg:block w-full max-w-[800px] h-[600px] bg-no-repeat bg-cover"
       style={{ backgroundImage: `url(${image})` }}>
        
      </div>
    </div>
  )
}

export default Register
