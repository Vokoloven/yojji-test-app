export const isHighestValue = (sorted, id) => {
    const isHighestValue = sorted.some(
        (item) => item.is_potentially_hazardous_asteroid !== 0 && item.id === id
    );

    return isHighestValue;
};
