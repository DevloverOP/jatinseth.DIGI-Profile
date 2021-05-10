class UI {
  constructor(links) {
    this.links = links;
    this.setAge();
    this.setWorkSample();
  }

  showCards(e) {
    if (e.target.className === "link") {
      let hide = `display:none;
                  animation: vanish 1s forwards reverse;`;
      let shows = `animation: shows 1s forwards;z-index:6;`;
      let val = 5;
      
      Array.from(e.target.parentElement.children).map((n)=>{
        n.style=`background-color:black`;
      })
     
      e.target.style=`background-color: rgb(219, 20, 20)`;
          
    Object.values(e.target.parentElement.nextElementSibling.children).forEach(
        (carditem) => {
          
          if (e.target.innerHTML.startsWith(carditem.id)) { 
                 
            // e.target.style=`background-color: rgb(219, 20, 20)`;
             carditem.style = shows;
          } else {
          // e.target.parentElement.children[val].style=`background-color:black`;
              
            carditem.style = `${hide}z-index:${val--}`;
          }
        }
      );
    }
  }

  setAge() {
    let d = new Date();
    let age =
      (Date.now() - d.setFullYear("1995", "09", "21")) /
      1000 /
      60 /
      60 /
      24 /
      365;
    document.querySelector("#dob").innerHTML += ` (${Math.floor(age)}Years)`;
  }

  setWorkSample() {
    let dropdown = document.querySelector("#dropdown");
    Object.entries(this.links).forEach((link, index) => {
      let li = document.createElement("li");
      let anchor = document.createElement("a");
      anchor.classList.add("gitlist");
      anchor.innerHTML = `${link[0]}`;
      anchor.setAttribute("href", `${link[1]}`);
      anchor.setAttribute('target','_blank');

      li.appendChild(anchor);
      dropdown.appendChild(li);
    });
  }
}

const linkBase = {
  Add_Books: "https://jatinseth.github.io/jatinseth.Add_Books/",
  Weather: "https://jatinseth.github.io/jatinseth.Weather/",
  GeoLocation: "https://jatinseth.github.io/jatinseth.GeoLocation/",
  Tracalorie: "https://jatinseth.github.io/jatinseth.Tracalorie/",
  loanCalculator: "https://jatinseth.github.io/jatinseth.loanCalculator/",
};

let ui = new UI(linkBase);
document.body.addEventListener("click", ui.showCards);
