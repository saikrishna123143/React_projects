import { configureStore, createSlice } from "@reduxjs/toolkit";


let productslice=createSlice(
    {
        name:'products',
        initialState:{
            veg:[
                { name: "tomato", price: 100,src:'/veg/tomato.jpg' },
                { name: "potato", price: 50 ,src:'/veg/potato.jpg'},
                { name: "chillies", price: 40 ,src:'/veg/chillies.jpg'},
                { name: "beans", price: 120 ,src:'/veg/beans.jpg'},
                { name: "brinjal", price: 60 ,src:'/veg/brinjal.jpg'},
                { name: "bitterguard", price: 100 ,src:'/veg/bitter.jpg'},
              ],
              NonVeg:[
                { name: "chicken", price: 250 ,src:'/nonveg/chicken.png'},
                { name: "mutton", price: 900 ,src:'/nonveg/mutton.jpg'},
                { name: "fish", price: 300 ,src:'/nonveg/fish.jpg'},
                { name: "prawns", price: 1000 ,src:'/nonveg/prawns.jpg'},
                { name: "crabs", price: 500 ,src:'/nonveg/crabs.jpg'},
                { name: "Egg", price: 100 ,src:'/nonveg/eggs.jpg'}
              ],
              milk: [
                { name: "Amul Gold", price: 60, src: "nonveg/amul_gold.png" },
                { name: "Mother Dairy", price: 55, src: "nonveg/mother.jpg" },
                { name: "Nestle A+", price: 65, src: "nonveg/nestle.jpg" },
                { name: "Heritage", price: 50, src: "nonveg/heritage.jpg" },
                { name: "Nandini", price: 45, src: "nonveg/nandini.webp" },
                { name: "Aavin", price: 40, src: "nonveg/aavin.jpg" }
              ],
        },
        reducers:{}
}
)
let cartSlice=createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            addtocart:(state,action)=>{
                const item=state.find(item=>item.name===action.payload.name);
                if(item)
                {
                    item.quantity+=1;
                }
                else{
                    state.push({...action.payload,quantity:1});
                }
            },
            increment:(state,action)=>
            {
                const item=state.find(item=>item.name===action.payload.name);
                if(item)
                    {
                        item.quantity+=1;
                    }
                    
            },
            decrement:(state,action)=>
                {
                    const item=state.find(item=>item.name===action.payload.name);
                    if(item&&item.quantity>1)
                        {
                            item.quantity-=1;
                        }
                    else{
                        return state.filter(item=>item.name!==action.payload.name);
                       }
                       
    
                },
            clearcart:(state,action)=>{
                return [];
            },
            remove:(state,action)=>
                {
                    
                   return state.filter(item=>item.name!==action.payload.name);
                   
                }
           
        }
    }
)
let purchaseslice= createSlice(
    {
    name:'purchasedetails',
    initialState:[],
    reducers:
    {
        addtopurchase:(state,action)=>
        {
            
            state.push(action.payload);
        }
    }
}
)
let authSlice=createSlice(
    {
        name:"auth",
        initialState:{
            isAuthenticated:localStorage.getItem("username")?true:false,
            user:localStorage.getItem("username")||"",
        },
        reducers:
        {
            login:(state,action)=>
                    {
                      state.isAuthenticated=true;
                      state.user=action.payload;
                      localStorage.setItem("username",action.payload);
                    },
            logout:(state)=>
            {
                state.isAuthenticated=false;
                state.user="";
                localStorage.removeItem("username");
            }
        }
    }
)
let store=configureStore(
    {
        reducer:{
            products:productslice.reducer,
            cart:cartSlice.reducer,
            purchasedetails:purchaseslice.reducer,
            auth:authSlice.reducer
        }
    }
)

export const{addtocart,increment,decrement,remove,clearcart}=cartSlice.actions;
export const{addtopurchase}=purchaseslice.actions;
export const{login,logout}=authSlice.actions;
export default store;

