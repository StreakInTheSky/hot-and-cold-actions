// initialize game
export const INIT_GAME = 'INIT_GAME';
export const initGame = () => ({
    type: INIT_GAME
});

// compare numbers
export const COMPARE_NUMBER = 'COMPARE_NUMBER';
export const compareNumber = guess => ({
    type: COMPARE_NUMBER,
    payload: guess
});
