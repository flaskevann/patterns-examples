
import { IBlueprint } from "./Blueprint"

export interface IHouseBuilder {

    // Ready, set, go
    useBlueprint(blueprint : IBlueprint) : void
    buildFoundation() : void

    // Make the house withstand the elements
    buildFrame() : void
    buildRoof() : void
    buildOutsideWalls() : void
    installDoors() : void
    installWindows() : void

    // Make house habitable
    installInsulation() : void
    buildInnerWalls() : void
    layFloor() : void
    buildCeiling() : void

    // Aesthetics
    paint(colors : string[]) : void

    // The result
    getResult() : any

    reset() : void
}

export class SingleFamilyHomeBuilder implements IHouseBuilder { // a stand-alone one-family residence

    private name : string
    private blueprint : IBlueprint
    private house : any = {}

    public constructor(name : string) {
        this.name = `${name}` // for example "Bob"

        console.log(`${this.name} is ready to start building the single family home in accordance with the given blueprint.`)
    }

    reset() {
        this.blueprint = null
        this.house = {}
    }

    useBlueprint(blueprint : IBlueprint) {
        this.blueprint = blueprint

        console.log(`${this.name} has been given the blueprint.`)
    }

    buildFoundation() : void {
        if (!this.blueprint) throw new Error("Need blueprint before building the foundation.")

        this.house.foundation = {
            materials: ["concrete", "rebar"]
        }

        console.log(`${this.name} built the foundation using ${this.house.foundation.materials.join(" and ")}.`)
    }

    buildFrame() : void {
        if (!this.house.foundation) throw new Error("Can't build frame when foundation has not been built yet.")

        this.house.frame = {
            materials: ["common construction wood", "angle brackets", "bolts"]
        }
        this.house.walls = {} // make ready for walls

        console.log(`${this.name} built the frame using ${this.house.frame.materials.join(" and ")}.`)
    }

    buildRoof() : void {
        if (!this.house.frame) throw new Error("Can't build roof when frame has not been built yet.")

        this.house.roof = {
            materials: ["roof shingles", "roofing nails", "roofing glue"],
            color: "dark orange"
        }

        console.log(`${this.name} built ${this.house.roof.color} roof using ${this.house.roof.materials.join(" and ")}.`)
    }

    installDoors() : void {
        if (!this.house.frame) throw new Error("Can't install doors when frame has not been built yet.")

        this.house.doors = ["front door", "sliding door"]

        console.log(`${this.name} installed ${this.house.doors.join(" and ")}.`)
    }

    installWindows() : void {
        if (!this.house.frame) throw new Error("Can't install windows when frame has not been built yet.")

        this.house.windows = {
            big: 6,
            small: 8
        }

        console.log(`${this.name} installed ${this.house.windows.big} big windows and ${this.house.windows.small} small windows.`)
    }

    buildOutsideWalls() : void {
        if (!this.house.frame) throw new Error("Can't build outside walls when frame has not been built yet.")

        this.house.walls.outside = {
            type: "horizontal clapboard",
            materials: ["sealed wood boards", "rustproof nails"]
        }

        console.log(`${this.name} built ${this.house.walls.outside.type} walls for the outside using ${this.house.walls.outside.materials.join(" and ")}.`)
    }

    installInsulation() : void {
        if (!this.house.walls || !this.house.walls.outside || !this.house.roof) throw new Error("Can't isolate house when outside walls or roof has not been built yet.")

        this.house.insulated = true

        console.log(`${this.name} insulated the entire house.`)
    }

    buildInnerWalls() : void {
        if (!this.house.insulated) throw new Error("Can't build inside walls when house has not been insulated yet.")

        this.house.walls.inside = {
            type: "vertical siding",
            materials: ["tong-and-groove mass produced panel boards", "tiny nails"]
        }

        console.log(`${this.name} built ${this.house.walls.inside.type} walls for the inside using ${this.house.walls.inside.materials.join(" and ")}.`)
    }

    layFloor() : void {
        if (!this.house.insulated) throw new Error("Can't lay floor when house has not been insulated yet.")

        this.house.floor = {
            type: "hardwood (look-alike)",
            materials: ["vinyl click lock floor boards", "thin foam underlayment"]
        }

        console.log(`${this.name} laid a ${this.house.floor.type} floor using ${this.house.floor.materials.join(" and ")}.`)
    }
    buildCeiling() : void {
        if (!this.house.insulated) throw new Error("Can't build ceiling when house has not been insulated yet.")

        this.house.ceiling = {
            type: "vertical paneling",
            materials: ["MDF panels", "tiny nails"]
        }

        console.log(`${this.name} built ceiling out of ${this.house.ceiling.type} using ${this.house.ceiling.materials.join(" and ")}.`)
    }

