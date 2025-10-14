const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
