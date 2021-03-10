
export default class HardwareComponent {
    private type : string
    private name : string
    private subComponents : HardwareComponent[] = new Array()

    public constructor(type : string, name : string) {
        this.type = `${type}`
        this.name = `${name}`
    }

    public add(component : HardwareComponent) {
        if (this.subComponents.indexOf(component) === -1)
            this.subComponents.push(component)
        else
            throw new Error("Component already added.")
    }
    
    public remove(component : HardwareComponent) {
        for (var c = 0; c < this.subComponents.length; c++) {
            var existingComponent = this.subComponents[c]

            if (component === existingComponent) {
                this.subComponents.splice(c, 1)
                return
            }
        }

        throw new Error("Did not find the component.")
    }

    public getComponents() {
        return this.subComponents
    }

    public toString() {
        return this.subComponentsToString(0)
    }

    private subComponentsToString(tab : number) {
        var description = `${this.type.toUpperCase()} - ${this.name}`

        if (this.subComponents.length > 0) {
            description += ": "

            this.subComponents.forEach(component => {
                description += `\n`
                for (var t = 0; t < tab+1; t++) description += `   `
                description += `${component.subComponentsToString(tab+1)}`
            })
        }
        
        return description
    }
}