    paint(colors : string[]) : void {
        this.house.color = JSON.parse(JSON.stringify(colors))

        console.log(`${this.name} finally painted the house in a combination of ${colors.join(" and ")}.`)
    }

    getResult() : any {
        return JSON.parse(JSON.stringify(this.house))
    }
}

export class HomeOnWheelsBuilder implements IHouseBuilder { // van or box truck converted for living in

    private name : string
    private blueprint : IBlueprint
    private house : any = {}

    public constructor(vehicle : any, name : string) {
        this.house.foundation = JSON.parse(JSON.stringify(vehicle))
        this.name = `${name}` // for example "Bob"

        console.log(`${this.name} is ready to begin converting the vehicle in accordance to given blueprint and best practices.`)
    }

    reset() {
        this.blueprint = null
        this.house = {}
    }

    useBlueprint(blueprint : IBlueprint) {
        this.blueprint = blueprint

        console.log(`${this.name} has been given the blueprint.`)
    }

    buildFoundation() : void {
        if (!this.blueprint) throw new Error("Need blueprint before stripping down the vehicle.")

        this.house.foundation.state = "stripped down"

        console.log(`${this.name} stripped down, cleaned and rustproofed the vehicle.`)
    }

    buildFrame() : void {
        if (this.house.foundation.state !== "stripped down") throw new Error("Can't build frame without first stripping down the vehicle.")

        delete this.house.foundation.state
        this.house.frame = {
            type: "slim studs",
            materials: ["common construction wood", "angle brackets", "self tapping screws"]
        }

        console.log(`${this.name} built a ${this.house.frame.type} frame out of ${this.house.frame.materials.join(" and ")}.`)
    }

    buildRoof() : void {
        throw new Error("Method not implemented.")
    }
    buildOutsideWalls() : void {
        throw new Error("Method not implemented.")
    }
    installDoors() : void {
        throw new Error("Method not implemented.")
    }

    installWindows() : void {
        if (!this.house.frame) throw new Error("Can't install windows when frame has not been built yet.")

        this.house.windows = {
            big: 1,
            small: 2
        }

        console.log(`${this.name} installed ${this.house.windows.big} big window(s) and ${this.house.windows.small} small window(s).`)
    }

    installInsulation() : void {
        if (!this.house.frame) throw new Error("Can't isolate vehicle when frame has not been built yet.")

        this.house.insulated = true

        console.log(`${this.name} hired some help to spray-insulate the stripped down part of the vehicle.`)
    }

    buildInnerWalls() : void {
        if (!this.house.insulated) throw new Error("Can't build inside walls when vehicle has not been insulated yet.")

        this.house.walls = {
            type: "vertical siding",
            materials: ["tong-and-groove mass produced panel boards", "tiny nails"]
        }

        console.log(`${this.name} built ${this.house.walls.type} walls for the inside using ${this.house.walls.materials.join(" and ")}.`)
    }

    layFloor() : void {
        if (!this.house.insulated) throw new Error("Can't lay floor when vehicle has not been insulated yet.")

        this.house.floor = {
            type: "hardwood (look-alike)",
            materials: ["vinyl click lock floor boards"]
        }

        console.log(`${this.name} laid a ${this.house.floor.type} floor using ${this.house.floor.materials.join(" and ")}.`)
    }

    buildCeiling() : void {
        if (!this.house.insulated) throw new Error("Can't build ceiling when vehicle has not been insulated yet.")

        this.house.ceiling = {
            type: "vertical boards",
            materials: ["tong-and-groove boards", "tiny nails"]
        }

        console.log(`${this.name} built ceiling out of ${this.house.ceiling.type} using ${this.house.ceiling.materials.join(" and ")}.`)
    }

    paint(colors : string[]) : void {
        if (!this.house.walls || !this.house.ceiling) throw new Error("Can't paint when walls or ceiling has not been built yet.")

        this.house.colors = JSON.parse(JSON.stringify(colors))

        console.log(`${this.name} finally painted the vehicle and the inside in a combination of ${colors.join(" and ")}.`)
    }

    getResult() : any {
        return JSON.parse(JSON.stringify(this.house))
    }
}