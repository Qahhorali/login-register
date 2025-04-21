import { useNavigate } from "react-router-dom"

function Home(){
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login');
  }
  const handleRegister = () => {
    navigate('/register');
  }
  return (
    <div className="home flex flex-col items-center justify-center h-[100vh] gap-[30px]">
      <h1 className="text-[48px]">Welcome</h1>
      <button onClick={handleLogin} className="text-[16px] rounded-[8px] border w-[300px] text-[white] transition-all duration-300 ease-in-out hover:text-[#607AFB] hover:bg-[white] hover:border-[#607AFB] py-[14px] bg-[#607AFB]">Login</button>      
      <button onClick={handleRegister} className="text-[16px] rounded-[8px] border w-[300px] text-[white] transition-all duration-300 ease-in-out hover:text-[#607AFB] hover:bg-[white] hover:border-[#607AFB] py-[14px] bg-[#607AFB]">Register</button>      
    </div>
  )
}

export default Home
