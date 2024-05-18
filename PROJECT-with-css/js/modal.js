const popup = document.getElementById('popup')
const closeButton = document.getElementById('close')



const showAd = () => {
    popup.showModal()
    console.log("show");
}


// Event listener
closeButton.addEventListener('click', e => {
    popup.close();
    console.log("close");
    setTimeout(() => showAd(), 200000)
})

window.onload = () => {
    setTimeout(() => showAd(), 5000)
    console.log("hello");
}
