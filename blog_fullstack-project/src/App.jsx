import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {login, logout} from "./features/authSlice"
import authService from "./appwrite-services/auth.service";
import { Footer, Header } from "./components/index";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    authService.getCurrUser().then(res => {
      if (res) dispatch(login(res));
      else dispatch(logout());
    }).finally(()=>setLoading(false));
  }, [])

  return(
    <>
      <Header/>
      {/*<Outlet/>*/}
      <Footer/>
    </>
  )
}