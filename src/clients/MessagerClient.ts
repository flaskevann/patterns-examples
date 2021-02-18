import { IMessager,
         EmailMessager,
         SMSMessagerWrapper,
         FacebookMessagerWrapper } from "../models/messager/Messager"

export default function run() {

    // .. some kind of client code before

    console.log("Task: A school has to send messages to its pupils.")
    console.log()

    console.log("The year is 1990 ...")
    console.log("Sending a message using email ..:")
    const emailNotifier : IMessager = new EmailMessager(["pupil1@school.com", "pupil2@school.com"])
    emailNotifier.send("Hi kids! The school is closed because the teachers are on strike.")

    console.log()

    console.log("The year is 2002 ...")
    console.log("Sending a SMS from a system that is wrapped around the now old email legacy system ..:")
    const smsNotifier : IMessager = new SMSMessagerWrapper(emailNotifier, ["912 34 567", "913 45 678"])
    smsNotifier.send("Hi kids! The school is closed because of SARS.")

    console.log()

    console.log("The year is 2021 ...")
    console.log("Sending a Facebook message from a system that is wrapped around the SMS messaging system ..:")
    const facebookNotifier : IMessager = new FacebookMessagerWrapper(smsNotifier, ["NameOfPupil1_FBNick", "NameOfPupil2_FBNick"])
    facebookNotifier.send("Hi kids! The school is closed because of COVID-19.")

    // .. some kind of client code after
}