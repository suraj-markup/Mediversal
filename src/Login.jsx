import { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const verifiedUser = [
  {
    email: "suraj@gmail.com",
    password: "suraj@123",
  },
  {
    email: "mediversal@gmail.com",
    password: "mediversal@123",
  },
  {
    email: "patna@gmail.com",
    password: "patna@123",
  },
  {
    email: "nit@gmail.com",
    password: "nit@123",
  },
];

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUser((prev) => ({ ...prev, [name]: value }));

    if(name==="email" && !validator.isEmail(user.email)){
      setEmailError("Please enter valid Email!");
    }
    else{
      setEmailError("Valid Email :)");
    }

  };

  const handleSubmit = () => {
    let registered=false;
    // console.log(user.email, user.password);
    if (user.email.length === 0 || user.password.length === 0) {
      return alert("Please enter email and password");
    }
      
    
    for(let i=0;i<verifiedUser.length;i++){
      if(verifiedUser[i].email===user.email && verifiedUser[i].password===user.password){
        registered=true;
      }
    }
    if(registered){
      navigate('/dashboard');

    }else{
      alert("You are not a registered User. First please register and try again!!!")

    }
    
  };

  return (
    <div className="h-screen bg-gradient-to-b  from-white to-cyan-100 flex items-center justify-center">
      <div className="w-3/4 md:w-2/6 border-[3px] border-cyan-500 h-3/4 rounded-2xl p-5">
        <h2 className="text-4xl text-center font-bold text-cyan-600 mb-10">
          LogIn
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5 my-5">
            <label className="text-xl font-bold">
              Email ID <span className="text-red-700 text-xl">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter you email Id..."
              value={user.email}
              onChange={handleChange}
              className="border-2 border-cyan-400 rounded-lg p-2 h-10"
            />
            <p className="text-red-400">{emailError}</p>
          </div>
          <div className="flex flex-col gap-5 my-5">
            <label className="text-xl font-bold">
              Password <span className="text-red-700 text-xl">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter you password..."
              value={user.password}
              onChange={handleChange}
              className="border-2 border-cyan-400 rounded-lg p-2 h-10"
            />
          </div>
        </div>
      <button onClick={handleSubmit} className="my-5 w-full border-2 h-12 rounded-xl bg-cyan-300 hover:bg-cyan-500 text-black text-2xl">Submit</button>
      <p>Don&apos;t have an account? <span className="underline text-blue-600">Register Here</span></p>
      </div>
    </div>
  );
};

export default Login;
