import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/home/home"
import NowPlaying from "./pages/nowplay/nowPlaying"
import Movie_Info from "./pages/movie-info/movie_info"
import Header from "./shared/header/header"
import logo from "./assets/logo.jpg"


function App() {
  return (
  <>
   <BrowserRouter>
   <Header logo={logo} title="Movie Site" subTitle="The Best Movie Site"/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/now_playing" element={<NowPlaying/>}/>
        <Route path="/movie/:id" element={<Movie_Info/>}/>
      </Routes>  
   </BrowserRouter>

   </>
   
  );
}

export default App;
