//-------//
//Imports//
//-------//

import platform from '../../resources/images/platform.png'
import hills from '../../resources/images/hills.png'
import background from '../../resources/images/background.png'
import platformSmallTall from '../../resources/images/platformSmallTall.png'

//------//
//Canvas//
//------//

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const walkSpeed = 7;

canvas.width = 1024
canvas.height = 576


//-------//
// Player//
//-------// 


let grav = 0.45



// Classes


class Player {

    // this basically declares variables about the Player class, like its position, width color etc.

    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.color = "red";
        this.width = 30;
        this.height = 30;
    }

// this just draws the player
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

// this updates the player -- similar to drawing
    update(){
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.draw()
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height - 50){
        this.velocity.y += grav
        }

        
    }
}



// a function to make images easier because variables kept getting mixed up and breaking.

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}




class Platform {

    // basically same constructor as the player, just less things declared
    constructor({x, y}){
        this.position = {
            x,
            y
        }

    //  uses the createImage mentioned above
    this.image = createImage(platform)
    this.width = createImage(platform).width
    this.height= createImage(platform).height
    }

    // same kind of draw function in the player class
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}





class PlatformSmallTall {

    // same again
    constructor({x, y}){
        this.position = {
            x,
            y
        }
    this.image = createImage(platformSmallTall)
    this.width = createImage(platformSmallTall).width
    this.height= createImage(platformSmallTall).height
    }

    //same again
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}




// this is actually the background but i couldn't be bothered to change the name 
class genericObject {

    //same again
    constructor({x, y}){
        this.position = {
            x,
            y
        }
    this.image = createImage(background)
    this.width = this.image.width
    this.height= this.image.height
    }

    //same again
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}



class hill{

    //same again
    constructor({x, y}){
        this.position = {
            x,
            y
        }
    this.image = createImage(hills)
    this.width = this.image.width
    this.height= this.image.height
    }
    draw(){

        //same again
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}



// empty let variables to be changed in the init function
let platforms = [

    ]

    
let genericObjects = [

]

let hillObjects = [

]


let player = new Player;
//key objects used for moving character
let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}
let scrollOffset = 0;






function init() {

    // creates platforms
platforms = [
    // PlatformSmallTall(s) are the taller platforms you jump on
    new PlatformSmallTall({

        // where it is on the x axis, calculated by adding 1920 to the PlatformSmallTall image's width
        x: createImage(platformSmallTall).width  + 1920,

        // where it is on the y axis
        y: 420,

        // what image it uses, again using the createImage function
        image: createImage(platformSmallTall)}),
    new PlatformSmallTall({

        // "x:, y:, image:," explained in the comments above 
        x: createImage(platformSmallTall).width  + 1920,
        y: 420,
        image: createImage(platformSmallTall)}),

        // the floor platforms
    new Platform({
        x: -5, y: 520,
        image: createImage(platform)}),
    new Platform({
        x: createImage(platform).width + 220,
        y: 520,
        image: createImage(platform)}),
    new Platform({
        x: createImage(platform).width *2 + 350,
        y: 520,
        image: createImage(platform)}),
    new Platform({
        x: createImage(platform).width *3 + 740,
        y: 520,
        image: createImage(platform)}),
    ]





    //Background main

genericObjects = [
    new genericObject({

        //tells where to place the background
        x: -500,
        y: -1,

        //tells what image to use for the background
        image: createImage(background)
    }),
]

// background hills

hillObjects = [
    new hill({

        //same as above
        x: -1,
        y: -1,
        image: createImage(hill)
    })
]


player = new Player;
let scrollOffset = 0;

}





// Repeated Drawing -- Makes anything that moves work

function animate(){

    //this is what makes the animate function repeat
    requestAnimationFrame(animate);

    // this makes the background white if the background image doesn't load
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    
// render background

    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })

// render hills
    hillObjects.forEach(hill => {
        hill.draw()
    })

