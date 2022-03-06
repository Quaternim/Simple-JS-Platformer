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

//----------//
//Canvas End//
//----------//

//-------// ------------- //
// Player// (and Gravity) //
//-------// ------------- //

let grav = 0.45


//classes

class Player {
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
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.draw()
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height - 50){
        this.velocity.y += grav
        }

        
    }
}

    function createImage(imageSrc) {
        const image = new Image()
        image.src = imageSrc
        return image
    }
class Platform {
    constructor({x, y}){
        this.position = {
            x,
            y
        }
    this.image = createImage(platform)
    this.width = createImage(platform).width
    this.height= createImage(platform).height
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class PlatformSmallTall {
    constructor({x, y}){
        this.position = {
            x,
            y
        }
    this.image = createImage(platformSmallTall)
    this.width = createImage(platformSmallTall).width
    this.height= createImage(platformSmallTall).height
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class genericObject {
    constructor({x, y}){
        this.position = {
            x,
            y
        }
    this.image = createImage(background)
    this.width = this.image.width
    this.height= this.image.height
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}



class hill{
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
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

//
//genericObject means background object
//


let platforms = [

    ]

    
let genericObjects = [

]

let hillObjects = [

]



let player = new Player;
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
platforms = [
    new PlatformSmallTall({
        x: createImage(platformSmallTall).width  + 1920,
        y: 420,
        image: createImage(platformSmallTall)}),
    new PlatformSmallTall({
        x: createImage(platformSmallTall).width  + 1920,
        y: 420,
        image: createImage(platformSmallTall)}),
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


    
genericObjects = [
    new genericObject({
        x: -500,
        y: -1,
        image: createImage(background)
    }),
]

hillObjects = [
    new hill({
        x: -1,
        y: -1,
        image: createImage(hill)
    })
]



player = new Player;
let scrollOffset = 0;

}

// Repeated Drawing and walking

function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    

    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })
    
    hillObjects.forEach(hill => {
        hill.draw()
    })
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = walkSpeed
    } 
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -walkSpeed
    } 
    //if (keys.left.pressed + keys.right.pressed == false) {
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
            //

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
    if (scrollOffset > 1500 && scrollOffset < 1800) {
        close = true;
    }

    if (scrollOffset > 1900) {
        close = false;
        won = true;
    }

    if (scrollOffset < 1900) {
        won = false;
        c.fillText("", canvas.width / 4 - 100, canvas.height / 2);

    }

    if (scrollOffset < 1500) {
        won = false;
        close = false;
    }

    if (player.position.y > canvas.height) {
            console.log('dead')
            init()
        }    
        
    if (close == true) {
        c.font = "50px Georgia";
        c.fillText("Jump Off The Platform To Win", canvas.width / 4 - 100, canvas.height / 2);
        }

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

addEventListener('keydown', ({ key}) => {

    switch (key) {
        case 'a': console.log('left')
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
    console.log(keys.right.pressed)
})
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