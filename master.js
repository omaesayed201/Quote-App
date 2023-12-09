var quote = [
{
    txt:`“Be yourself; everyone else is already taken.”` ,
    author:`― Oscar Wilde`
},
{
    txt:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”` ,
    author:`― Marilyn Monroe`
},
{
    txt:`“So many books, so little time.”` ,
    author:`― Frank Zappa`
},
{
    txt:`“A room without books is like a body without a soul.”` ,
    author:`― Marcus Tullius Cicero`
},
{
    txt:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”` ,
    author:`― Dr. Seuss`
},
{
    txt:`“You only live once, but if you do it right, once is enough.”` ,
    author:`― Mark Twain`
},
{
    txt:`“If you tell the truth, you don't have to remember anything.”` ,
    author:`― Mahatma Gandhi`
},
{
    txt:`“A friend is someone who knows all about you and still loves you.”` ,
    author:`― Elbert Hubbard`
},
]
function changeQuote(){
    var randomnum = Math.floor(Math.random() * quote.length);
    document.getElementById("Quotetext").innerHTML=quote[randomnum].txt;
    document.getElementById("author").innerHTML=quote[randomnum].author;
}