const profileCircle = document.getElementById('profil');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

profileCircle.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

function typeEffect(elementId, text, speed) {
  let i = 0;
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  el.classList.remove("finished");

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      el.classList.add("finished");
    }
  }
  typing();
}

window.onload = function() {
  typeEffect("typing-text", 
    "Namaku Adam aku adalah seorang mahasiswa Universitas Jember jurusan Informatika.", 
    40
  );
};

const aboutLink = document.getElementById("aboutLink");
const aboutSection = document.getElementById("about");
aboutLink.addEventListener("click", function(e) {
  e.preventDefault();
  aboutSection.style.display = "block";
  typeEffect("aboutText", 
    "lahir di Banyuwangi dengan latar belakang pendidikan SMK jurusan Teknik Jaringan Komputer. Saat ini, saya sedang menempuh pendidikan di bidang Ilmu Komputer, jurusan Informatika. Di luar akademik, saya memiliki hobi bermain game dan traveling. Selain itu, saya memiliki minat yang besar pada bidang Data Analyst, khususnya dalam mengolah, menganalisis, dan memvisualisasikan data untuk menghasilkan informasi yang bermanfaat.", 
    40
  );
  aboutSection.scrollIntoView({behavior:"smooth"});
});

function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(reveal => {
    let windowHeight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;
    let revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
