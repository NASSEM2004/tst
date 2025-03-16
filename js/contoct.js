document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".phone-number").forEach(function (element) {
        element.addEventListener("click", function () {
            const text = element.textContent || element.innerText;
            const tempInput = document.createElement("input");
            document.body.appendChild(tempInput);
            tempInput.value = text;
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            
            // إنشاء إشعار النسخ
            const notification = document.createElement("span");
            notification.textContent = "تم النسخ!";
            notification.style.position = "absolute";
            notification.style.backgroundColor = "black";
            notification.style.color = "white";
            notification.style.padding = "5px 10px";
            notification.style.borderRadius = "5px";
            notification.style.fontSize = "12px";
            notification.style.opacity = "1";
            notification.style.transition = "opacity 1s ease-out";
            
            // تحديد موضع الإشعار بالنسبة للعنصر المضغوط
            const rect = element.getBoundingClientRect();
            notification.style.left = `${rect.left + window.scrollX}px`;
            notification.style.top = `${rect.top + window.scrollY - 25}px`;
            notification.style.position = "absolute";
            
            document.body.appendChild(notification);
            
            // جعل الإشعار يختفي تدريجياً ثم يُحذف
            setTimeout(() => {
                notification.style.opacity = "0";
                setTimeout(() => document.body.removeChild(notification), 1000);
            }, 1000);
        });
    });
});

