export interface INewsletter {
    getKeywords() : string[],
    getText() : string
    toString() : string
}

export class Newsletter implements INewsletter {
    private keywords : string[]
    private text : string

    public constructor(text : string, keywords : string[]) {
        this.keywords = JSON.parse(JSON.stringify(keywords))
        this.text = `${text}`
    }

    public getKeywords() : string[] {
        return JSON.parse(JSON.stringify(this.keywords))
    }

    public getText() : string {
        return `${this.text}`
    }

    public toString() : string {
        if (this.keywords.length === 0)
            return `"${this.text}"`
        else
            return `"${this.text}" (Keywords: ${this.keywords.map(keyword => keyword)})`
    }
}