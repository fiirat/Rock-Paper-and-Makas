const game = ()=>
{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playButton = document.querySelector('.intro button');
        const exitButton = document.querySelector('.close');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click',() => 
        {
            introScreen.classList.add('fadeOut');
            introScreen.classList.remove('fadeIn');
            match.classList.add('fadeIn');
            exitButton.classList.remove('fadeOut');
            exitButton.classList.add('fadeIn');
        });
    };
    const closeGame = ()=>{
        const exitButton = document.querySelector('.close button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        exitButton.addEventListener('click',() => 
        {
            match.classList.remove('fadeIn');
            introScreen.classList.add('fadeIn');
            console.log("hey");
        });
    };

   const playMatch = () => 
   {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
    })
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option=>
    {
        option.addEventListener('click', function()
        {
            //computers choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            //compare

            setTimeout(()=>{
                
                compareHands(this.textContent, computerChoice);
                //updatefotos
                playerHand.src= `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`
            }, 2000);            
            //Animatioooon
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
        
        });
    });
   };
   
   const updateScore = () => 
   {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
   };

    
   const compareHands = (playerChoice, computerChoice) => 
    {
        const winner = document.querySelector('.winner');
        //tiething
        if(playerChoice === computerChoice)
        {
            winner.textContent = "Tie";
            return;
        }
        //therock
        if(playerChoice === 'rock')
        {
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'Player Won';
                return;
            }else
            {
                winner.textContent = 'Computer Won';
                return;
            }
        }
        //checkpaper
        if(playerChoice === 'paper')
        {
            if(computerChoice === 'scissors')
            {
                winner.textContent = 'Computer Won';
                return;
            }else
            {
                winner.textContent = 'Player Won';
                return;
            }
        }
        //checkscissssors
        if(playerChoice === 'scissors')
        {
            if(computerChoice === 'rock')
            {
                winner.textContent = 'Computer Won';
                return;
            }else
            {
                winner.textContent = 'Player Won';
                return;
            }
        }
    
    
    
    };
    //testthings
    startGame();
    playMatch();
    closeGame();



};


//startalthethings
game();