function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)

    if (num.value.length == 0) {
        window.alert('[ERRO] Por Favor, digite um número')
     } else {
        let c = 1;
        tab.innerHTML = ``
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c ++
        }
}
}