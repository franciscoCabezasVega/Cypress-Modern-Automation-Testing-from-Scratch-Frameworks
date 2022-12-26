import { faker } from '@faker-js/faker';

export const randomGenerator = (min, max) => {
    const randomNumber = faker.datatype.number({ min: min, max: max })
    return randomNumber;
};

export const randomGender = (min, max) => {
    const selectGender = faker.datatype.number({ min: min, max: max })
    if (selectGender == '0') {
        return 'Male'
    } else {
        return 'Female'
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
export const startDate = new Date(1900, 0, 1);
export const endDate = new Date(currentYear, currentMonth, currentDay);

export const randomDateBetween = (startDate, endDate) => {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const difference = endTimestamp - startTimestamp;
  const randomTimestamp = Math.floor(Math.random() * difference);
  const date = new Date(startTimestamp + randomTimestamp);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};