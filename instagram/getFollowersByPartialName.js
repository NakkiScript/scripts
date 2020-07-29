((Nakki) => {
  const locator = '.d7ByH a';
  window.Nakki = Nakki || {};
  Nakki.getUsersByPartialName = (partialName) => [...document.querySelectorAll(locator)]
    .map(a => a.innerText)
    .filter(a => a.indexOf(partialName) > -1) ;
})(window.Nakki)

/**
To Use:
- Go to Instagram Profile (sample: https://www.instagram.com/alexelcapoyt)
- Open Instagram Follower / Follow modal
- Load entries scrolling
- Type function:
Nakki.getUsersByPartialName('a')
**/
