const initialValue = {
    estimated_diameter_max: 0,
    is_potentially_hazardous_asteroid: 0,
    miss_distance: 0,
    relative_velocity: 0,
    id: 0,
};

export const handleAggregatedData = (neo, date) => {
    if (date) {
        const data = neo.near_earth_objects[date]?.reduce(
            (accumulator, currentValue) => ({
                estimated_diameter_max:
                    accumulator.estimated_diameter_max +
                    currentValue.estimated_diameter.kilometers
                        .estimated_diameter_max,
                ...(currentValue.is_potentially_hazardous_asteroid
                    ? {
                          is_potentially_hazardous_asteroid:
                              accumulator.is_potentially_hazardous_asteroid + 1,
                      }
                    : {
                          is_potentially_hazardous_asteroid:
                              accumulator.is_potentially_hazardous_asteroid + 0,
                      }),
                miss_distance:
                    accumulator.miss_distance +
                    Number(
                        currentValue.close_approach_data[0].miss_distance
                            .kilometers
                    ),

                relative_velocity:
                    accumulator.relative_velocity +
                    Number(
                        currentValue.close_approach_data[0].relative_velocity
                            .kilometers_per_hour
                    ),

                id: currentValue.id,
            }),
            initialValue
        );

        return data;
    }
};
