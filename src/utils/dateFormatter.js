
const days = [];
const months = [];

export const DateFormatter = (value, type) => {
    
    if(type === "day") {
        if(value <= 31) {

        } else {
            return;
        }
    }

    if(type === "month" ) {
        if(value <= 12) {

        } else {
            return;
        }
    }

    if(type === "year") {
        if(value <= 2021 && value > 1901) {

        } else {
            return;
        }
    }
}