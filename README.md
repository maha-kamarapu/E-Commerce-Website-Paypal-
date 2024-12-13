# Comprehensive E-Commerce Website for Restaurants
This web application is a comprehensive solution for a restaurant, combining table reservations with an integrated e-commerce platform. Users can explore a detailed menu, add items to their cart, and complete secure payments via real-time PayPal integration. In addition to shopping, the platform enables customers to reserve tables by entering their preferences, such as the number of guests, date, and time, ensuring a seamless booking experience. With its user-friendly interface and responsive design, the application offers an engaging and efficient experience across all devices.

Built with modern web technologies, the system uses Node.js and Express.js for backend logic, routing, and API endpoints. MongoDB efficiently stores customer data, reservations, orders, and session details. The front-end is powered by EJS templates, creating dynamic and interactive views, while Bootstrap and custom CSS ensure a responsive design. jQuery and Nice Select enhance the user interface with features like improved dropdowns. PayPal integration provides secure and fast real-time payment processing, ensuring convenience and reliability.

### Some of the frontend webpages are included as reference.
1. Home Page:   
<img width="960" alt="front" src="https://github.com/user-attachments/assets/b48bc47d-3135-4636-b456-e7c9693c542d" />

2. Menu:
<img width="960" alt="menu" src="https://github.com/user-attachments/assets/9dd81665-43be-4c24-832d-c3e64d6e5516" />

3. About:
<img width="960" alt="about" src="https://github.com/user-attachments/assets/bfdfd951-bbfc-47da-b761-d46c644110ff" />

4. Cart:
<img width="960" alt="cart" src="https://github.com/user-attachments/assets/9343e974-1524-4a91-ad0f-28eb25a72d0a" />

5. Payment Getaway:
<img width="960" alt="payment" src="https://github.com/user-attachments/assets/cfce6153-9cc9-4b91-be43-6f017dd129ba" />

6. Contact information:
<img width="960" alt="contact" src="https://github.com/user-attachments/assets/97ce8ecf-530e-416d-a644-1a1f67d47aad" />

## Requirements

- Node.js (v14 or higher)
- MongoDB 
- NPM (Node Package Manager) 
- XAMPP Control Panel

  ## Installation

1. Clone the Repository:
```
git clone https://github.com/maha-kamarapu/E-Commerce-Website-Paypal-
```


2. Navigate to the Project Directory:
```
cd E-Commerce Website(Paypal)
```

3. To install all required dependencies, run:

```
npm install
```
This will read the package.json file and install all necessary modules, such as Express, Mongoose, EJS, and others.

4. Install MongoDB Locally (if necessary):
   
If you don’t have MongoDB installed locally and prefer not to use a cloud database (e.g., MongoDB Atlas), download and install MongoDB from the official MongoDB website.

After installation, start the MongoDB service: 
```
mongod
```
## Execution

1. Use the connection string for your MongoDB instance (local or MongoDB Atlas). Create a database in the MongoDB Atlas and paste it's name in the db.js and seed.js files in the following contexts:

 - db.js file: 
```

const mongoURI = 'mongodb://127.0.0.1:27017/your_database_name';

```
- seed.js file:
  
  ```
  mongoose.connect('mongodb://127.0.0.1:27017/your_database_name',
  ```

2. The database can be seeded with products in two ways:
- Populate the MongoDB database with product data via the seeder script included in the files(/model/Product.js). Run the seeder script as follows:

```
node seed.js
```

- The products can be added directly in the Product section of the MongoDB database in the MongoDB Atlas.

3. PayPal Setup:

Sign Up for PayPal Developer by creating an account.

- Navigate to Dashboard > My Apps & Credentials.
- Click on Create App and give it a name.
- Select Sandbox mode for testing.
- Copy the Client ID and paste it into views/pages/payment.ejs file.
```
    <!-- Replace it with your own sandbox Business account app client ID -->
    <script src="https://www.paypal.com/sdk/js?client-id=AXkeZWRxKy4pOlnBwBwUnC0Uks_EhQzO3SSz0gUrMCfL53L2n6Ueis9dnDCqRlBQ5Plh2pXAJyJcGOtn&currency=USD"></script>
   
   ```
4. Connect the server:
   
Open the XAMPP control panel to start the Apache server which opens the local ports to access.

5. To start the application , run:

```
npm start
```
- In vs code:
```
node index.js
```
The application will start and run on http://localhost:8080 by default.

- If you wish to run the server in development mode with auto-reload on changes, use:

```
npm install -g nodemon
nodemon index.js
```
6. Access the Application:

Open your browser and navigate to http://localhost:8080

7. All the details entered while placing an order, booking a table are stored in the MongoDB database under your_database_name/Order, your_database_name/Booking respectively.







