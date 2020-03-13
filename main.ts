class MobilePhone {
  //fields or properties
  public screenSize: string;
  public RAM: string;
  public processor: string;
  public camera: number;
  public battery: number;
  public operatingSystem: string;

  constructor(
    screenSize: string,
    RAM: string,
    processor: string,
    camera: number,
    battery: number,
    operatingSystem: string
  ) {
    this.screenSize = screenSize;
    this.RAM = RAM;
    this.processor = processor;
    this.camera = camera;
    this.battery = battery;
    this.operatingSystem = operatingSystem;
  } //end constructor

  //method
  //getters are used to get the value of a field which is private
  getOperatingSystem = () => {
    return this.operatingSystem;
  };
  //setters are used when the class field is private. setters can be used to change the value of the field
  setScreenSize = (screenSize: string) => {
    this.screenSize = screenSize;
  };
} //end class

class Tablets extends MobilePhone {
  public screenSize: string;
  public RAM: string;
  public processor: string;
  public camera: number;
  public battery: number;
  public operatingSystem: string;
  public jailedOs: boolean;

  constructor(
    screenSize,
    RAM,
    processor,
    camera,
    battery,
    operatingSystem,
    jailedOs
  ) {
    super(screenSize, RAM, processor, camera, battery, operatingSystem);
    this.jailedOs = jailedOs;
  }
  getOperatingSystemForTablets = () => {
    return this.operatingSystem;
  };
}

let redMiNote3 = new MobilePhone(
  "5 inches",
  "4GB",
  "625Snapdragon",
  8,
  4500,
  "Android Lolipop"
);

let appleIpad = new Tablets(
  "7.9 inches",
  "4GB",
  "1.2 hz apple",
  5,
  4000,
  "ios13",
  true
);

console.log(redMiNote3.battery);
let os = redMiNote3.getOperatingSystem();
console.log(os);
redMiNote3.setScreenSize("4.7 inches");
console.log(redMiNote3);

console.log(appleIpad);
// redMiNote3.operatingSystem = 'Ios'
//to get the values of private field or set the field
