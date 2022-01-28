
//fungsi jika ingin menampilkan data yan telah diklik kedalam modal untuk dilakukan editing
function tampilEdit(id, title, author, linked, image, kategori, keterangan) {
    document.getElementById("id-news").value = id;
    document.getElementById("title").value = title;
    document.getElementById("author").value = author;
    document.getElementById("link-news").value = linked;
    document.getElementById("link-image").value = image;
    document.getElementById("kategori").value = kategori;
    CKEDITOR.instances.keterangan.setData(keterangan);
}
function tampilHapus(id){
    document.getElementById("hapus-news").value = id;
}
function tampilExport(id){
    document.getElementById("id-pdf").value = id;
}