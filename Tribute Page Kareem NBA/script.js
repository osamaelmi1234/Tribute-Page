var quotes = [`"You can't win unless you learn how to lose."`,
`"One man can be a crucial ingredient on a team, but one man cannot make a team."`,`"I've had enough success for two lifetimes, My success is talent put together with hard work and luck."`,`"When I was a kid, no one would believe anything positive that you could say about black people. That's a terrible burden."`,`"I think that the good and the great are only separated by the willingness to sacrifice."`,`"I think someone should explain to the child that it's OK to make mistakes. That's how we learn. When we compete, we make mistakes."`,`"If they took the idea that they could escape poverty through education, I think it would make a more basic and long-lasting change in the way things happen. What we need are positive, realistic goals and the willingness to work. Hard work and practical goals."`,`"Your mind is what makes everything else work."`]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('kareemquote').innerHTML = quotes[randomNumber]
 }