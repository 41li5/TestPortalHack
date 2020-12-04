function test() {
    if((document.getElementsByClassName("sml mdc-button mdc-card__action mdc-card__action--button")||[]).length > 0)
    document.getElementsByClassName("sml mdc-button mdc-card__action mdc-card__action--button")[0].click();

    var elements = document.getElementsByTagName("input");

    var checkb = []
    var texts = []

    let txt = [
        `
─────█─▄▀█──█▀▄─█─────
────▐▌──────────▐▌────
────█▌▀▄──▄▄──▄▀▐█────
───▐██──▀▀──▀▀──██▌───
──▄████▄──▐▌──▄████▄──`,       
      
    `
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▓▒▒▓▒▒▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒
 ▒▓▒▒▒▒▒▒▒▒▓▒
 ▒▒▓▓▓▓▓▓▓▓▒▒
 ▒▒▒▒▒▒▒▒▒▒▒▒
        `,
    "Don't cheat on exams :)",
    "I'm cheater !!!",
    "LOL",
    "ok",
    "41414141",    

    ]

    for (var i = 0; i < elements.length; i++){
        if(elements[i].type == "text") {
            texts[texts.length] = elements[i].id;
            elements[i].value = txt[Math.floor(Math.random()*txt.length)];
        } else if(elements[i].type == "radio" || elements[i].type == "checkbox") {
            checkb[checkb.length] = elements[i].id;
        }
    }
    if(checkb.length>0){
        let random = Math.floor(Math.random()*checkb.length);
        document.getElementById(checkb[random]).click();
        document.getElementsByClassName("mdc-button mdc-button--outlined")[0].click();
    } else if (checkb.length==0&&texts.length == 0) {
        setTimeout(()=>{
            var iframe = document.getElementById("givenAnswer_ifr").contentDocument.getElementById("tinymce").getElementsByTagName("p")[0];
            iframe.innerHTML = `${txt[Math.floor(Math.random()*txt.length)]}`;
            document.getElementsByClassName("mdc-button mdc-button--outlined")[0].click();
        }, 800)
    } else {
        document.getElementsByClassName("mdc-button mdc-button--outlined")[0].click();
    }
}
if (document.URL.startsWith("https://www.testportal.pl/exam/DoTestQuestion.html") || document.URL.startsWith("https://www.testportal.pl/exam/DoStartTest.html") || document.URL.startsWith("https://www.testportal.pl/exam/LoadQuestion.html")) {
    chrome.storage.sync.get('myonoffswitch', function(storage) {
        if (storage.myonoffswitch) test();
    });
}
