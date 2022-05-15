
import { useState } from "react/cjs/react.development";
import PopUp from "./PopUp";
const BookCard = ({ book }) => {

    const [show,toShow]=useState(false);
    const [bookItem,setBookItem]=useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={()=>{toShow(true);setBookItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">Grn {amount}</p>
                                </div>
                            </div>
                              <PopUp show={show} item={bookItem} onClose={()=>toShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default BookCard;