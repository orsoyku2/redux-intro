import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCard} from '../../actions'
import './styles.css'

const Products = (props) => {
    console.log(props.bookList)
    console.log(props)
    return (
        <div>
            {props.bookList.map((book) => {
                return  (<div key={book.id} className='books'>
                <img className="bookImage" src={book.image} />
                <div className="bookItems">
                <h4>{book.name}</h4>
                <p>{book.author}</p>
                <p>{book.price }</p>
                <button onClick={()=>props.addToCard(book)} className="button">Add to cart</button>
                </div>
            </div>)
            })}
           
            
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      bookList: state.bookList,
      cart:state.cart
    }
  }

  
  



  export default  connect(mapStateToProps,{addToCard})(Products)
 
