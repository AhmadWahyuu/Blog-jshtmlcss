document.getElementById("btnpdf").addEventListener('click', (e) => {
    var doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
            return true;
        }
    };
    const isi = document.createElement("div");
    let ini = `<img src="assets/img/desk.jpg">
    <h>Wakmber Kdm</h>
    <p>190801010119-wakmberkdm dari sooko mojokerto</p>`;
    $(isi).html(ini);
    doc.fromHTML($(isi).html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('contoh-file.pdf');
});