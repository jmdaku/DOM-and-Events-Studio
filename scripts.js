window.addEventListener("load", function() {

    const up = document.getElementById("up");
        up.addEventListener("click", function (event) {
              //moves rocket
        });
    const down = document.getElementById("down");
        down.addEventListener("click", function (event) {
              //moves rocket
        });
    const left = document.getElementById("left");
        left.addEventListener("click", function (event) {
            //moves rocket
        });
    const right = document.getElementById("right");
        right.addEventListener("click", function (event) {
              //moves rocket
          });
    const flightStatus = document.getElementById("flightStatus");

    const takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        const result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result === true){
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor =  "blue";
            document.getElementById("spaceShuttleHeight").innerHTML += 10000;   

           } 
                     //click to launch 
      });
    const landing = document.getElementById("landing");
      landing.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor =  "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
            //click to land 
        });
    let missionAbort = document.getElementById("missionAbort");
        missionAbort.addEventListener("click", function (event) {
            window.confirm("Confirm that you want to abort the mission.");
            const abortConfirm = window.confirm("Confirm that you want to abort the mission.");
            if (abortConfirm === true){
                flightStatus.innerHTML = "Mission aborted.";
                document.getElementById("shuttleBackground").style.backgroundColor =  "green";
                document.getElementById("spaceShuttleHeight").innerHTML = 0; 
            }

            //click to cancel 
          });   


});