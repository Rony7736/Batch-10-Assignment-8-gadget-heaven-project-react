
## 1. Project name :
# BPL-DREAM 11
Live Link : https://rony-assignment-8-react-router.surge.sh

https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf

## 2. Short description of this project :

GadgetHeaven is a gadget-buying website with a clean and structured design. It features a navigation bar, category sidebar, product details pages, and interactive functionalities like shopping cart and wishlist. 


## 3. Technologies used :

* **React** 
* **Tailwind CSS**
* **React Icons**
* **React Toastify**
* **useState**
* **useEffect**


## 4. Features of the project :

1. **Structured Navigation & Product Display**: Users can browse various gadget categories (e.g., computers, phones, smartwatches) from a sidebar.
2. **Shopping Cart & Wishlist**: Add gadgets to cart or wishlist with seamless management via Context API and LocalStorage.
3. **Product Filtering & Sorting**: Sort gadgets by price, filter by category, and see real-time cart and wishlist badges.
4. **Detailed Product Pages**: Each gadget has a dedicated page with comprehensive details and specifications.
5. **Edge Case Handling**: Manages reloads and prevents errors, ensuring a smooth user experience across pages.

## 5. Key Functionalities

### Navbar
- Menu items: **Logo, Brand Name, Dashboard, Stats**
- Active route indication for clear navigation

### Home Page
- **Banner**: Attractive banner leading to Dashboard.
- **Categories Sidebar**: Displays gadget categories such as computers, phones, and more.
- **Gadget Cards**: Grid display with each card showing the product image, name, price, and a 'Details' button.
- **Footer**: Contains relevant information and is visible on all pages.

### Details Page
- Displays all product details, with options to add to cart or wishlist.
- Shows cart item count in the Navbar after adding an item.
- Wishlist button disabled after one addition per item.

### Dashboard Page
- **Tabs**: 'Cart' and 'Wishlist' tabs for easy item management.
- **Total Price**: Displays total cart price with a 'Sort by Price' option (high to low).
- **Toasts**: Shows messages when adding items to cart or wishlist.

### Additional Routes
- **404 Page**: Handles errors gracefully with a custom error page.
- **Dynamic Title**: Each page has a unique title for SEO and user experience.
- **Statistics Page**: Displays a composed chart with prices vs. product names.

## 6.Local Storage
LocalStorage: For data persistence, ensuring that cart and wishlist data remain intact even when the user refreshes the page or returns after leaving. LocalStorage allows us to save the current cart and wishlist state, so users can continue from where they left off without data loss.