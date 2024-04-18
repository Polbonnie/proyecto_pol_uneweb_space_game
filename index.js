function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage   = new Image(); // nave
    var enemiespic1  = new Image(); // enemigo 1
    var enemiespic2 = new Image(); // enemigo 2
    var enemiespic3 = new Image(); //enemigo 3
    var enemiespic4 = new Image(); //enemigo 4
    var enemiespic5 = new Image(); //enemigo 5
    var enemiespic6 = new Image(); //enemigo 6

    // Imagen de fondo y Imagen de la nave espacial
    backgroundImage.src = "images/background-pic.jpg"; //Imagen de fondo
    naveImage.src       = "images/spaceship-pic.png"; //Imagen de la nave espacial
    // Enemigos fotos
    enemiespic1.src     = "images/enemigo1.png";
    enemiespic2.src     = "images/enemigo2.png";
    enemiespic3.src     = "images/enemigo3.png";
    enemiespic4.src     = "images/enemigo4.png";
    enemiespic5.src     = "images/enemigo5.png";
    enemiespic6.src     = "images/enemigo6.png";
    // Ancho y alto (canvas)
    var cW = ctx.canvas.width; // 700px 
    var cH = ctx.canvas.height;// 600px

    // Plantilla para naves
    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }

    //Sonidos del juego
    const laserSound = new Audio('./sounds/laser.wav');
    const explosionSound = new Audio('./sounds/explosion.wav');

    function playLaserSound() {
        console.log('Playing laser sound...');
        laserSound.currentTime = 0;
        laserSound.play();
    }
    function playExplosionSound() {
        explosionSound.currentTime = 0;
        explosionSound.play();
      }

    // (CREADOR DE ENEMIGOS)
    //Para reducir una o dos funciones repetitivas, he realizado algunos pequeños cambios en la forma de crear enemigos.
    var enemies = [
                   new enemyTemplate({id: "enemy1", x: 100, y: -20, w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy2", x: 225, y: -20, w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy3", x: 350, y: -20, w: 80, h: 30 }),
                   new enemyTemplate({id: "enemy4", x:100,  y:-70,  w:80,  h: 30}),
                   new enemyTemplate({id: "enemy5", x:225,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy6", x:350,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy7", x:475,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy8", x:600,  y:-70,  w:80,  h: 30}),
                   new enemyTemplate({id: "enemy9", x:475,  y:-20,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemy10",x: 600, y: -20, w: 50, h: 30}),

                   // Segundo grupo de enemigos
                   new enemyTemplate({ id: "enemy11", x: 100, y: -220, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy12", x: 225, y: -220, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy13", x: 350, y: -220, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy14", x: 100, y: -270, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy15", x: 225, y: -270, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy16", x: 350, y: -270, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy17", x: 475, y: -270, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy18", x: 600, y: -270, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy19", x: 475, y: -200, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy20", x: 600, y: -200, w: 50, h: 30, image: enemiespic2 }),

                   // Tercer grupo de enemigos
                   new enemyTemplate({ id: "enemy21", x: 100, y: -420, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy22", x: 215, y: -420, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy23", x: 350, y: -420, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy24", x: 100, y: -470, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy25", x: 215, y: -470, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy26", x: 350, y: -470, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy27", x: 450, y: -470, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy28", x: 450, y: -470, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy29", x: 475, y: -400, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy30", x: 550, y: -400, w: 50, h: 30, image: enemiespic3 }),

                   //Cuarto grupo de enemigos
                   new enemyTemplate({ id: "enemy31", x: 110, y: -520, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy32", x: 225, y: -520, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy33", x: 360, y: -520, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy34", x: 110, y: -570, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy35", x: 225, y: -570, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy36", x: 370, y: -570, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy37", x: 470, y: -570, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy38", x: 470, y: -570, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy39", x: 485, y: -500, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy40", x: 650, y: -500, w: 50, h: 30, image: enemiespic4 }),

                   //Quinto grupo de enemigos
                   new enemyTemplate({ id: "enemy41", x: 120, y: -620, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy42", x: 235, y: -620, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy43", x: 370, y: -620, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy44", x: 120, y: -670, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy45", x: 235, y: -670, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy46", x: 380, y: -670, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy47", x: 480, y: -670, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy48", x: 480, y: -670, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy49", x: 495, y: -600, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy50", x: 660, y: -600, w: 50, h: 30, image: enemiespic5 }),

                   //Sexto grupo de enemigos
                   new enemyTemplate({ id: "enemy51", x: 120, y: -720, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy52", x: 235, y: -720, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy53", x: 370, y: -720, w: 80, h: 50, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy54", x: 120, y: -770, w: 80, h: 50, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy55", x: 235, y: -770, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy56", x: 380, y: -770, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy57", x: 480, y: -770, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy58", x: 480, y: -770, w: 80, h: 50, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy59", x: 495, y: -700, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy60", x: 660, y: -700, w: 50, h: 30, image: enemiespic6 }),


                   //Septimo grupo de enemigos
                   new enemyTemplate({ id: "enemy61", x: 120, y: -820, w: 50, h: 30, image: enemiespic1 }),
                   new enemyTemplate({ id: "enemy62", x: 235, y: -820, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy63", x: 370, y: -820, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy64", x: 120, y: -870, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy65", x: 235, y: -870, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy66", x: 380, y: -870, w: 50, h: 30, image: enemiespic1 }),
                   new enemyTemplate({ id: "enemy67", x: 480, y: -870, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy68", x: 480, y: -870, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy69", x: 495, y: -800, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy70", x: 660, y: -800, w: 50, h: 30, image: enemiespic5 }),

                   //Octavo grupo de enemigos
                   new enemyTemplate({ id: "enemy71", x: 120, y: -920, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy72", x: 235, y: -920, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy73", x: 370, y: -920, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy74", x: 120, y: -970, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy75", x: 235, y: -970, w: 50, h: 30, image: enemiespic1 }),
                   new enemyTemplate({ id: "enemy76", x: 380, y: -970, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy77", x: 480, y: -970, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy78", x: 480, y: -970, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemy79", x: 495, y: -900, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy80", x: 660, y: -900, w: 50, h: 30, image: enemiespic1 }),

                   //Noveno grupo de enemigos
                   new enemyTemplate({ id: "enemy81", x: 120, y: -1020, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy82", x: 235, y: -1020, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy83", x: 370, y: -1020, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy84", x: 120, y: -1070, w: 80, h: 50, image: enemiespic1 }),
                   new enemyTemplate({ id: "enemy85", x: 235, y: -1070, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy86", x: 380, y: -1070, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemy87", x: 480, y: -1070, w: 50, h: 30, image: enemiespic1 }),
                   new enemyTemplate({ id: "enemy88", x: 480, y: -1070, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy89", x: 495, y: -1000, w: 50, h: 30, image: enemiespic1 }),
                   new enemyTemplate({ id: "enemy90", x: 660, y: -1000, w: 50, h: 30, image: enemiespic3 }),

                   //Decimo grupo de enemigos
                   new enemyTemplate({ id: "enemy91", x: 110, y: -1120, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy92", x: 225, y: -1130, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy93", x: 360, y: -1140, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy94", x: 110, y: -1170, w: 80, h: 50, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy95", x: 225, y: -1170, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy96", x: 370, y: -1170, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy97", x: 470, y: -1170, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy98", x: 470, y: -1170, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemy99", x: 485, y: -1100, w: 50, h: 30, image: enemiespic6 }),
                   new enemyTemplate({ id: "enemy100", x: 650, y: -1110, w: 50, h: 30, image: enemiespic6 })
            ];

    // Esto permite representar más enemigos sin necesidad de una función por conjunto de enemigos.
    // Esto también obliga a los enemigos a comprobar si están golpeando al jugador.
    var renderEnemies = function (enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            // Detecta cuando los enemigos alcanzan un nivel inferior
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }

    function Launcher(){
        // (ubicación de balas)
        this.y = 500, 
        this.x = cW*.5-25, 
        this.w = 100, 
        this.h = 100,   
        this.direccion, 
        this.bg="red", // (color de bala)
        this.misiles = [];

         // Personalizacion.
         this.gameStatus = {
            over: false, 
            message: "",
            fillStyle: 'red',
            font: 'italic bold 36px Helvetica, sans-serif',
        }

        this.render = function () {
            if(this.direccion === 'left'){
                this.x-=5;
            } else if(this.direccion === 'right'){
                this.x+=5;
            }else if(this.direccion === "downArrow"){
                this.y+=5;
            }else if(this.direccion === "upArrow"){
                this.y-=5;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 10, 10);
            ctx.drawImage(naveImage,this.x,this.y, 100, 90); // Balas en el mismo lugar que la nave
        this.drawLaser = function () {
            ctx.drawImage(laserImage, this.x, this.y);
            };

            for(var i=0; i < this.misiles.length; i++){
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y-=5, m.w, m.h); // Direccion de balas
                this.hitDetect(this.misiles[i],i);
                if(m.y <= 0){ // Si una bala pasa los límites del lienzo, la funcion lo retira.
                    this.misiles.splice(i,1); 
                }
            }
            // Esto pasa si ganas
            if (enemies.length === 0) {
                clearInterval(animateInterval); // Detener el bucle de animación del juego.
                ctx.fillStyle = 'yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('You win!', cW * .5 - 80, 50);
            }
        }
        // (bala)
        this.hitDetect = function (m, mi) {
            console.log('crush');
            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if(m.x+m.w >= e.x && 
                   m.x <= e.x+e.w && 
                   m.y >= e.y && 
                   m.y <= e.y+e.h){
                    this.misiles.splice(this.misiles[mi],1); // Elimina la bala
                    enemies.splice(i, 1); // Elimina al enemigo si una bala le pega
                    playExplosionSound();
                    document.querySelector('.barra').innerHTML = "Destroyed "+ e.id+ " ";
                }
            }
        }
        // Detecta si un enemigo pasa la linea de la nave
        this.hitDetectLowerLevel = function(enemy){
            // Si la ubicación del enemigo es mayor que 550, entonces sabemos que pasó el nivel inferior.
            if(enemy.y > 550){
                this.gameStatus.over = true;
                this.gameStatus.message = 'Enemy(s) have passed!';
            }
            // Esto detecta un choque de la nave con enemigos
            // console.log(this);
            // this.y -> Ubicación de la nave
            if(enemy.id === 'enemy3'){
                //console.log(this.y);
                console.log(this.x);
            }
            // a) Si el enemigo y es mayor que esto.y - 25 => entonces sabemos que hay una colisión
            // b) Si el enemigo x es menor que this.x + 45 && enemigo x > this.x - 45 entonces sabemos que hay una colisión
            if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)) { // Comprueba si el enemigo está a la izquierda o a la derecha de la nave espacial
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'You Died!'
                }

            if(this.gameStatus.over === true){  
                clearInterval(animateInterval); // Detener el bucle de animación del juego.
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;
                // Mostrar texto en canvas
                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50); // texto x , y
            }
        }
    }
    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }
    var animateInterval = setInterval(animate, 6);
    
    var left_btn  = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn  = document.getElementById('fire_btn'); 

   document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) // Flecha hacia la izquierda
        {
         launcher.direccion = 'left';  
            if(launcher.x < cW*.2-130){
                launcher.x+=0;
                launcher.direccion = '';
            }
       }    
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37) // Flecha hacia la izquierda
        {
         launcher.x+=0;
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39) // Flecha hacia la derecha
        {
         launcher.direccion = 'right';
         if(launcher.x > cW-110){
            launcher.x-=0;
            launcher.direccion = '';
         }
        
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39) // Flecha hacia la derecha
        {
         launcher.x-=0;   
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 38) // Flecha hacia arriba
         {
           launcher.direccion = 'upArrow';  
           if(launcher.y < cH*.2-80){
              launcher.y += 0;
              launcher.direccion = '';
            }
         }
    });

    document.addEventListener('keyup', function(event){
         if(event.keyCode == 38) // Flecha hacia arriba
         {
           launcher.y -= 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 40) // Flecha hacia abajo
         {
           launcher.direccion = 'downArrow';  
          if(launcher.y > cH - 110){
            launcher.y -= 0;
            launcher.direccion = '';
           }
         }
    });
    document.addEventListener('keyup', function(event){
         if(event.keyCode == 40) // Flecha hacia abajo
         {
           launcher.y += 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 80) // Reiniciar juego
         {
          location.reload();
         }
    });

    // Control de botones
    left_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'left';
    });

    left_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });

    right_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'right';
    });

    right_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });
    // Disparador de balas
    fire_btn.addEventListener('mousedown', function(event) {
        launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
        launcher.drawLaser();
    });
    // Dispara con espacio en el teclado fisico
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 32) {
           launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3,h: 10});
           launcher.drawLaser();
           playLaserSound();
           event.preventDefault();
        }
    });
}
window.addEventListener('load', function(event) {
    initCanvas();
});
