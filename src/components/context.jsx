import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set, get) => ({
    items: [],

    addToCart: (product, quantity) => {
      set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);
        if (existingItem) {
          return {
            items: state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        } else {
          return {
            items: [...state.items, { ...product, quantity: quantity }],
          };
        }
      });
    },

    removeFromCart: (productId) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
      })),

    updateQuantity: (productId, quantity) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      }));
    },

    clearCart: () => {
      set(() => ({
        items: [],
      }));
    },

    getTotalPrice() {
      const { items } = get();
      return items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  }))
);

export default useCartStore;

// import PropTypes from "prop-types";

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCartItems = localStorage.getItem("cartItems");
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product, quantity) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   const updateQuantity = (productId, quantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
//       )
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const cartTotal = getTotalPrice();
//   const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         cartTotal,
//         itemCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
