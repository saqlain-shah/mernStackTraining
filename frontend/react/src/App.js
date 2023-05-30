import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import Heading from "./components/heading";
// import MyButton from "./components/button";
// import Mypicture from "./components/pic";
// import LoginForm from "./components/loginForm";
// import CustomForm from "./components/customForm";
import AccountForm from "./practice/createAccount"; 
import LoginForm from "./practice/login";
import SuccessfulMsg from "./practice/successMsg";
import ColorTextFields from "./practice/textD";
import FightManagementSystem from "./practice/FMsystem";
import FlightManagementSystem from "./practice/FMS";




function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AccountForm/>}/>
      <Route path="login" element={<LoginForm/>}/>
      <Route path="successMsg" element={<SuccessfulMsg/>}/>
      <Route path="textD" element={<ColorTextFields/>}/>
      <Route path="FMSYSTEM" element={<FightManagementSystem/>}/>
      <Route path="FMS" element={<FlightManagementSystem/>}/>
      
     

      
      
    </Routes>
    </BrowserRouter>
    
       {/* <
        Heading/>  */}
        {/* <
          CustomForm/> */}
          {/* {< 
            LoginForm
            /> } */}
            {/* <
              MyButton /> */}
              {/* { <
                Mypicture
                /> } */}
               {/* { <
                AccountForm
                /> }   */}
                         {/* { <
                LoginForm
                /> }   */}

    </>
    
    
  );
  
}

export default App;
