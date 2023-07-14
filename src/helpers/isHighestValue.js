export const isHighestValue = (sorted, id) => {
    const isHighestValue = sorted.some((item) => item.id === id);

    return isHighestValue;
};
