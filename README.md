# Drum Machine

## Usage

You can play with the application yourself at [this link](https://bju12290.github.io/drum-machine/). 

This application is a simple soundpad/drumpad. You can either click/tap the buttons on screen, or use your keyboard to control it. A volume slider sits in the top-right corner of the application, and as you might've guessed, this can be used to adjust the volume. As you press buttons on the drum machine, the "display" will update to show you the name of the sound you just played. 


## Technologies Used
 - [Vite](https://vitejs.dev/): A build tool that offers fast development and optimized production builds for modern web applications.
 - [React](https://react.dev/): A JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive components.
 - [Bootstrap](https://getbootstrap.com/): A front-end framework that provides pre-designed UI components and responsive layout utilities.

 ## Project Structure
- **'src/'**: At the heart of the application, the **'src/'** directory houses various project assets, the **main.jsx** file for routing, the **App.jsx** component for high-level structure definition, and the **App.css** file for application-wide styling. **Index.css** contains a :root, html, body selector
   - **'App.jsx/'** : Contains major application functionality: The logo, display, and buttons, including their logic. External Components are also imported and rendered here.
   - **'App.css/'** : Contains application-wide styling, including styling for most (if not all) device sizes.
   - **'index/html/'** : Audio Elements are hardcoded into the index.html. You can read more about why I made this decision in the **Challenges Faced** section below.
   - **'components/'** : This directory serves as a container for reusable components that are used throughout the application. In this example, our only component is the VolumeSlider. I placed it in the components folder to maintain a seperation of concerns.
        - **'VolumeSlider.jsx/'** : Contains functionality for the VolumeSlider Component. 
        - **'VolumeSlider.css/'** : Contains styling for the VolumeSlider Component.

## Challenges Faced
- I had originally mapped over an array to render each button and audio element to the DOM, however this lead to some very strange functionality. If state was updated, audio wouldn't play. I do believe I understand the cause, but I couldn't figure out a proper solution to the issue. As such I hard coded the audio elements into the index.html file directly. This corrected the issue, and seeing as there is currently no reason to change them, I figured this was a fitting solution. 

 #### Contact Information

Feel free to contact via email! 

```brian.phartnettjr@gmail.com```
 #### Known Issues
 
 - Pull the Volume Slider all the way to the left and you'll see it, it's _hideous_.

 #### Project Goals

- Render 9 Unique Button Elements to the Page, That Upon Being Clicked Play a Corresponding Unique Audio Clip :white_check_mark:
- Hook Up Unique Buttons to Keypress Events and Have the Unique Audio Clip Play for the Corresponding Button :white_check_mark:
- Have a Unique Name Describing the Sound for Each Button Press, and Display the Corresponding Name When the Related Button is Pressed :white_check_mark:

#### Additional Challenges

- Add a Functioning Volume Slider :white_check_mark:



 

