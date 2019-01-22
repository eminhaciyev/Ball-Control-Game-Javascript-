function test3(ball2, selectorString1, color, countBallBlue) {
    BigBallBlue = document.querySelector(selectorString1);
    let ball1 = [];

    for (i = 0; i < countBallBlue; i++) {
        ball1[i] = document.createElement("div");
        ball1[i].classList.add(ball2);
        document.body.appendChild(ball1[i]);
    }
    interval1 = setInterval(function () {
        for (i = 0; i < countBallBlue; i++) {
            ball1[i].setAttribute("style", "background:" + color);
            ball1[i].style.top = (Math.floor(Math.random() * 500)) + "px";
            ball1[i].style.left = (Math.floor(Math.random() * 1200)) + "px";
        }
    }, 1000)

    BigBallBlue.onclick = function () {
        span = document.querySelector("span");
        for (i = 0; i < countBallBlue; i++) {

            ball1[i].style.top = "40px"
            ball1[i].style.left = "0px"
        }
        if (span.innerHTML < countBallBlue) {
            span.innerHTML = "finished!";
        }
        else {
            span.innerHTML = span.innerHTML - countBallBlue;
        }

        if (span.innerHTML > 0) {
            SetTimeOut();
        }
        StopInterval();
    }

    function StopInterval() {
        clearInterval(interval1);
    }

    function SetTimeOut() {
        setTimeout(function () {
            for (i = 0; i < countBallBlue; i++) {
                ball1[i].style.display = "none";
            }
        }, 1000)
        setTimeout(function () {

            for (i = 0; i < countBallBlue; i++) {
                ball1[i] = document.createElement("div");
                ball1[i].classList.add(ball2);
                document.body.appendChild(ball1[i]);

            }
            for (i = 0; i < countBallBlue; i++) {
                ball1[i].setAttribute("style", `background: ${color} `);
                ball1[i].style.top = (Math.floor(Math.random() * 600)) + "px";
                ball1[i].style.left = (Math.floor(Math.random() * 700)) + "px";
            }

            interval1 = setInterval(function () {
                for (i = 0; i < countBallBlue; i++) {
                    ball1[i].setAttribute("style", `background: ${color} `);
                    ball1[i].style.top = (Math.floor(Math.random() * 600)) + "px";
                    ball1[i].style.left = (Math.floor(Math.random() * 1200)) + "px";
                }
            }, 1000)
        }, 1100)
    }
}
test3("ballCircle", ".BigBallBlue", "blue", Math.floor(Math.random() * ((40 - 30) + 1) + 40));