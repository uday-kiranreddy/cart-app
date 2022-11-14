export const reducer = (state, action) => {
  switch (action) {
    case "INCREEMENT":
      return {
        ...state,
        count: state.count + 1,
        price: state.price + 125,
        discount: state.discount + 250,
        positive:true,
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
        return {...state,count:0,price:0,discount:0};
      }
    case "ADD_TO_CART":
      return {
        ...state,
        itemName: "Fall Limited Edition Sneakers",
        cartNumber:`x ${state.count}` ,
      };
      case "DELETE":
        return {...state,itemName:"",cartNumber:""}
    default:
      return state;
  }
};
