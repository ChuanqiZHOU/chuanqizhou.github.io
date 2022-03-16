var aAlls = document.getElementsByTagName('a');
console.log(typeof aAlls)
console.log(aAlls.length);

var message =
  'This project has been used to apply for new maintenance funding, only the homepage is authorized to demonstrate skills.'
function backHome() {
    Toast(message, 5000);
    
}
function Toast(text, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var newDiv = document.createElement('div');
    newDiv.innerHTML = text;
    newDiv.style.cssText = "font-family:siyuan;max-width:60%;min-width: 150px;padding:0 14px;height: 15%;color: rgb(255, 255, 255);line-height: 2.5rem;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 2.5rem;";
    document.body.appendChild(newDiv);
    setTimeout(function () {
        var d = 0.5;
        newDiv.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        newDiv.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(newDiv)
        }, d * 1000);
         window.location.href = '/'
    }, duration);
}


