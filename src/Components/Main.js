import {useState} from "react";
import BookCard from "./BookCard";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setBookData]=useState([]);
    const findBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
                .then(res=>setBookData(res.data.items))
                .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Find your own door<br/> to the world of magic =)</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                               value={search} onChange={e=>setSearch(e.target.value)}
                               onKeyPress={findBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    <BookCard book={bookData}/>
                }
            </div>
        </>
    )
}
export default Main;