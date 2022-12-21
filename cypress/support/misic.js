import { faker } from '@faker-js/faker';

export const randomGenerator = (min, max) => {
    const randomNumber = faker.datatype.number({ min: min, max: max })
    return randomNumber;
};
