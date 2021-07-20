// Checks whether a letter is equal to the correct letter
export const validateInput = (correct: string, letter: string, index: number): boolean => {
    return letter === correct[index];
};

// TODO: Add socket.io call to server to validate