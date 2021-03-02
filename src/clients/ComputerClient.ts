import ICloneable from "../models/generic/Cloning"
import Computer from "../models/computer/Computer"
import prototypeRegister from "../models/computer/Prototypes"

export default function run() {

    // Living room PC
    const computerForMyLivingRoom : ICloneable = prototypeRegister.homePC.clone();
    (computerForMyLivingRoom as Computer).setDescription("Living room Linux box");
    (computerForMyLivingRoom as Computer).setOS("Linux Debian 9")

    // Bedroom PC
    const computerForMyBedRoom : ICloneable = prototypeRegister.homePC.clone();
    (computerForMyBedRoom as Computer).setDescription("Movie PC for TV in the bedroom");
    (computerForMyBedRoom as Computer).setHarddrive("WD Blue SN550 1TB NVMe M.2 SSD")

    // Home office PC
    const computerForMyHomeOffice : ICloneable = prototypeRegister.officePC.clone();
    (computerForMyHomeOffice as Computer).setDescription("PC for homePC office during COVID-19")
    
    console.log((computerForMyLivingRoom as Computer).getSpecs())
    console.log((computerForMyHomeOffice as Computer).getSpecs())
    console.log((computerForMyBedRoom as Computer).getSpecs())
}