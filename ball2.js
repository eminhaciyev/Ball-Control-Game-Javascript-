
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function test2(ball, selectorString, color, countBallRed) {
    BigBallRed = document.querySelector(selectorString);
    let balls = [];
    // let countBallRed = Math.floor(Math.random() * ((50 - 30) + 1) + 50);


    for (i = 0; i < countBallRed; i++) {
        balls[i] = document.createElement("div");
        balls[i].classList.add(ball);
        document.body.appendChild(balls[i]);
    }
    // balls = document.querySelectorAll(ball);

    interval = setInterval(function () {
        for (i = 0; i < countBallRed; i++) {
            balls[i].setAttribute("style", "background:" + color);
            balls[i].style.top = (Math.floor(Math.random() * 500)) + "px";
            balls[i].style.left = (Math.floor(Math.random() * 1200)) + "px";
        }
    }, 1000)

    BigBallRed.onclick = function () {
        p = document.querySelector("p");
        for (i = 0; i < countBallRed; i++) {

            balls[i].style.top = "40px"
            balls[i].style.left = "1313px"
        }
        if (p.innerHTML < countBallRed) {
            p.innerHTML = "finished!";
        }
        else {
            p.innerHTML = p.innerHTML - countBallRed;
        }
        if (p.innerHTML > 0) {
            SetTimeOut();
        }
        StopInterval();
    }

    function StopInterval() {
        clearInterval(interval);
    }

    function SetTimeOut() {
        setTimeout(function () {
            for (i = 0; i < countBallRed; i++) {
                balls[i].style.display = "none";
            }
        }, 1000)
        setTimeout(function () {
            for (i = 0; i < countBallRed; i++) {
                balls[i] = document.createElement("div");
                balls[i].classList.add(ball);
                document.body.appendChild(balls[i]);
            }

            for (i = 0; i < countBallRed; i++) {
                balls[i].setAttribute("style", `background: ${color} `);
                balls[i].style.top = (Math.floor(Math.random() * 600)) + "px";
                balls[i].style.left = (Math.floor(Math.random() * 700)) + "px";
            }

            interval = setInterval(function () {
                for (i = 0; i < countBallRed; i++) {
                    balls[i].setAttribute("style", `background: ${color} `);
                    balls[i].style.top = (Math.floor(Math.random() * 600)) + "px";
                    balls[i].style.left = (Math.floor(Math.random() * 1200)) + "px";
                }
            }, 1000)
        }, 1100)
    }
}
test2("ball", ".BigBallRed", "red", Math.floor(Math.random() * ((50 - 30) + 1) + 50));