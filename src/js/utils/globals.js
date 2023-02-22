//Gestion de l'apparence globale de l'application modes "jour" / "nuit"
let dark = localStorage.getItem('dark')
var html = document.getElementById('globalAppearence')

if (dark === 'false') {
    html.classList.remove('dark')
} else {
    html.classList.add('dark')
}

export function appearanceMode() {
    //Gestion de l'apparence globale de l'application modes "jour" / "nuit"
    let dark = localStorage.getItem('dark')

    if (dark == 'false') {
        html.classList.add('dark')
        localStorage.setItem('dark', 'true')
        console.log(dark)
    } else {
        html.classList.remove('dark')
        localStorage.setItem('dark', 'false')
        console.log(dark)
    }
}
