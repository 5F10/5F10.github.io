function showCalendar() {
    const year = new Date().getFullYear();
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    document.getElementById("calendar-title").innerText = year;

    const months = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    const daysOfWeek = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"];

    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    months.forEach((month, index) => {
        const monthDiv = document.createElement("div");
        monthDiv.classList.add("bg-white", "p-4", "rounded-lg", "shadow", "border");

        const monthTitle = document.createElement("h2");
        monthTitle.classList.add("text-lg", "font-semibold", "mb-2", "text-center");
        monthTitle.innerText = `${month} (${index + 1})`;
        monthDiv.appendChild(monthTitle);

        const daysContainer = document.createElement("div");
        daysContainer.classList.add("grid", "grid-cols-7", "gap-2", "text-center");

        // 🔹 แสดงหัวข้อชื่อวัน (อาทิตย์ - เสาร์)
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement("div");
            dayHeader.classList.add("text-gray-700");
            dayHeader.innerText = day;
            daysContainer.appendChild(dayHeader);
        });

        const daysInMonth = new Date(year, index + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, index, 1).getDay(); // วันที่ 1 ของเดือนตรงกับวันอะไร (0-6)

        // 🔹 เติมช่องว่างก่อนวันที่ 1 เพื่อให้วันที่เรียงถูกต้อง
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement("div");
            daysContainer.appendChild(emptyDiv);
        }

        // 🔹 แสดงวันที่ และแสดงวันปัจจุบันเป็นสีแดง
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("bg-gray-200", "p-2", "rounded", "font-medium", "text-center");

            if (day === currentDay && index === currentMonth && year === currentYear) {
                dayDiv.classList.add("text-red-500");
            }

            dayDiv.innerText = day;
            daysContainer.appendChild(dayDiv);
        }

        monthDiv.appendChild(daysContainer);
        calendarDiv.appendChild(monthDiv);
    });
}

document.addEventListener("DOMContentLoaded", showCalendar);
