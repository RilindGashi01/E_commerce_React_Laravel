import React,{createContext,Children,useState, useContext} from "react";

const CartContext = createContext();

export const useCartContext = ()=>{
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCardContext must be inside a Provider")
    }

    return context;
}
export const CartImp =({children})=>{
    const [products, setProducts]= useState([])
    const getProduct = (product)=>{
        const exits = products.some(item => item.id === product.id)
        setProducts(prev => (exits)?prev:[...prev,{...product ,quantity:1}])
    }

    const getAll = ()=>{
        return products
    }
    const increaseQunatity = (Pid)=>{
        setProducts(prev => prev.map(item=>( item.id === Pid)?{...item,quantity:item.quantity+1}:item))
    }
    const decreaseQuantity = (Pid)=>{
        setProducts(prev => prev.map(item=> (item.id === Pid && item.quantity>0)?{...item,quantity:item.quantity-1}:item))
    }
    const deleteProduct = (Pid)=>{
        setProducts(prev => prev.filter(item=>item.id !=Pid))
    }
    const values={
        getProduct,
        getAll,
        increaseQunatity,
        decreaseQuantity,
        deleteProduct
    }

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
)
}