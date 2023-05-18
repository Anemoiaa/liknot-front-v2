$(document).ready(function() {
    const [startDateStr, endDateStr] = getDefaultValuesOfDate();
    $("#stats-period-from").text(startDateStr);
    $("#stats-period-to").text(endDateStr);
    const statsDatepicker = flatpickr("#stats-period", {
        mode: "range",
        dateFormat: "d/m/Y",
        defaultDate: [startDateStr, endDateStr],
        monthSelectorType: "static",
        locale: 'ru',
        theme: "liknot-calendar",
        onClose: function(selectedDates, dateStr, instance) {
            if (!selectedDates[0]) return;
            const startDate = selectedDates[0];
            const endDate = selectedDates[1] || startDate;
            $("#stats-period-from").text(startDate.toLocaleDateString());
            $("#stats-period-to").text(endDate.toLocaleDateString());
        }
    });
    $("#stats-period-open").click(function() {
        statsDatepicker.open();
    });
});

function getDefaultValuesOfDate() {
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}.${month}.${year}`;
    }
    const todayStr = formatDate(today);
    const nextWeekStr = formatDate(nextWeek);
    return [todayStr, nextWeekStr];
}