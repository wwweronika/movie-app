export const selectSeat = (selected) => {
    return{
        type: 'SEAT_SELECTED',
        payload: selected
    };
};

export const unselectSeat = (unselected) => {
    return {
        type: 'SEAT_UNSELECTED',
        payload: unselected
    };
};