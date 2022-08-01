// RU do aluno: 3723091

let links = document.getElementsByClassName("menu");

let active = "sobremim";

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", article);
}

// função article: permite que os elementos <article> sejam exibidos quando o usuário escolhê-los no menu 
function article(event) {    
    let id = event.target.getAttribute("href").slice(1);
        if (id !== "portfolio") {
            let previousArticle = document.getElementById(active);
            let article = document.getElementById(id);
            let att = article.getAttribute("class");
            
            if (att) {
                let classes = article.classList;
                let i = 0;
                while (classes[i] !== "active" && i !== classes.length) {
                    i++;
                }
                if (classes[i] !== "active") {
                    previousArticle.classList.remove("active");
                    article.classList.add("active");
                    active = id;
                }

            } else {
                previousArticle.classList.remove("active");
                article.classList.add("active");
                active = id;
            }
        }
}