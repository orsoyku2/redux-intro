import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Products = (props) => {
    console.log(props.bookList)
    return (
        <div>
            <h2>
                <Link to='/carts'>My cart</Link>
            </h2>
            <div className='books'>
                <h4>selam</h4>
                <p></p>
                <p></p>
                <button>Add to cart</button>

            </div>
            
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      bookList: state.bookList
    }
    
  }

  export default  connect(mapStateToProps)(Products)
