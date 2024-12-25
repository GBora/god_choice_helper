export interface AfterEffect {
    text?: string
    effect?: {
        value: number,
        boon: boolean,
        target: string
    }
}

export interface Choice {
    id: string,
    text: string,
    after: AfterEffect[]
}

export interface Dillema {
    text: string,
    choices: Choice[]
}