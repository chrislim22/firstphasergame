/* global game phaser game_state */
game_state.story = function() {};
    
    

game_state.story.prototype = {
    
    preload: function(){
        
    },
    create: function(){
    
    
    this.scoreText = game.add.text(16, 16, 'hi \n asdf', {
            fontSize: '32px',
            fill: '#ffffff'
        });
    
    
    
    
    setTimeout(function(){ 
        game.state.start('main');
        
        document.getElementById("test").innerHTML = "";
    }, 3000);
    
    
        
    },
    update: function(){
       
    },
};

game.state.add('story', game_state.story);
game.state.start('story');
