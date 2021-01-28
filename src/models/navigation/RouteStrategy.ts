import GPSCoordinates from "./GPSCoordinates"

export interface IRouteStrategy {
    calculateRoute(A : GPSCoordinates, B : GPSCoordinates) : string[] // returns step by step instructions
}

export class WalkingStrategy implements IRouteStrategy {
    calculateRoute(A : GPSCoordinates, B : GPSCoordinates) {
    
        const steps : string[] = [
            "Time needed to walk this distance (3.6 mi) is approximately 1 h and 15 min.",
            "Head east on Fish Row toward Queen St (92 ft).",
            "Turn right onto Queen St (95 ft).",
            "Turn left onto Milford St (0.2 mi).",
            "Continue onto Milford Hill (0.1 mi).",
            "At the roundabout, take the 1st exit onto Shady Bower (0.3 mi).",
            "Turn right onto Milford Mill Rd (0.2 mi).",
            "Slight right to stay on Milford Mill Rd (0.3 mi).",
            "Milford Mill Rd turns slightly right and becomes Peters Finger Rd (105 ft).",
            "Turn left to stay on Peters Finger Rd (0.1 mi).",
            "Slight left to stay on Peters Finger Rd (423 ft).",
            "Turn left onto Southampton Rd/A36 (0.3 mi).",
            "Turn right toward Marshmead Cl (39 ft).",
            "Continue onto Marshmead Cl (0.2 mi).",
            "Slight right onto Southampton Rd (1.6 mi).",
            "Turn right onto Light's Ln (0.1 mi).",            
            "You have reached your destination."
        ]
        return steps
    }
}

export class BicyclingStrategy implements IRouteStrategy {
    calculateRoute(A : GPSCoordinates, B : GPSCoordinates) {
    
        const steps : string[] = [
            "Time needed to bicycle this distance (3.7 mi) is approximately 24 min.",
            "Head east on Fish Row toward Queen St (92 ft).",
            "Turn right onto Queen St (95 ft).",
            "Turn left onto Milford St.",
            "Walk your bicycle (0.2 mi).",
            "Turn right onto Rampart Rd (0.1 mi).",
            "Turn left onto Tollgate Rd (0.3 mi).",
            "Turn left onto National Cycle Rte 24/Southampton Rd/A36.",
            "Go through 1 roundabout (1.1 mi).",
            "Turn right onto National Cycle Rte 24 (1.6 mi).",
            "Continue onto Southampton Rd (0.3 mi).",
            "Turn right onto Light's Ln (0.1 mi).",
            "You have reached your destination."
        ]

        return steps
    }
}

export class DrivingStrategy implements IRouteStrategy {
    calculateRoute(A : GPSCoordinates, B : GPSCoordinates) {
    
        const steps : string[] = [
            "Time needed to drive this distance (4.6 mi) is approximately 12 min.",
            "Head west on New Canal toward Old George Mall (0.2 mi).",
            "Turn right onto Silver St (223 ft).",
            "Silver St turns left and becomes Minster St (243 ft).",
            "Keep right to continue on Blue Boar Row (0.1 mi).",
            "Continue onto Winchester St (292 ft).",
            "Turn right onto Brown St (0.3 mi).",
            "Brown St turns right and becomes St Ann St (266 ft)",
            "Turn left onto Exeter St (0.3 mi).",
            "At Exeter Street Roundabout, take the 1st exit onto Churchill Way S/A338 (0.3 mi).",
            "At College Roundabout, take the 2nd exit onto Southampton Rd/A36 (1.5 mi).",
            "Turn right onto Southampton Rd (1.7 mi).",
            "Turn right onto Light's Ln (0.1 mi)",
            "You have reached your destination."
        ]

        return steps
    }
}

export class PublicTransportStrategy implements IRouteStrategy {
    calculateRoute(A : GPSCoordinates, B : GPSCoordinates) {
    
        const steps : string[] = [
            "Time needed for walking and the use of public transportation to go this distance is approximately 16 min.",
            "Start walking east on Fish Row toward Queen St.",
            "Turn left onto Queen St.",
            "Continue onto Endless St.",
            "Take bus X7 leaving Totton.",
            "After 14 min and 11 stops you're at Lights Lane in Alderbury.",
            "You have reached your destination."
        ]

        return steps
    }
}

export default class RouteNavigator {
    private selectedStrategy : IRouteStrategy

    public selectStrategy(newStrategy : IRouteStrategy) {
        this.selectedStrategy = newStrategy
    }

    public getRoute(A : GPSCoordinates, B : GPSCoordinates) : string[] {
        const routeSteps = this.selectedStrategy.calculateRoute(A, B)

        // ...
        // code for processing returned route data for calling client
        // ...

        return routeSteps
    }
}