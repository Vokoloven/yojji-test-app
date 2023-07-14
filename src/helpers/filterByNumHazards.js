export const filterByNumHazards = (data) => {
    if (data?.length > 0) {
        const sorted = data
            .sort(
                (a, b) =>
                    b.is_potentially_hazardous_asteroid -
                    a.is_potentially_hazardous_asteroid
            )
            .slice(0, 2);

        return sorted;
    }
};
