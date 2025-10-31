let car = {
    make: "Toyoto",
    Model: "Yaris",
    Year: "2021",
    colors: ["red", "Black", "yellow"],
    hybrid: true,
    drive: function () {
        console.log("The Car is moving On...")
    },
    stop: function () {
        console.log("The Car is Stopping Now...")
    }
}


console.log("Make -->", car.make)
console.log("Car First Color -->", car.colors[0])
car.drive()
car.stop()