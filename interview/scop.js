const tens = function () {

    for (let i = 0; i < 10; i ++) {
        let a = document.createElement('a');
        a.innerHTML = 'a:' + 0 + '<br>';
        a.addEventListener('click', function (e) {
            console.log(i);
        });
        document.body.appendChild(a);
    }
};
