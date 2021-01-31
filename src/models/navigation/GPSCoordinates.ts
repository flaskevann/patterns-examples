/*
 * GPS coordinates of type Decimal Degrees (DD).
 * Should never have to be changed, ever.
 */
export default class GPSCoordinates {
    private latitude : number
    private longitude : number

    public constructor(latitude : number, longitude : number) {
        this.latitude = latitude
        this.longitude = longitude
    }

    public getLatitude() {
        return this.latitude
    }

    public getLongitude() {
        return this.longitude
    }
}
