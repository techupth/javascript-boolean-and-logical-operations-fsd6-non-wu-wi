// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion;

hasPromotion =
  (lastMonthPaidMoreThan4000 == true &&
    isWeekday == true &&
    hasBoughtProductFromITCategory == false &&
    hasAttendedDiscountEvent == false) ||
  isPlatinum == true;

console.log(hasPromotion);
