

import { combineReducers, createStore } from 'redux'

import { menData } from "./data/men";
import { computerData } from "./data/computers";
import { womanData } from "./data/woman";
import { watchData } from "./data/watch";
import { acData } from "./data/ac";
import { tvData } from "./data/tv";
import { kitchenData } from "./data/kitchen";
import { fridgeData } from "./data/fridge";
import { booksData } from "./data/books";
import { groceriesData } from './data/groceries';
import { mobileData } from './data/mobiles';
var cartItems = []

function cart_items_reducer_function(state = cartItems, action){
    if (action.type == "remove_from_cart"){
        // action.payload=---- id
        return state.filter((product)=> action.payload != product)
    }
    
    else if(action.type == "add_to_cart"){
        return [...state, action.payload]

    }
    
    return state
}

const singleProduct = {}

function single_product_reducer_function(state = singleProduct, action){
    if ( action.type == "set_single_product"){
        return state = action.payload
    }
    else{
        return state
    }

}

var total_products = [].concat(acData, tvData, menData, womanData, mobileData, fridgeData, kitchenData, watchData, computerData, booksData, groceriesData)


function total_products_reducer_function(state = total_products, action) {
    return state
}

var user_details = [
    {
        user_name: "default",
        password: "default",
        // can be mail or id
        user_id: "default", 
    }
]

function user_details_reducer_function(state = user_details, action){
    switch(action.type){
        case "add_user":
            const user = {user_name : action.payload.name,
                password : action.payload.pwd,
                user_id : action.payload.user_id
            }
            return [...state, user]
        
        default : return state
    }
}
var display_user_name = ""
const user_name_reducer_fuction = (state = display_user_name, action)=>{
    if ( action.type == "set_user_name"){
        return state= action.payload
    }
    return state
}
const root_reducer = combineReducers({
    display_user_name : user_name_reducer_fuction,
    user_data: user_details_reducer_function,
    total_products: total_products_reducer_function,
    cart : cart_items_reducer_function,
    single_product : single_product_reducer_function,
})
const store = createStore(root_reducer)
export default store