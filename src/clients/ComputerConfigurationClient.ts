import ICloneable from "../models/generic/Cloning"
import ComputerConfiguration from "../models/configurations/ComputerConfiguration"
import ComputerConfigurationRegister from "../models/configurations/ComputerConfigurationRegister"

export default function run() {

    // .. some kind of client code before

    // Living room PC
    const computerForMyLivingRoom : ICloneable = ComputerConfigurationRegister.getHomePC();
    (computerForMyLivingRoom as ComputerConfiguration).setDescription("Living room Linux box");
    (computerForMyLivingRoom as ComputerConfiguration).setOS("Linux Debian 9")

    // Bedroom PC
    const computerForMyBedRoom : ICloneable = ComputerConfigurationRegister.getHomePC();
    (computerForMyBedRoom as ComputerConfiguration).setDescription("Movie PC for TV in the bedroom");
    (computerForMyBedRoom as ComputerConfiguration).setHarddrive("WD Blue SN550 1TB NVMe M.2 SSD")

    // Home office PC
    const computerForMyHomeOffice : ICloneable = ComputerConfigurationRegister.getOfficePC();
    (computerForMyHomeOffice as ComputerConfiguration).setDescription("PC for homePC office during COVID-19")
    
    console.log((computerForMyLivingRoom as ComputerConfiguration).getSpecs())
    console.log((computerForMyHomeOffice as ComputerConfiguration).getSpecs())
    console.log((computerForMyBedRoom as ComputerConfiguration).getSpecs())

    // .. some kind of client code after
}