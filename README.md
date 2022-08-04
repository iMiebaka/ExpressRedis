# ExpressRedis
<p align="center" >
<img src="https://miro.medium.com/max/1200/1*4ZEonl9174VQzf2842OXpg.png" width=500 />
</p>

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About 🤔  <a name = "about"></a> 

I had a wonderful talk with some tech geeks today, which inspired this implementation. I had to create this project to show how to apply Redis with ExpressJS.


### Prerequisites 🧪
Clone the Repo and make installations

```
git clone git@github.com:iMiebaka/ExpressRedis.git
```

### Installing 💻
You'll need Node installed on your machine to get this to work


```
cd ExpressRedis
npm install && npm start
```
[Lunch the app on your browser](http://localhost:3001) 


## Usage 🏄 <a name = "usage"></a>
This show an app with a promise that takes 1 to 3 seconds to load.
The timeout is cached and used the next time the app run, making it lightning fast

