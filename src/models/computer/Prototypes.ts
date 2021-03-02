import ICloneable from "../generic/Cloning"
import Computer from "./Computer"

const prototypeRegister : any = {}

const officeComputerPrototype : ICloneable = new Computer(
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
prototypeRegister.officePC = officeComputerPrototype

const homeComputerPrototype : ICloneable = new Computer(
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
prototypeRegister.homePC = homeComputerPrototype

export default prototypeRegister