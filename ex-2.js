// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "friday";
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = "Gold";

let hasPromotion;
hasPromotion =
  (lastMonthPaidMoreThan4000 > 4000 &&
    (isWeekday == "monday" ||
      isWeekday == "tuesday" ||
      isWeekday == "wednesday" ||
      isWeekday == "thursday" ||
      isWeekday == "friday") &&
    hasBoughtProductFromITCategory == false &&
    hasAttendedDiscountEvent == false) ||
  isPlatinum == "Platinum";
console.log(hasPromotion); // false ไม่ได้รับส่วนลด
