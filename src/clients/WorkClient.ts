import { IWorkReceiver,
         IWorkInvoker,
         IWork,
         Chef,
         Teacher,
         Cooking,
         Teaching,
         School } from "../models/work/Work"

export default function run() {

    // .. some kind of client code before

    const southParkChef : IWorkReceiver = new Chef("Black singing chef")
    const cookSchoolLunch : IWork = new Cooking(southParkChef, ["Salisbury steak", "Buttered noodles", "Green bean casserole", "Vegetable medley"], "cooking lunch")

    const mrGarrison : IWorkReceiver = new Teacher("Mr. Garrison", "Mr. Hat")
    const teachThirdGrade : IWork = new Teaching(mrGarrison, "third grade", "teaching")

    const southParkElementarySchool : IWorkInvoker = new School("South Park Elementary School")

    southParkElementarySchool.setWork(cookSchoolLunch)
    southParkElementarySchool.requestWorkToBegin()

    southParkElementarySchool.setWork(teachThirdGrade)
    southParkElementarySchool.requestWorkToBegin()

    // .. some kind of client code after
}
