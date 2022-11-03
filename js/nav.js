const nav = ["Home", "Gallery", "Contact", "About"] ;

const link = ["index.html", "gallery.html", "contact.html", "about.html" ]

let navtext = '<ul class="flex">'

for (i=0; i <nav.length; i++ ) {
    navtext +='<li><a href="'+ link[i] +'">' + nav[i] + "</a></li>";

console.log(navtext);
}
navtext+= "</ul>";


document.getElementById("nav").innerHTML = navtext;