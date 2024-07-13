import './App.css'
import Navbar from './Pages/MovieApp/components/Navbar/Navbar'
import Tab1 from './Pages/MovieApp/components/Tab1/Tab1'
import Tab2 from './Pages/MovieApp/components/Tab2/Tab2'
import Tabes from './Pages/MovieApp/components/Tabes/Tabes'
import MovieApp from './Pages/MovieApp/MovieApp'

function App() {

  return (
    <>
      <MovieApp>
        <Navbar/>
        <Tabes>
          <Tab1/>
          <Tab2/>
        </Tabes>
      </MovieApp>
    </>
  )
}

export default App
