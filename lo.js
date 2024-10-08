let c = document.getElementById("cc");
let m = document.getElementById("f");
let q = document.getElementById("q");
let kk = document.getElementById("kk");

// مصفوفة لتخزين الخيارات
let options = [
    { text1: "تكون مدير", text2: "تكون وكيل" },
    { text1: "تكون غبي لمدة يوم", text2: "تكون مثنى" },
    { text1: "تطير", text2: "تسبح" },
    { text1: "تقتل", text2: "مقتول" },
    { text1: "نمله", text2: "اسد" },
    { text1: "حمار", text2: "بيق" },
    { text1: "ترجع بزمن", text2: "تروح المستقبل" },
    { text1: "ايفون", text2: "جلكسي" },
    { text1: "جلكسي", text2: "هواوي" },
    { text1: "تكون طائر", text2: "تكون سمكة" },
    { text1: "تكون قطة", text2: "تكون كلب" },
    { text1: "تكون ساحر", text2: "تكون عفريت" },
    { text1: "تكون عالم", text2: "تكون مخترع" },
    { text1: "تكون رائد فضاء", text2: "تكون بحار" },
    { text1: "تكون لاعب كرة قدم", text2: "تكون مدرب" },
    { text1: "تكون فنان", text2: "تكون موسيقي" },
    { text1: "تكون كاتب", text2: "تكون شاعر" },
    { text1: "تكون طباخ", text2: "تكون نادل" },
    { text1: "تكون مصور", text2: "تكون مخرج" },
    { text1: "تكون بطل", text2: "تكون خائن" },
    { text1: "تكون سفاح", text2: "تكون ضحية" },
    { text1: "تكون قاتل متسلسل", text2: "تكون ناجٍ" },
    { text1: "تكون مجرم", text2: "تكون شرطي" },
    { text1: "تكون مخطط جريمة", text2: "تكون شاهد عيان" },
    { text1: "تكون قاتل محترف", text2: "تكون ضحية غامضة" },
    { text1: "تكون خبير في الطب الشرعي", text2: "تكون محقق" },
    { text1: "تكون متهم", text2: "تكون محامي" },
    { text1: "تكون ضحية جريمة", text2: "تكون شاهد" },
    { text1: "تكون قاتل مأجور", text2: "تكون ضحية مأجورة" },
    { text1: "تكون ضابط مخابرات", text2: "تكون جاسوس" },
    { text1: "تكون مخبر سري", text2: "تكون عميل مزدوج" },
    { text1: "تكون ضحية خطف", text2: "تكون خاطف" },
    { text1: "تكون قاتل غامض", text2: "تكون ضحية غامضة" },
    { text1: "تكون محقق خاص", text2: "تكون شاهد عيان" },
    { text1: "تكون ضحية جريمة قتل", text2: "تكون القاتل" },
    { text1: "تكون خبير نفسي", text2: "تكون مجرم نفسي" },
    { text1: "تكون محقق جرائم", text2: "تكون ضحية جريمة" },
    { text1: "تكون قاتل متسلسل معروف", text2: "تكون ضحية مشهورة" },
    { text1: "تكون مجرم محترف", text2: "تكون ضحية غامضة" },
    { text1: "تكون ضابط شرطة", text2: "تكون مجرم" },
    { text1: "تكون خبير في التحقيقات الجنائية", text2: "تكون مجرم محترف" },
    { text1: "تكون ضحية جريمة منظمة", text2: "تكون زعيم عصابة" },
    { text1: "تكون قاتل مأجور مشهور", text2: "تكون ضحية مشهورة" },
    { text1: "تكون ضحية جريمة عنف", text2: "تكون مجرم عنيف" },
    { text1: "تكون خبير في علم الجريمة", text2: "تكون مجرم ذكي" },
    { text1: "تكون ضحية جريمة سرقة", text2: "تكون سارق" },
    { text1: "تكون ضحية جريمة قتل متعمد", text2: "تكون قاتل متعمد" },
    { text1: "تكون محامي دفاع", text2: "تكون ضحية براءة" },
    { text1: "تكون خبير في علم النفس الجنائي", text2: "تكون مجرم نفسي" },
    { text1: "تكون ضحية جريمة قتل غامضة", text2: "تكون قاتل غامض" },
    { text1: "تكون شجرة", text2: "تكون زهرة" },
    { text1: "تكون نهر", text2: "تكون بحيرة" },
    { text1: "تكون جبل", text2: "تكون سهل" },
    { text1: "تكون غابة", text2: "تكون صحراء" },
    { text1: "تكون طائرًا", text2: "تكون سمكة" },
    { text1: "تكون قمرًا", text2: "تكون شمسًا" },
    { text1: "تكون رياحًا", text2: "تكون أمطارًا" },
    { text1: "تكون نجمة", text2: "تكون كوكبًا" },
    { text1: "تكون حيوانات برية", text2: "تكون حيوانات أليفة" },
    { text1: "تكون سماء", text2: "تكون أرض" },
    { text1: "تكون شلال", text2: "تكون نافورة" },
    { text1: "تكون عاصفة", text2: "تكون هدوء" },
    { text1: "تكون غيوم", text2: "تكون شمس" },
    { text1: "تكون طقس مشمس", text2: "تكون طقس عاصف" },
    { text1: "تكون حديقة", text2: "تكون مزرعة" },
    { text1: "تكون قوس قزح", text2: "تكون غيوم ممطرة" },
    { text1: "تكون زهور", text2: "تكون أشجار" },
    { text1: "تكون حيوانات بحرية", text2: "تكون طيور" },
    { text1: "تكون صخور", text2: "تكون تربة" },
    { text1: "تكون بركة", text2: "تكون حوض سمك" },
    { text1: "تكون شمس مشرقة", text2: "تكون قمر مضيء" },
    { text1: "تكون عشب", text2: "تكون زهور برية" },
    { text1: "تكون غابة كثيفة", text2: "تكون سهل أخضر" },
    { text1: "تكون طيور مهاجرة", text2: "تكون أسماك ملونة" },
    { text1: "تكون شجرة مثمرة", text2: "تكون شجرة كبيرة" },
    { text1: "تكون صحراء قاحلة", text2: "تكون واحة خضراء" },
    { text1: "تكون قمة جبلية", text2: "تكون وادٍ عميق" },
    { text1: "تكون طقس بارد", text2: "تكون طقس دافئ" },
    { text1: "تكون غابة استوائية", text2: "تكون جبال ثلجية" },
    { text1: "تكون شجرة بلوط", text2: "تكون شجرة صنوبر" }
];

// عند الضغط على الزر
c.onclick = function () {
    if (options.length === 0) {
        q.innerText = "لا توجد خيارات متاحة.";
        kk.innerText = "";
        return;
    }

    let randomIndex = Math.floor(Math.random() * options.length);
    let selectedOption = options[randomIndex];

    // تحديث النصوص
    q.innerText = selectedOption.text1;
    kk.innerText = selectedOption.text2;

    // إزالة الخيار المستخدم
    options.splice(randomIndex, 1);

    // تشغيل الموسيقى
    m.play();
};
