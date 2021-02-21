export interface IWork {
    doItNow() : void
    getDescription() : string
}

export class Cooking implements IWork {

    private receiver : IWorkReceiver
    private food : string[]
    private description : string
 
    public constructor(receiver : IWorkReceiver, food : string[], description : string) {
        this.receiver = receiver // the same receiver
        this.food = JSON.parse(JSON.stringify(food))
        this.description = `${description}`
    }

    public doItNow() {
        console.log(`<${this.description} is set to begin>`)

        this.receiver.getToWork(this.food)
    }

    public getDescription() {
        return `${this.description}`
    }
}

export class Teaching implements IWork {

    private receiver : IWorkReceiver
    private grade : string
    private description : string
 
    public constructor(receiver : IWorkReceiver, grade : string, description : string) {
        this.receiver = receiver // the same receiver
        this.grade = `${grade}`
        this.description = `${description}`
    }

    public doItNow() {
        console.log(`<${this.description} is set to begin>`)

        this.receiver.getToWork(this.grade)
    }

    public getDescription() {
        return `${this.description}`
    }
}


export interface IWorkReceiver {
    getToWork(data : any) : void
    getDescription() : string
}

export class Chef implements IWorkReceiver {

    private description : string

    public constructor(description : string) {
        this.description = `${description}`
    }

    public getToWork(food : string[]) {
        console.log(`<${this.description} starts working>`)

        food.forEach(f => console.log(`${this.description} made ${f}.`))
    }

    public getDescription() {
        return `${this.description}`
    }
}

export class Teacher implements IWorkReceiver {

    private description : string
    private assistant : string

    public constructor(description : string, assistant : string) {
        this.description = `${description}`
        this.assistant = `${assistant}`
    }

    public getToWork(grade : string) {
        console.log(`<${this.description} and his/hers assistant ${this.assistant} starts working>`)

        console.log(`${this.description} and ${this.assistant} teached ${grade}.`)
    }

    public getDescription() {
        return `${this.description}`
    }
}


export interface IWorkInvoker {
    setWork(work : IWork) : void
    requestWorkToBegin() : void
    getDescription() : string
}

export class School implements IWorkInvoker {

    private description : string
    private work : IWork

    public constructor(description : string) {
        this.description = `${description}`
    }

    public setWork(work : IWork) {
        this.work = work
    }
    
    public requestWorkToBegin() {
        console.log(`<${this.description} requests ${this.work.getDescription()} to begin>`)

        this.work.doItNow()
    }

    public getDescription() {
        return `${this.description}`
    }
}