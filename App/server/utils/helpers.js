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

    const dateDiffInMS = (date1, date2) => {
        return (date2.getTime() - date1.getTime());
    }

    return {
        addDaysToDate,
        setDateToNextWeekday,
        dateDiffInMS
    }
})();

module.exports = Helpers;