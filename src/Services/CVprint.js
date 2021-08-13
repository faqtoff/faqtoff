const printCV = (targetWin) => {
    var printWin = window.open('', '_blank', '');
    printWin.document.write('<!doc' + 'type html><ht' + 'ml><he' + 'ad>');
    printWin.document.write('<link rel="stylesheet" href="./index.css">');
    printWin.document.write('<title>Curriculum</title>')
    printWin.document.write('</he' + 'ad><bo' + 'dy>');
    printWin.document.write('<div style:"height:100vh;" >');
    printWin.document.write("<div class='faq-footer'> <p class='faq-footer--text'>faqtoff.com  </p></div>")
        printWin.document.write('<div class="container d-flex flex-col" id="card">');
            printWin.document.write('<div class="card card-shadow" ');
                printWin.document.write('<div id="cardcontent">');
                    //printWin.document.write('<img style="width: 40rem;" class="m-2 align-self-center" src="assets/wifi.png" id="wifilogo" />');
                    printWin.document.write('<div class="m-2 align-self-center" id="qrcode"></div>');
                    printWin.document.write('<div class="align-self-center" id="qrtitle"></div>');
                    printWin.document.write('<div class="align-self-center" id="qrkey"></div>');
                    printWin.document.write('<div class="align-self-center" id="text"></div>');
                printWin.document.write('</div>');
            printWin.document.write('</div>');
            printWin.document.write("<p class='faq-footer faq-footer--text'>Pagina hecha con <span class='corazon'></span> por <a href='https://www.faqtoff.com'>@faqtoff</a></br>Visita faqtoff.com  </p>")
        printWin.document.write('</div>');
    //Visita faqtoff.com
    printWin.document.write('</div>');
    printWin.document.write('</bo' + 'dy></ht' + 'ml>');
    //window.print();
}

export default printCV