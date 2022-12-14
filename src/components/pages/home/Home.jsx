import Featured from '../../featured/Featured'
import List from '../../list/List'
import Navbar from '../../navbar/Navbar'
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Featured type="series"/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home