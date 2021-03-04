import ICloneable from "../generic/Cloning"
import ComputerConfiguration from "./ComputerConfiguration"

export default class ComputerConfigurationRegister {

    private constructor() {}

    private static prototypeOfficePC : ICloneable = new ComputerConfiguration(
        "Office PC",
        "Phanteks Eclipse P300A Air Temp Glass Black",
        "Chieftec PROTON BDF-500S 500W 80 PLUS Bronze Standard",
        "ASUS PRIME B460M-A LGA1200 mATX",
        "Intel Pentium G6400 Socket-LGA1200",
        "HyperX Fury DDR4 2666MHz 8GB",
        null,
        "WD Blue SN550 250GB NVMe M.2 SSD",
        "Windows 10 Pro"
    )

    private static prototypeHomePC : ICloneable = new ComputerConfiguration(
        "Home PC",
        "Fractal Design Define C Black",
        "Chieftec PROTON BDF-500S 500W PSU 80 PLUS Bronze Standard",
        "Gigabyte A520M S2H AM4 mATX",
        "AMD Ryzen 3 PRO 4350G with Radeon Graphics",
        "HyperX Fury DDR4 2666MHz 8GB",
        null,
        "WD Blue SN550 500GB NVMe M.2 SSD",
        "Windows 10 Home"
    )
    
    public static getOfficePC() : ICloneable {
        return this.prototypeOfficePC.clone()
    }

    public static getHomePC() : ICloneable {
        return this.prototypeHomePC.clone()
    }
}
