export default class User {
    private email : string
    private name : string
    private data : string = JSON.stringify({})

    public constructor(email : string, name : string, data : string) {
        this.email = email
        this.name = name
        if (data) this.data = data
    }

    public getEmail() {
        return `${this.email}`
    }

    public getName() {
        return `${this.name}`
    }

    public getData() {
        return `${this.data}` // JSON string
    }

    public setData(data : string) {
        this.data = `${data}`
    }
}