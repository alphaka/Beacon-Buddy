# BeaconBuddy

### NODE.js
We will be using expo go for this project. Expo is a set of tools and services built around React Native to would allow us to write a mobile app on the fly.

1. First, install `node.js`, a Javascript package manager on your machine machine. https://nodejs.org/en/download/
2. Git clone this repo
  
    ```
    git clone https://github.com/alphaka/Beacon-Buddy
    ```
3. Fire up your terminal and install Expo running
    ```
    npm i -g expo-cli
    ```
4. Open up the project directory with your favorite IDE. 
   We do recommend using VS CODE and adding these two extensions `React Native Tools` and `Babel JavaScript`.
5. Navigate in to `BeaconBuddy-App`.
    ```
    cd Beacon-Buddy/
    ```

6. Before running on the web, install the below dependencies first
    ```
    npx expo install react-native-web@~0.18.9 react-dom@18.1.0
    ```
    then
    ```
    npx expo install @expo/webpack-config@^0.17.2
    ```
7. Finally, go for a spin with
    ```npm start``` or ```npx expo start```
    
      then 
      - press `w` for web page.
      - press `i` for ios. Do make sure you do have XCode install first!
8. To stop the server, press `ctrl` + `D` in your terminal.

9. Enjoy!


    Note: You can change your iOS simulator by selecting the simulutor, and nagivating to `File` > `Open Simulator` > `iOS X.X` > `iPhone Model You'd Like`!

