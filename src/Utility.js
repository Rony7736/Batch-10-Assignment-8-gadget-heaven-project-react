import toast from "react-hot-toast"

// Cart List
const getStoreCartList = () => {
    // read list
    const storedListStr = localStorage.getItem('cart-list')

    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }
}

const addToStoreCartList = (id) => {
    const storedList = getStoreCartList()
    if (storedList.includes(id)) {
        // already exist
        toast.error('Already Exist in the Cart List');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListStr)
        toast.success('Successfully Add to Cart List');
    }
}

// wish List
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }
}

const addToStoreWishList = (id) => {
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        // already exist
        toast.error('Alredy Wish list Exist!');

    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
        toast.success('Successfully Add to Wish List!');
    }
}


// remove a cart from cart list



export { addToStoreCartList, addToStoreWishList, getStoreCartList, getStoredWishList }