import CompositeComponent from "../models/generic/CompositeComponent"

export default function run() {

    // .. some kind of client code before

    const chassis = new CompositeComponent("Chassis", "Corsair Carbide Series SPEC-DELTA RGB ATX m-ATX m-ITX")
    const psu = new CompositeComponent("PSU", "Corsair TX550M 550W ATX 12V v2-4 80 PLUS Gold Semi Modular 6+2-pin PCIe")
    
    const motherboard : CompositeComponent = new CompositeComponent("Motherboard", "ASUS TUF B460M-PLUS LGA1200 mATX DDR4 2x M.2")
    const cpu = new CompositeComponent("CPU", "Intel Core i5-10400F LGA1200 6-Core 12-Thread 2.9/4.3GHz Comet Lake")
    const cpuCooler = new CompositeComponent("CPU cooler", "CM Hyper H411R ARGB Black LGA115x/1200 92mm")
    
    const memory1 = new CompositeComponent("Memory", "HyperX Fury DDR4 2666MHz 4GB PC4-21300 CL16")
    const memory2 = new CompositeComponent("Memory", "HyperX Fury DDR4 2666MHz 4GB PC4-21300 CL16")
    const gpu = new CompositeComponent("GPU", "XFX Radeon RX 580 8GB GTS XXX OC+ PCI-Express 3.0 GDDR5 1386MHz")
    
    const wifi = new CompositeComponent("WiFi", "Svive Gaming Virga AC1200 PCIe")
    
    const hdd = new CompositeComponent("HDD", "WD Blue SN550 500GB NVMe M.2 SSD 2280 PCIe 3.0 x4 2400/1750MB/s")
    
    
    chassis.add(motherboard)
    chassis.add(psu)
    
    motherboard.add(cpu)
    cpu.add(cpuCooler)
    
    motherboard.add(memory1)
    motherboard.add(memory2)
    
    motherboard.add(gpu)
    motherboard.add(hdd)
    motherboard.add(wifi)
    
    
    console.log(chassis.toString())
        
    // .. some kind of client code after
}
