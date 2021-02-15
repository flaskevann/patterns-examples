import { log } from "./logging"

export function sleep(seconds : number, message : string) {
    log(message)

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while ((currentDate - date) / 1000 < seconds);
}