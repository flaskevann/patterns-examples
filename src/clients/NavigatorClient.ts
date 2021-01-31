import GPSCoordinates from "../models/navigation/GPSCoordinates"
import RouteNavigator, { WalkingStrategy,
                         BicyclingStrategy,
                         DrivingStrategy,
                         PublicTransportStrategy } from "../models/navigation/RouteStrategy"

export default function run() {

    // .. some kind of client code before

    console.log("A UK traveler needs to get from Salisbury town center to Alderbury ....")
    const startCoord = new GPSCoordinates(51.06571447916112, -1.7940081075245053)
    const stopCoord = new GPSCoordinates(51.04132361957322, -1.7337493118918201)

    console.log("He or she opens a navigator application to check and see available routes with travel instructions.")
    const navigator = new RouteNavigator()

    console.log("1. First he or she mistakenly chooses to walk:")
    navigator.selectStrategy(new WalkingStrategy())
    let steps = navigator.getRoute(startCoord, stopCoord)
    steps.forEach(step => console.log(` --> ${step}`))

    console.log("2. He or she rectifies the mistake and decides to go by car:")
    navigator.selectStrategy(new DrivingStrategy())
    steps = navigator.getRoute(startCoord, stopCoord)
    steps.forEach(step => console.log(` --> ${step}`))

    console.log("3. Just for fun he or she checks to see how bad using the bicycle would be:")
    navigator.selectStrategy(new BicyclingStrategy())
    steps = navigator.getRoute(startCoord, stopCoord)
    steps.forEach(step => console.log(` --> ${step}`))
    
    console.log("4. He or she changes his or hers mind from driving to public transportation instead:")
    navigator.selectStrategy(new PublicTransportStrategy())
    steps = navigator.getRoute(startCoord, stopCoord)
    steps.forEach(step => console.log(` --> ${step}`))

    console.log("He or she now knows how to get there and can finally set off ....")

    // .. some kind of client code after
}