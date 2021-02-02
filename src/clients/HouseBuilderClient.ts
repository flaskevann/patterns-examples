
import { HouseBlueprint, ConvertedBoxVanBlueprint } from "../models/housebuilder/Blueprint"
import { IHouseBuilder, SingleFamilyHomeBuilder, HomeOnWheelsBuilder } from "../models/housebuilder/HouseBuilder" 

export default function run() {

    // .. some kind of client code before

    var secondHandBoxVan : any = {
        name: "Mercedes Sprinter",
        type: "box van",
        model: 2008,
        mileage: 65000
    }
    const boxVan : IHouseBuilder = new HomeOnWheelsBuilder(secondHandBoxVan, "Eamon & Bec")
    boxVan.useBlueprint(new HouseBlueprint())
    boxVan.buildFoundation()
    boxVan.buildFrame()
    boxVan.installWindows()
    boxVan.installInsulation()
    boxVan.buildInnerWalls()
    boxVan.buildCeiling()
    boxVan.layFloor()
    boxVan.paint(["white", "blue", "gray"])
    console.log("Box van conversion result: ")
    console.log(JSON.stringify(boxVan.getResult()))

    console.log()
    const smallHouse : IHouseBuilder = new SingleFamilyHomeBuilder("Bob the Builder")
    smallHouse.useBlueprint(new ConvertedBoxVanBlueprint())
    smallHouse.buildFoundation()
    smallHouse.buildFrame()
    smallHouse.buildRoof()
    smallHouse.installDoors()
    smallHouse.installWindows()
    smallHouse.buildOutsideWalls()
    smallHouse.installInsulation()
    smallHouse.buildInnerWalls()
    smallHouse.buildCeiling()
    smallHouse.layFloor()
    smallHouse.paint(["red", "white", "black"])
    console.log("Small house build result: ")
    console.log(JSON.stringify(smallHouse.getResult()))

    // .. some kind of client code after
}
