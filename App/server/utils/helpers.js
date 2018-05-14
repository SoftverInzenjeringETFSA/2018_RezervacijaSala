const Helpers = (() => {
    const addDaysToDate = (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    const setDateToNextWeekday = (date, weekday) => {
        while(date.getDay() !== weekday) {
            date = addDaysToDate(date, 1);
        }
        return date;
    }

    return {
        addDaysToDate,
        setDateToNextWeekday
    }
})();

module.exports = Helpers;