function checkSpeed(speed, area) {
    let maxSpeed = 20;

    if(area === "motorway") maxSpeed = 130;
    else if(area === "interstate") maxSpeed = 90;
    else if(area === "city") maxSpeed = 50;

    if(speed <= maxSpeed){
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    }
    else {
        let status = "reckless driving";
        let diff = speed - maxSpeed;

        if(diff <= 20) status = "speeding";
        else if(diff <= 40) status = "excessive speeding";

        console.log(`The speed is ${speed - maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }
}