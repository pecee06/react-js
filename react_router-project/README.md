# Intro

* react-router-dom helps to change the URL and not reloading the entire page
* Yes, its a simulation! Just an eye candy
* We need to understand that by default React was doing the same thing, i.e., changing the UI without reloading entire page
* But core React is not able to change the URL of page
* This is a bit fishey & inconvinient for users, and that's where react-router-dom fits in

# Getting Started

* npm i react-router-dom
* We won't need App.jsx, so delete it
* Inside main.jsx render **<RouterProvider router={router}/>**
* Obviously now we need to create a router
* We can create our router using **createBrowserRouter** which accepts different routes
* These routes can be created using **createRoutesFromElements**

## Sample syntax of creating a router

const routes = createRoutesFromElements(
	<Route path='/' element={Root}>
		<Route path={} element={} />
		<Route path={} element={}>
			<Route path={} element={} />
			<Route path={} element={} />
		</Route>
	</Route>
)
// The nesting can be as complex as you want
const router = createBrowserRouter(routes)

* The child components render in place of **<Outlet/>**
* Child's path is automatically prefixed with parents path in the URL

# Dealing with links

* In HTML, we have anchor tag (a) for linking
* But using this will give the controls to the browser and the page will get reloaded
* We don't want that
* Thus we use **Link** component (provided by react-router-dom) instead of anchor tag
* Just like "href" of anchor tag, here we have "to" attribute
* This attribute can be a string representing a route, or an object containing a route and state

* We have another way to deal with links - **NavLink** component (provided by react-router-dom)
* With NavLink, we have the ability to know whether our link is in an "active" or "pending" state
* We can adapt these states to our needs in order to display the link status differently
* Its attributes provides us with callbacks with {isActive, isPending} states

# Dynamic paths

* For generating dynamic content, we sometimes need to accept some parameters
* Now obviously we can't explicitely handle the infinite number of routes with different parameters
* For that, we use a special syntax for path - ':<param>' whose route remains nested within the route of its parent path say <path/>
* For fetching the param in the component, we have a hook, namely **useParams**, provided by react-router-dom
* Now for displaying dynamic content, we need to make AJAX requests. Certainly this takes time
* This leads to a bad UX that after clicking on the Link, the loading of data starts
* **loader** attribute of <Route/> helps us start loading the data when the mouse is hovering above the Link
* It accepts a function which fetches data
* For using this data in our component, we use a hook, namely **useLoaderData**, provided by react-router-dom

# Handling invalid URLs

* At the lowest level within root level we can define path as '*' and render an error page, say 404 Not Found