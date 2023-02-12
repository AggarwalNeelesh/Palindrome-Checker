const show = document.getElementById("show");
function onClick(event){
    const text = document.getElementById("text").value;
    const rev = text.split('').reverse().join('');
    console.log(text+" "+rev);
    
    if(text === rev){
        show.innerHTML = `<b>"${text}"</b> is a Palindrome`;
        event.preventDefault();
    }
    else {
        
        show.innerHTML = `<b>"${text}"</b> is not Palindrome`;
        event.preventDefault();
    }
}
let btn = document.getElementById('btn');
btn.addEventListener('click', event => {
    onClick(event);
});
