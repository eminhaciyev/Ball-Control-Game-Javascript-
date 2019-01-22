function test1(ball3, selectorString2, color, countBallGreen) {
    BigBallGreen = document.querySelector(selectorString2);
    let ball2 = [];


    for (i = 0; i < countBallGreen; i++) {
        ball2[i] = document.createElement("div");
        ball2[i].classList.add(ball3);
        document.body.appendChild(ball2[i]);
        console.log("salam1");
    }


    interval2 = setInterval(function () {
        for (i = 0; i < countBallGreen; i++) {
            ball2[i].setAttribute("style", "background:" + color);
            ball2[i].style.top = (Math.floor(Math.random() * 700)) + "px";
            ball2[i].style.left = (Math.floor(Math.random() * 1200)) + "px";
        }
    }, 1000)

    BigBallGreen.onclick = function () {
        h5 = document.querySelector("h5");

        for (i = 0; i < countBallGreen; i++) {
            ball2[i].style.top = "550px"
            ball2[i].style.left = "1313px"
        }
        if (h5.innerHTML < countBallGreen) {
            h5.innerHTML = "finished!";
        }
        else {
            h5.innerHTML = h5.innerHTML - countBallGreen;
        }
        if (h5.innerHTML > 0) {
            SetTimeOut();
        }
        else {
            StopInterval();
        }
        StopInterval();
    }
    function StopInterval() {
        clearInterval(interval2);
    }

    function SetTimeOut() {
        setTimeout(function () {
            for (i = 0; i < countBallGreen; i++) {
                ball2[i].style.display = "none";
            }
        }, 1000)
        setTimeout(function () {

            for (i = 0; i < countBallGreen; i++) {
                ball2[i] = document.createElement("div");
                ball2[i].classList.add(ball3);
                document.body.appendChild(ball2[i]);

            }

            for (i = 0; i < countBallGreen; i++) {
                ball2[i].setAttribute("style", `background: ${color} `);
                ball2[i].style.top = (Math.floor(Math.random() * 600)) + "px";
                ball2[i].style.left = (Math.floor(Math.random() * 1100)) + "px";
            }

            interval2 = setInterval(function () {
                for (i = 0; i < countBallGreen; i++) {
                    ball2[i].setAttribute("style", `background: ${color} `);
                    ball2[i].style.top = (Math.floor(Math.random() * 600)) + "px";
                    ball2[i].style.left = (Math.floor(Math.random() * 1200)) + "px";
                }
            }, 900)
        }, 1100)
    }
}

test1("ballCircleGreen", ".BigBallGreen", "green", Math.floor(Math.random() * ((60 - 30) + 1) + 60));