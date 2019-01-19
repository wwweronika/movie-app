import { combineReducers } from 'redux';

const seatReducer = () => {
    return [
        {seatAvailable: 'reserved' },
        {seatAvailable: 'available'}
]

};

const selectedSeatReducer = (selectedSeat = null, action) => {
    if (action.type === 'SEAT_SELECTED') {
        return action.payload;
    } else if (action.type === 'SEAT_UNSELECTED') {
        return action.payload;
    }
    return selectedSeat;
};

export default combineReducers ({
    seats: seatReducer,
    selectedSeat: selectedSeatReducer
});
