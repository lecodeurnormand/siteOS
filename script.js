
function horaire(){
    var maDate = new Date();
    var h = maDate.toLocaleTimeString();
    const options = {month : "long", day:"2-digit"};
    var jourcomplet = maDate.toLocaleString("fr-Fr",options);
    var fullday = `${jourcomplet} `;
    document.querySelector("#heure").innerHTML =`${fullday} ${h}`;   
    setTimeout(horaire,1000);
}
horaire();


function fermeture(){
    let croix = document.querySelector('.croix');
    let form = document.querySelector('form');
        croix.addEventListener('click',()=>{
        form.style.display="none";
})
}
fermeture();

function ouverture(){
    let ouvreFenetre = document.querySelectorAll('.ouvreFenetre');
    for(let i=0;i<ouvreFenetre.length;i++){
        ouvreFenetre[i].addEventListener('click',()=>{
            if(i == 2){
                let form = document.querySelector('form');
                form.style.display="block";
            }
            // if(i == 1){
            //     let form = document.querySelector('form');
            //     form.style.display="block";
            // }
        })
    }
}
ouverture();

function toast(){
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample);
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        toast.show();
      })
    }
    toast.show();
}
toast();



