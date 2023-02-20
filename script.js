document.querySelector('.tweet_input').addEventListener('keypress', function(){
    
    let characterCount = document.querySelector('.tweet_input').value.length

    let remainCharacter = 120 - characterCount

    console.log(remainCharacter)

    document.querySelector('.value').innerText = remainCharacter;

})