// render platform
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()


    
// make player move without bg moving
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = walkSpeed
    } 

// make player move without bg moving
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -walkSpeed
    } 
// make player move by bg moving
    else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach(platform => {
                platform.position.x -= walkSpeed
            })


            // parallax scroll

            genericObjects.forEach(genericObject => {
                genericObject.position.x -= 3
            })

            hillObjects.forEach(hill => {
                hill.position.x -= 3
            })
            

        } else if (keys.left.pressed) {
            scrollOffset -= 5
        platforms.forEach(platform => {
            platform.position.x += walkSpeed
        })
        // parallax scroll

        genericObjects.forEach(genericObject => {
            genericObject.position.x += 3
        })
        hillObjects.forEach(hill => {
            hill.position.x += 3
        })
        //
    }
    } 


    // Win Game
    let won = false;
    let close = false;
    //make the variable close true
    if (scrollOffset > 1500 && scrollOffset < 1800) {
        close = true;
    }

    //make the variable won true
    if (scrollOffset > 1900) {
        close = false;
        won = true;
    }

    // make variable won false
    if (scrollOffset < 1900) {
        won = false;
        c.fillText("", canvas.width / 4 - 100, canvas.height / 2);
    }

    // make both false
    if (scrollOffset < 1500) {
        won = false;
        close = false;
    }
    
    // kill player
    if (player.position.y > canvas.height) {
            console.log('dead')
            init()
        }    
    // make it say jump off map to win    
    if (close == true) {
        c.font = "50px Georgia";
        c.fillText("Jump Off The Platform To Win", canvas.width / 4 - 100, canvas.height / 2);
        }
    // make it say you win
    if (won == true) {
        c.fillStyle = 'white'
        c.fillRect(-1, -1, canvas.width, canvas.height);
        c.font = "70px Georgia";
        c.fillStyle = 'black';
        c.fillText("You Win!, Ctrl + R to play again.", canvas.width / 9 - 100, canvas.height / 2);

        } else c.fillText("", canvas.width / 2 - 100, canvas.height / 2);


    //Platform Collision Detection//
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <=platform.position.x + platform.width) {
            player.velocity.y = 0
        }
       /* if (player.position.y + player.height <= PlatformSmallTall.position.y && player.position.y + player.height + player.velocity.y >= PlatformSmallTall.position.y && player.position.x + player.width >= PlatformSmallTall.position.x && player.position.x <=PlatformSmallTall.position.x + PlatformSmallTall.width) {
            player.velocity.y = 0
        }*/
    })}





init()
animate()



// make stuff happen when keys pressed
addEventListener('keydown', ({ key}) => {

    switch (key) {
        case 'a': console.log('left')

    // "keys.----.pressed = true" basically just sets a variable to true to be used later because if you put the walk function thing here it wont work for some people
        keys.left.pressed = true
        break
        case 's': console.log('down')
        break
        case 'd': console.log('right')
        keys.right.pressed = true
        break
        case 'w': console.log('up')
        player.velocity.y = -10
        break
        case ' ': console.log('space')
        player.velocity.y = -10
        break
    }
})

// the opposite of whats shown above
addEventListener('keyup', ({ key}) => {

    switch (key) {
        case 'a': console.log('left')
        keys.left.pressed = false
        break
        case 'd': console.log('right')
        keys.right.pressed = false
        break
        case 'w': console.log('up')
        player.velocity.y -= 1
        break
        case 'space': console.log(' ')
        player.velocity.y -= 1
        break

    }
    console.log(keys.right.pressed)
})



//---------//
//Platforms//
//---------//


//------------------------------------------------------------------//
//------------------------------------------------------------------//    
// NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE // 
//               MAKE PLATFORMER LIBRARY, LIKE SLOLIB               // 
// NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE NOTE // 
//------------------------------------------------------------------//
//------------------------------------------------------------------//    

// 
