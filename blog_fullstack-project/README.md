# Using Environment Variables

* We store environment variables in .env file
* Generally we access them like - process.env.variable-name
* But when using Vite bundler, we have to access them like - import.meta.env.variable-name
* Format for variable name in Vite - The variable should be prefixed with VITE_
* Always write values of environment varibles within double quotes
* Set up a config file to export all your environment variables

# Using Appwrite

* Create a database
* Create a collection
* Add attributes to your collection
* Make a bucket (storage)
* Set up authorization, database & storage services

# State Management

* First create a store
* Create slices in "features" directory
* Wrap main.jsx within "Provider"
* Use useSelector hook for reading data from the store
* Use useDispatch hook for dispatching actions