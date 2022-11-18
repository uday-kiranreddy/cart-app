export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREEMENT":
      return {
        ...state,
        count: state.count + 1,
        price: state.price + 125,
        discount: state.discount + 250,
        positive: true,
      };
    case "DECREEMENT":
      if (state.count >= 1) {
        return {
          ...state,
          count: state.count - 1,
          price: state.price - 125,
          discount: state.discount - 250,
        };
      } else {
        return { ...state, count: 0, price: 0, discount: 0 };
      }
    case "ADD_TO_CART":
      return {
        ...state,
        itemName:[...state.itemName,"Fall Limited Edition Sneakers"],
        cartNumber: `x ${state.count + state.productCount}`,
      };
    case "DELETE":
      return { ...state, itemName: "", cartNumber: "" };
    case "ADD_TO_CART_TROUSERS":
      return {
        ...state,
        itemName: action.payload,
      };
    case "PRODUCT_INCREEMENT":
      return { ...state, productCount: state.productCount + 1 };
    case "PRODUCT_DECREEMENT":
      if (state.productCount >= 1) {
        return { ...state, productCount: state.productCount - 1 };
      } else {
        return { ...state, productCount: 0 };
      }
    case "ADD_TO_CART_PRODUCT":
      return {
        ...state,
        cartNumber: `x ${state.count + state.productCount}`,
        itemName: [...state.itemName, action.payload.name],
        price: action.payload.price,
        img: action.payload.image,
        checkOutItems: [
          ...state.checkOutItems,
          {
            image:action.payload.image,
            name: action.payload.name,
            price: action.payload.price,
            count:action.payload.count
          },
        ],
       
      };
   
    default:
      return state;
  }
};
