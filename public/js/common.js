// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyCMaQ0QJcWs-df1l3AqLFUSdGrUDJgKTjI",
  authDomain: "blog-techotaku.firebaseapp.com",
  databaseURL: "https://blog-techotaku.firebaseio.com",
  projectId: "blog-techotaku",
  storageBucket: "blog-techotaku.appspot.com",
  messagingSenderId: "626272369777",
  appId: "1:626272369777:web:035a94328b51d05d76afd0",
  measurementId: "G-ZSW1H8Y91B",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();





const themeMap = {
  light: "solar",
  dark: "light",
  solar: "dark",
};

const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

console.log("common js works");

// Search Functions


function search(){
  console.log(searchInput.value);
}
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup',(ev)=>{
  if(ev.key == 'Enter')search();
});