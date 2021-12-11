import './Logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
function Logout() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }
    return (
        <div className="logout">
            <h1>
                Welcome <span className="user__name">{user.name}</span>
            </h1>
            <button className="logout__btn" onClick={(e) => handleLogout(e)}>
                Log out
            </button>
        </div>
    )
}

export default Logout
