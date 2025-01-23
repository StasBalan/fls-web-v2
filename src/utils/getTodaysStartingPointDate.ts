
const STARTING_POINT_HOUR = 7

export function getTodayStartingPointDate(): number {
    const now = new Date();

    if (now.getHours() < STARTING_POINT_HOUR) {
        now.setDate(now.getDate() - 1);
    }

    now.setHours(STARTING_POINT_HOUR);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    
    return now.getTime()
}
