<!-- VARS -->

[license-badge]: https://img.shields.io/github/license/joaomnabais/proffy
[star-badge]: https://img.shields.io/github/stars/joaomnabais/proffy?logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/joaomnabais/proffy
[codacy-badge]: https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db
[license-url]: https://github.com/joaomnabais/proffy/blob/master/LICENSE
[issues-url]: https://github.com/joaomnabais/proffy/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/

<!-- VARS -->

<div align="center">  

<img width="500px" align="center" src="https://github.com/joaomnabais/proffy/blob/master/.github/proffy.png"></img>

</div>

<br>
<p align="center">
    Online teaching platform made with Node, React and React Native using Typescript🚀
</p>



<div align="center">  
    
[![License][license-badge]][license-url]
![Git Stars][star-badge]
![Last Commit][last-commit-badge]
![Codacy Quality][codacy-badge]


</div>


### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Server](#Server)
        * [Web](#Web)
        * [Mobile](#Mobile)
    * [Running](#Running)
* [Issues](#Issues-)
    * [Report](#Report)
* [License](#License-)

### Getting Started 🚀

#### Cloning

```ps
# Create a directory in your desired location

# Clone the repository inside the directory using git
$ git clone https://github.com/joaomnabais/proffy.git
```

#### Requirements
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]

##### Server 

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

>The above command will install all third party dependencies used.

To start the server you need the database, to make migrations use the command:

```
$ yarn knex:migrate
```
>The above command is a custom command made on `package.json` file. (Ln 8, Col 5)

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd web
$ yarn install
```

>The above command will install all third party dependencies used.

##### Mobile

This projects use third party dependecies and fonts that need to be installed in development, use that command to install all needed dependencies and fonts

```ps
$ cd mobile

# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Installing all dependencies required
$ yarn install
```
>The above command will install all third party dependencies and fonts used. 

#### Running

To start the Backend Server run the command

```ps
# Entering in server directory
$ cd server

# Run the Backend Server
$ yarn start
```

To start the Web Server run the command

```ps
# Entering in web directory
$ cd web

# Run the Web Server
$ yarn start
```

To run the Mobile Version run the command

```ps
# Entering in mobile directory
$ cd mobile

# Run the Mobile Version
$ yarn start
```

### Issues 🐛

#### Report

In case you are having any problem you can report in [Issues][issues-url] session.

### License 📝
This project is under the MIT license. See the [LICENSE][license-url] for more information.
