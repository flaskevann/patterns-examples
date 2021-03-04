import ICloneable from "../generic/Cloning"

export default class ComputerConfiguration implements ICloneable {
    private description : string
    private chassis : string
    private psu : string
    private motherboard : string
    private cpu : string
    private memory : string
    private gpu : string
    private harddrive : string
    private os : string

    public constructor(description : string, chassis : string, psu : string, motherboard : string, cpu : string, memory : string, gpu : string, harddrive : string, os : string) {
        this.description = `${description}`
        this.chassis = `${chassis}`
        this.psu = `${psu}`
        this.motherboard = `${motherboard}`
        this.cpu = `${cpu}`
        this.memory = `${memory}`
        if (gpu) this.gpu = `${gpu}` // if not integrated
        this.harddrive = `${harddrive}`
        this.os = `${os}`
    }

    public clone() : ComputerConfiguration {
        return new ComputerConfiguration(this.description, this.chassis, this.psu, this.motherboard, this.cpu, this.memory, this.gpu, this.harddrive, this.os)
    }

    public getDescription() {
        return `${this.description}`
    }
    public setDescription(description : string) {
        this.description = `${description}`
    }

    public getChassis() {
        return `${this.chassis}`
    }
    public setChassis(chassis : string) {
        this.chassis = `${chassis}`
    }

    public getPSU() {
        return `${this.psu}`
    }
    public setPSU(psu : string) {
        this.psu = `${psu}`
    }

    public getMotherboard() {
        return `${this.motherboard}`
    }
    public setMotherboard(motherboard : string) {
        this.motherboard = `${motherboard}`
    }

    public getCPU() {
        return `${this.cpu}`
    }
    public setCPU(cpu : string) {
        this.cpu = `${cpu}`
    }

    public getMemory() {
        return `${this.memory}`
    }
    public setMemory(memory : string) {
        this.memory = `${memory}`
    }

    public getGPU() {
        return `${this.gpu}`
    }
    public setGPU(gpu : string) {
        this.gpu = `${gpu}`
    }

    public getHarddrive() {
        return `${this.harddrive}`
    }
    public setHarddrive(harddrive : string) {
        this.harddrive = `${harddrive}`
    }

    public getOS() {
        return `${this.os}`
    }
    public setOS(os : string) {
        this.os = `${os}`
    }

    public getSpecs() {
        return `` +
            `${this.description}: \n` +
            `${this.chassis} \n` +
            `${this.psu} \n` +
            `${this.motherboard} \n` +
            `${this.cpu} \n` +
            `${this.memory} \n` +
            (this.gpu ? `${this.gpu} \n` : ``) + // integrated?
            `${this.harddrive} \n` +
            `${this.os}`
    }
}