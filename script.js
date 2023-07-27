function run(){
    const htmlDeger = document.getElementById("html-input").value;
    const cssDeger = document.getElementById("css-input").value;
    const jsDeger = document.getElementById("js-input").value;
    const output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlDeger +"<style>"+ cssDeger +"</style>";
    output.contentWindow.eval(jsDeger)
}

const butonlar = document.querySelectorAll(".butonlar button")
const textAreaAlan = document.querySelectorAll(".inputAlani textarea")

butonlar.forEach((item)=>{
    item.addEventListener("click", function(){
        let itemData = item.getAttribute("data-name")

        butonlar.forEach((btn)=>{
            if(btn === item){
                btn.classList.add("active-1")
            }
            else{
                btn.classList.remove("active-1")
            }
        });

        textAreaAlan.forEach((deger)=>{
            let degerAlan = deger.getAttribute("data-name")

            if(degerAlan === itemData){
                deger.classList.add("active")
            }
            else{
                deger.classList.remove("active")
            }
        })
    })
})