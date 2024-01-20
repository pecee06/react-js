# Getting started
* npm i framer-motion

# Motion component
* You can make any HTML tag, a motion tag, just by prepending the tag name with "motion." Eg. <div.motion />, <button.motion />, etc.
* They accept 2 main props - "initial" & "animate", which respectively represent the from & to state of a component
* To alter the pace & type of animation, we can pass a "transition" prop
* To specify how the component should exit the animation, we can pass an "exit" prop

# AnimatePresence
* It allows components to animate out when they're removed from the React tree
* It's required to enable exit animations
* You have to wrap up the component within **AnimatePresence**

# Layout animation
* Just by adding a layout attribute in any motion component, we can animate changes in its browser layout
* For example, animating a flex container's justify-content from flex-start to flex-end

# Gestures
* Used for animating various events - hover, click
* The props begin with a "while" followed by the event name

# MotionConfig
* This is used to set configuration options for all child motion components. It only accepts one prop, "transition"
* You have to wrap up the component within **MotionConfig**