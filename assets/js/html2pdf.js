// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKOJSoBQ-D-arDk5jm3mHmdtmAByjUZq0",
  authDomain: "user-k01.firebaseapp.com",
  projectId: "user-k01",
  storageBucket: "user-k01.appspot.com",
  messagingSenderId: "804070956660",
  appId: "1:804070956660:web:d6417df67c413b98033b21"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());
const db = getDatabase();
const isi = document.createElement("div");
document.getElementById("btnpdf").addEventListener('click',(e)=>{
    e.preventDefault();
    var id = document.getElementById("id-pdf").value;
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    const articleRef = ref(db, 'article/');
    onValue(articleRef, (snapshot) => {
        const list = snapshot.val();
        Object.keys(list).forEach(key => {
            const listdata = list[key];
            var date = new Date(listdata.time);
            var string = date.getHours()+":"+date.getMinutes()+","+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
            if (key === id) {
                let ini = `<h3>${listdata.title}-${string}</h3><p>${listdata.author}</p><p>${listdata.keterangan}</p>`;
                $(isi).html(ini);
                doc.fromHTML($(isi).html(), 15, 15, {
                    'width': 170,
                    'elementHandlers' : specialElementHandlers
                });
                doc.save('WEBDK012021.pdf');
            }
        });
    });
});