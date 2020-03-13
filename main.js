var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MobilePhone = /** @class */ (function () {
    function MobilePhone(screenSize, RAM, processor, camera, battery, operatingSystem) {
        var _this = this;
        //method
        //getters are used to get the value of a field which is private
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        //setters are used when the class field is private. setters can be used to change the value of the field
        this.setScreenSize = function (screenSize) {
            _this.screenSize = screenSize;
        };
        this.screenSize = screenSize;
        this.RAM = RAM;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingSystem = operatingSystem;
    } //end constructor
    return MobilePhone;
}()); //end class
var Tablets = /** @class */ (function (_super) {
    __extends(Tablets, _super);
    function Tablets(screenSize, RAM, processor, camera, battery, operatingSystem, jailedOs) {
        var _this = _super.call(this, screenSize, RAM, processor, camera, battery, operatingSystem) || this;
        _this.getOperatingSystemForTablets = function () {
            return _this.operatingSystem;
        };
        _this.jailedOs = jailedOs;
        return _this;
    }
    return Tablets;
}(MobilePhone));
var redMiNote3 = new MobilePhone("5 inches", "4GB", "625Snapdragon", 8, 4500, "Android Lolipop");
var appleIpad = new Tablets("7.9 inches", "4GB", "1.2 hz apple", 5, 4000, "ios13", true);
console.log(redMiNote3.battery);
var os = redMiNote3.getOperatingSystem();
console.log(os);
redMiNote3.setScreenSize("4.7 inches");
console.log(redMiNote3);
console.log(appleIpad);
// redMiNote3.operatingSystem = 'Ios'
//to get the values of private field or set the field
