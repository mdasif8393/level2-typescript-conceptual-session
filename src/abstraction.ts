abstract class Car{
    abstract start() : void;
    abstract stop(): void;
}

class MyCar extends Car{
    start(): void {
        console.log("Car is starting");
    }
    stop() : void {
        console.log("Car is stopping");
    }
}

const car1 = new MyCar();
car1.start();