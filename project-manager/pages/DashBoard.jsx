import { useContext } from "react"
import { firstContext } from "../Context/AuthContext"
const DashBoard = () => {
   console.log('dashboard is rendering')
   const {currentUser} = useContext(firstContext);
   console.log('current', currentUser)
 return(
    <section>
       <h1>Welcome {currentUser.UserName}</h1>
       <button>New project</button>
    </section>
 )
}
export default DashBoard