(function(root){'use strict';const messages={
  "brand": [
    "memory garden",
    "สวนความทรงจำ"
  ],
  "brandLine": [
    "a little room for your days",
    "พื้นที่เล็กๆ สำหรับทุกวันของคุณ"
  ],
  "menu": [
    "MY LITTLE WORLD",
    "โลกเล็กๆ ของฉัน"
  ],
  "today": [
    "Today",
    "วันนี้"
  ],
  "year": [
    "Year planner",
    "แผนทั้งปี"
  ],
  "diary": [
    "My diary",
    "ไดอารี่ของฉัน"
  ],
  "memories": [
    "Memory lane",
    "เส้นทางความทรงจำ"
  ],
  "settings": [
    "Garden settings",
    "ตั้งค่าสวน"
  ],
  "savedDevice": [
    "Your garden lives on this device.",
    "สวนของคุณอยู่ในอุปกรณ์นี้"
  ],
  "sideNote": [
    "Life grows in little moments.",
    "ชีวิตเติบโตจากช่วงเวลาเล็กๆ"
  ],
  "skip": [
    "Skip to the garden",
    "ไปยังเนื้อหาหลัก"
  ],
  "reminders": [
    "Reminders",
    "การแจ้งเตือน"
  ],
  "language": [
    "Language",
    "ภาษา"
  ],
  "greeting": [
    "Hello, little day.",
    "สวัสดี วันเล็กๆ"
  ],
  "greetingSub": [
    "A softer place for your plans, your stories, and you.",
    "พื้นที่อ่อนโยนสำหรับแผน เรื่องราว และตัวคุณ"
  ],
  "addTask": [
    "Add a little task",
    "เพิ่มสิ่งที่ต้องทำ"
  ],
  "heroEyebrow": [
    "WELCOME TO YOUR GARDEN",
    "ยินดีต้อนรับสู่สวนของคุณ"
  ],
  "heroTitle": [
    "Little things.\nLovely days.",
    "เรื่องเล็กๆ\nวันที่น่ารัก"
  ],
  "heroBody": [
    "Plant a plan. Collect a memory. Let your everyday life bloom at its own pace.",
    "วางแผนเล็กน้อย เก็บความทรงจำ แล้วให้ชีวิตค่อยๆ ผลิบานในจังหวะของคุณ"
  ],
  "openDiary": [
    "Write a little something",
    "เขียนบันทึกสักนิด"
  ],
  "artSticker": [
    "a little slower, a little lovelier",
    "ช้าลงนิด น่ารักขึ้นหน่อย"
  ],
  "altCottage": [
    "A painted cottage in a daisy garden",
    "ภาพวาดกระท่อมในสวนดอกเดซี่"
  ],
  "altJournal": [
    "An open notebook and a sleeping cat by a garden window",
    "สมุดบันทึกกับแมวที่หลับข้างหน้าต่างสวน"
  ],
  "altPet": [
    "A round leaf-eared garden companion holding a daisy",
    "เพื่อนตัวกลมหูใบไม้ถือดอกเดซี่"
  ],
  "tasksStat": [
    "little plans today",
    "แผนเล็กๆ วันนี้"
  ],
  "xpStat": [
    "garden XP earned",
    "XP ที่สะสมในสวน"
  ],
  "pagesStat": [
    "pages tucked away",
    "หน้าบันทึกที่เก็บไว้"
  ],
  "yourDay": [
    "ONE LITTLE STEP AT A TIME",
    "ค่อยๆ ก้าวทีละนิด"
  ],
  "taskHeading": [
    "A few things to do",
    "สิ่งเล็กๆ ที่อยากทำ"
  ],
  "completed": [
    "{done} of {total} done",
    "เสร็จแล้ว {done} จาก {total} รายการ"
  ],
  "addSmall": [
    "Add something small",
    "เพิ่มเรื่องเล็กๆ"
  ],
  "noTasks": [
    "A little breathing room. Add a plan when you’re ready.",
    "มีที่ว่างให้พักหายใจ พร้อมแล้วค่อยเพิ่มแผนก็ได้"
  ],
  "overdue": [
    "Waiting since {date}",
    "รอตั้งแต่ {date}"
  ],
  "allDay": [
    "Any time",
    "เวลาไหนก็ได้"
  ],
  "repeatNone": [
    "Just this once",
    "ครั้งนี้ครั้งเดียว"
  ],
  "repeatDaily": [
    "Every day",
    "ทุกวัน"
  ],
  "repeatWeekly": [
    "Every week",
    "ทุกสัปดาห์"
  ],
  "repeatYearly": [
    "Every year",
    "ทุกปี"
  ],
  "categoryTask": [
    "To-do",
    "สิ่งที่ต้องทำ"
  ],
  "categoryHealth": [
    "Wellbeing",
    "สุขภาพ"
  ],
  "categoryWorkout": [
    "Movement",
    "ออกกำลังกาย"
  ],
  "categoryBirthday": [
    "Birthday",
    "วันเกิด"
  ],
  "categoryMoment": [
    "Little joy",
    "ความสุขเล็กๆ"
  ],
  "editTask": [
    "Edit {title}",
    "แก้ไข {title}"
  ],
  "completeTask": [
    "Complete {title}",
    "ทำ {title} ให้เสร็จ"
  ],
  "yourFriend": [
    "A FRIEND FOR THE JOURNEY",
    "เพื่อนร่วมทางของคุณ"
  ],
  "friendHeading": [
    "Meet your garden friend",
    "เพื่อนตัวน้อยในสวน"
  ],
  "petMood": [
    "Very happy to see you.",
    "ดีใจที่ได้เจอคุณ"
  ],
  "sayHello": [
    "Say hello",
    "ทักทายเพื่อน"
  ],
  "friends": [
    "Meet the family",
    "พบเพื่อนๆ ในสวน"
  ],
  "level": [
    "Level {level}",
    "เลเวล {level}"
  ],
  "xpProgress": [
    "{xp} / 100 XP to grow",
    "เติบโตอีก {xp} / 100 XP"
  ],
  "nextPet": [
    "{name} joins at level {level}.",
    "{name} จะมาอยู่ด้วยเมื่อถึงเลเวล {level}"
  ],
  "allFriends": [
    "Your whole little family is here!",
    "ครอบครัวเล็กๆ มาอยู่ครบแล้ว"
  ],
  "petMoss": [
    "Moss",
    "มอส"
  ],
  "petPip": [
    "Pip",
    "พิป"
  ],
  "petFern": [
    "Fern",
    "เฟิร์น"
  ],
  "petCloud": [
    "Cloud",
    "คลาวด์"
  ],
  "petHello1": [
    "You’re doing better than you think. ♡",
    "คุณทำได้ดีมากกว่าที่คิดนะ ♡"
  ],
  "petHello2": [
    "One tiny step is still a step!",
    "ก้าวเล็กๆ ก็เป็นก้าวเหมือนกันนะ"
  ],
  "petHello3": [
    "I saved a little sunshine for you.",
    "เก็บแสงแดดนิดหนึ่งไว้ให้คุณแล้ว"
  ],
  "petHello4": [
    "A pause counts as looking after yourself.",
    "การพักก็เป็นการดูแลตัวเองนะ"
  ],
  "friendLocked": [
    "Joins at level {level}",
    "มาอยู่ด้วยเมื่อเลเวล {level}"
  ],
  "friendChoose": [
    "Choose this friend",
    "เลือกเพื่อนตัวนี้"
  ],
  "friendChosen": [
    "Your companion",
    "เพื่อนร่วมทางของคุณ"
  ],
  "photoTeaser": [
    "A PAGE, A PHOTO, A FEELING",
    "หนึ่งหน้า หนึ่งรูป หนึ่งความรู้สึก"
  ],
  "diaryTeaserTitle": [
    "Some days are worth\nkeeping in a little jar.",
    "บางวันก็น่าเก็บไว้\nในขวดใบเล็ก"
  ],
  "diaryTeaserBody": [
    "A few words. A favourite photo. Something only you would notice.",
    "คำไม่กี่คำ รูปที่ชอบ และเรื่องเล็กๆ ที่มีแค่คุณสังเกต"
  ],
  "comingUp": [
    "JUST AROUND THE CORNER",
    "อีกไม่นานก็จะมาถึง"
  ],
  "upcomingHeading": [
    "On the horizon",
    "สิ่งที่ใกล้เข้ามา"
  ],
  "seeCalendar": [
    "Wander through your calendar",
    "เดินเล่นในปฏิทิน"
  ],
  "noUpcoming": [
    "Nothing coming up just yet. Enjoy the open space.",
    "ยังไม่มีเรื่องใกล้เข้ามา ใช้เวลาว่างนี้ได้เลย"
  ],
  "footer": [
    "For all the ordinary days that become your life.",
    "สำหรับวันธรรมดาที่ค่อยๆ กลายเป็นชีวิตของคุณ"
  ],
  "yearEyebrow": [
    "DREAM A LITTLE FURTHER",
    "มองไกลไปอีกสักหน่อย"
  ],
  "yearTitle": [
    "A year of little possibilities.",
    "หนึ่งปีกับความเป็นไปได้เล็กๆ"
  ],
  "yearSub": [
    "Birthdays, routines, and the plans you’re looking forward to.",
    "วันเกิด กิจวัตร และแผนที่คุณเฝ้ารอ"
  ],
  "monthJump": [
    "Jump to a month",
    "ไปยังเดือน"
  ],
  "backToday": [
    "Back to today",
    "กลับไปวันนี้"
  ],
  "prevMonth": [
    "Previous month",
    "เดือนก่อนหน้า"
  ],
  "nextMonth": [
    "Next month",
    "เดือนถัดไป"
  ],
  "selectedDay": [
    "A DAY IN YOUR GARDEN",
    "หนึ่งวันในสวนของคุณ"
  ],
  "addSelected": [
    "Plant a plan here",
    "วางแผนไว้ตรงนี้"
  ],
  "noAgenda": [
    "This page of your calendar is still open.",
    "หน้าปฏิทินนี้ยังว่างอยู่"
  ],
  "birthdayNote": [
    "Birthdays bloom every year.",
    "วันเกิดกลับมาผลิบานทุกปี"
  ],
  "birthdayNoteBody": [
    "Choose Birthday when adding a task and we’ll make it a yearly reminder.",
    "เลือกหมวดวันเกิดเมื่อเพิ่มงาน แล้วเราจะตั้งให้เตือนทุกปี"
  ],
  "weekday0": [
    "Sun",
    "อา"
  ],
  "weekday1": [
    "Mon",
    "จ"
  ],
  "weekday2": [
    "Tue",
    "อ"
  ],
  "weekday3": [
    "Wed",
    "พ"
  ],
  "weekday4": [
    "Thu",
    "พฤ"
  ],
  "weekday5": [
    "Fri",
    "ศ"
  ],
  "weekday6": [
    "Sat",
    "ส"
  ],
  "diaryEyebrow": [
    "A LITTLE SPACE TO BE YOURSELF",
    "พื้นที่เล็กๆ ให้เป็นตัวเอง"
  ],
  "diaryTitle": [
    "Dear day,",
    "ถึงวันนี้,"
  ],
  "diarySub": [
    "You don’t need a big adventure to have a story to tell.",
    "ไม่ต้องมีการผจญภัยใหญ่โต ก็มีเรื่องราวให้เล่าได้"
  ],
  "diaryDate": [
    "A page for",
    "หน้าบันทึกของวันที่"
  ],
  "entryPlaceholder": [
    "What would you like to remember?\nA little kindness, a funny moment, a tiny win…",
    "วันนี้อยากจดจำเรื่องอะไร\nความใจดีเล็กๆ เรื่องขำๆ หรือความสำเร็จสักนิด…"
  ],
  "addPhotos": [
    "Add a photo",
    "เพิ่มรูปภาพ"
  ],
  "savePage": [
    "Keep this page",
    "เก็บหน้านี้ไว้"
  ],
  "unsaved": [
    "A little thought, not saved yet",
    "ความคิดเล็กๆ ที่ยังไม่ได้บันทึก"
  ],
  "saved": [
    "Safely tucked away",
    "เก็บไว้เรียบร้อยแล้ว"
  ],
  "removePhoto": [
    "Remove photo {number}",
    "นำรูปที่ {number} ออก"
  ],
  "photoAlt": [
    "Memory photo {number}",
    "รูปความทรงจำที่ {number}"
  ],
  "promptLabel": [
    "A LITTLE NUDGE",
    "คำถามชวนคิดสักนิด"
  ],
  "anotherPrompt": [
    "Another little nudge",
    "คำถามชวนคิดอีกข้อ"
  ],
  "prompt0": [
    "What made you pause and smile today?",
    "วันนี้มีอะไรทำให้คุณหยุดยิ้มบ้าง"
  ],
  "prompt1": [
    "What felt like a small kindness?",
    "มีความใจดีเล็กๆ เรื่องไหนเกิดขึ้นบ้าง"
  ],
  "prompt2": [
    "Which moment would you keep in a little jar?",
    "ถ้าเก็บช่วงเวลาหนึ่งไว้ในขวดได้ จะเลือกช่วงไหน"
  ],
  "prompt3": [
    "What are you quietly proud of?",
    "มีเรื่องไหนที่คุณแอบภูมิใจอยู่บ้าง"
  ],
  "diaryPrivacy": [
    "Your words and photos stay in this browser. Remember to make a backup in Settings.",
    "คำและรูปของคุณอยู่ในเบราว์เซอร์นี้ สำรองข้อมูลได้ในหน้าตั้งค่า"
  ],
  "memoryEyebrow": [
    "GATHERED WITH LOVE",
    "เก็บไว้อย่างทะนุถนอม"
  ],
  "memoryTitle": [
    "A walk down memory lane.",
    "เดินเล่นในความทรงจำ"
  ],
  "memorySub": [
    "Your days, gathered into little keepsakes.",
    "รวบรวมวันของคุณเป็นของที่ระลึกเล็กๆ"
  ],
  "summaryMonth": [
    "Choose a month to gather",
    "เลือกเดือนที่จะเก็บความทรงจำ"
  ],
  "createSummary": [
    "Gather this month",
    "รวบรวมเดือนนี้"
  ],
  "summaryBanner": [
    "Little moments add up.",
    "ช่วงเวลาเล็กๆ รวมกันเป็นเรื่องใหญ่"
  ],
  "summaryBannerBody": [
    "Completed plans, diary pages, and photos — a gentle look back at your month.",
    "งานที่สำเร็จ หน้าบันทึก และรูปภาพ สำหรับย้อนมองเดือนที่ผ่านมา"
  ],
  "filterAll": [
    "Everything",
    "ทั้งหมด"
  ],
  "filterSummary": [
    "Monthly keepsakes",
    "ของที่ระลึกรายเดือน"
  ],
  "filterDiary": [
    "Diary pages",
    "หน้าบันทึก"
  ],
  "emptyMemory": [
    "Your story is just beginning.",
    "เรื่องราวของคุณเพิ่งเริ่มต้น"
  ],
  "emptyMemorySub": [
    "Save a diary page or gather a month. Your little keepsakes will appear here.",
    "เก็บหน้าบันทึกหรือรวบรวมเดือนหนึ่ง แล้วของที่ระลึกจะปรากฏที่นี่"
  ],
  "summaryLabel": [
    "MONTHLY KEEPSAKE",
    "ของที่ระลึกประจำเดือน"
  ],
  "diaryLabel": [
    "DIARY PAGE",
    "หน้าบันทึก"
  ],
  "summaryStats": [
    "{tasks} little wins · {pages} pages · {photos} photos",
    "{tasks} ความสำเร็จ · {pages} หน้าบันทึก · {photos} รูป"
  ],
  "photoCount": [
    "{count} photos tucked away",
    "เก็บรูปไว้ {count} รูป"
  ],
  "untitledDiary": [
    "A little moment from this day",
    "ช่วงเวลาเล็กๆ จากวันนี้"
  ],
  "readMemory": [
    "Open this keepsake",
    "เปิดของที่ระลึกนี้"
  ],
  "highlights": [
    "A few things you made happen",
    "บางเรื่องที่คุณทำสำเร็จ"
  ],
  "noHighlights": [
    "Even a quiet month is part of your story.",
    "แม้เป็นเดือนที่เงียบสงบ ก็ยังเป็นส่วนหนึ่งของเรื่องราวคุณ"
  ],
  "taskDialogNew": [
    "Plant a little plan.",
    "วางแผนเล็กๆ สักเรื่อง"
  ],
  "taskDialogEdit": [
    "Tend to your plan.",
    "ดูแลแผนของคุณ"
  ],
  "taskName": [
    "What would you like to do?",
    "อยากทำอะไรบ้าง"
  ],
  "taskPlaceholder": [
    "e.g. Take a gentle walk",
    "เช่น ออกไปเดินเล่นสักนิด"
  ],
  "date": [
    "Date",
    "วันที่"
  ],
  "time": [
    "Time (optional)",
    "เวลา (ไม่จำเป็น)"
  ],
  "category": [
    "A little category",
    "หมวดหมู่เล็กๆ"
  ],
  "repeat": [
    "How often?",
    "ทำบ่อยแค่ไหน"
  ],
  "remindTask": [
    "A reminder in this browser",
    "เตือนฉันในเบราว์เซอร์นี้"
  ],
  "reminderHint": [
    "For timed tasks, while the page is open.",
    "สำหรับงานที่ตั้งเวลา ขณะที่เปิดหน้านี้ไว้"
  ],
  "saveTask": [
    "Plant this plan",
    "บันทึกแผนนี้"
  ],
  "saveChanges": [
    "Save the changes",
    "บันทึกการแก้ไข"
  ],
  "deleteTask": [
    "Remove this plan",
    "นำแผนนี้ออก"
  ],
  "deleteConfirm": [
    "Remove this plan? Its past XP stays in your garden.",
    "นำแผนนี้ออกหรือไม่ XP ที่เคยได้รับจะยังอยู่"
  ],
  "cancel": [
    "Maybe later",
    "ไว้ทีหลัง"
  ],
  "close": [
    "Close",
    "ปิด"
  ],
  "settingsTitle": [
    "Make yourself at home.",
    "ปรับสวนให้เป็นของคุณ"
  ],
  "settingsIntro": [
    "A few little things to make your garden feel right.",
    "ปรับเรื่องเล็กๆ ให้สวนนี้เหมาะกับคุณ"
  ],
  "notificationsTitle": [
    "A gentle nudge",
    "การสะกิดเตือนอย่างอ่อนโยน"
  ],
  "notificationsBody": [
    "Browser reminders need permission and this page to stay open. They won’t run after the page closes.",
    "การเตือนต้องได้รับอนุญาตและเปิดหน้านี้ไว้ เมื่อปิดหน้าแล้วจะไม่แจ้งเตือน"
  ],
  "enable": [
    "Enable reminders",
    "เปิดการแจ้งเตือน"
  ],
  "notificationGranted": [
    "Allowed in this browser",
    "อนุญาตในเบราว์เซอร์นี้แล้ว"
  ],
  "notificationDenied": [
    "Blocked in browser settings",
    "ถูกปิดกั้นในการตั้งค่าเบราว์เซอร์"
  ],
  "notificationDefault": [
    "Permission not requested",
    "ยังไม่ได้ขออนุญาต"
  ],
  "notificationUnsupported": [
    "This browser doesn’t support notifications.",
    "เบราว์เซอร์นี้ไม่รองรับการแจ้งเตือน"
  ],
  "notificationEnabled": [
    "Reminders are on. Keep your garden open.",
    "เปิดการเตือนแล้ว กรุณาเปิดสวนนี้ไว้"
  ],
  "notificationNotAllowed": [
    "You can allow reminders in your browser’s site settings.",
    "อนุญาตการเตือนได้ในการตั้งค่าเว็บไซต์ของเบราว์เซอร์"
  ],
  "backup": [
    "Keep a copy of your garden",
    "เก็บสำเนาสวนของคุณ"
  ],
  "backupBody": [
    "A backup includes your plans, diary, photos, and keepsakes.",
    "สำเนารวมแผน ไดอารี่ รูปภาพ และของที่ระลึก"
  ],
  "export": [
    "Save a backup",
    "บันทึกข้อมูลสำรอง"
  ],
  "import": [
    "Restore a backup",
    "กู้คืนข้อมูลสำรอง"
  ],
  "importConfirm": [
    "Replace this browser’s garden with this backup? Save a backup first if you want to keep it.",
    "แทนที่สวนในเบราว์เซอร์ด้วยสำเนานี้หรือไม่ หากต้องการเก็บข้อมูลเดิมให้สำรองไว้ก่อน"
  ],
  "reset": [
    "Start a fresh garden",
    "เริ่มสวนใหม่"
  ],
  "resetBody": [
    "This clears the plans, pages, photos, and XP in this browser.",
    "ล้างแผน บันทึก รูปภาพ และ XP ในเบราว์เซอร์นี้"
  ],
  "resetConfirm": [
    "Clear this garden? This cannot be undone. Save a backup first if needed.",
    "ล้างสวนนี้หรือไม่ ย้อนกลับไม่ได้ กรุณาสำรองข้อมูลก่อนหากต้องการ"
  ],
  "toastTaskAdded": [
    "A little plan has been planted. 🌱",
    "วางแผนเล็กๆ ไว้แล้ว 🌱"
  ],
  "toastTaskEdited": [
    "Your little plan is updated.",
    "อัปเดตแผนเรียบร้อยแล้ว"
  ],
  "toastTaskRemoved": [
    "A little more room in your garden.",
    "มีที่ว่างในสวนเพิ่มขึ้นนิดหนึ่ง"
  ],
  "toastXP": [
    "+10 XP! Little by little, you’re growing.",
    "+10 XP! คุณกำลังค่อยๆ เติบโต"
  ],
  "toastDone": [
    "Another little thing, done. ♡",
    "อีกเรื่องเล็กๆ ที่ทำสำเร็จแล้ว ♡"
  ],
  "toastUndo": [
    "Take it at your own pace.",
    "ค่อยๆ ทำในจังหวะของคุณ"
  ],
  "toastPage": [
    "A little piece of today, kept safe. ♡",
    "เก็บช่วงเวลาเล็กๆ ของวันนี้ไว้แล้ว ♡"
  ],
  "toastEmptyPage": [
    "A few words or a photo will do.",
    "เขียนสักนิดหรือเพิ่มรูปภาพก่อนนะ"
  ],
  "toastSummary": [
    "Your monthly keepsake is ready. ✨",
    "ของที่ระลึกประจำเดือนพร้อมแล้ว ✨"
  ],
  "toastStorage": [
    "This browser’s storage is full or unavailable. Save a backup and try fewer photos.",
    "พื้นที่เก็บข้อมูลเต็มหรือใช้ไม่ได้ กรุณาสำรองข้อมูลและลดจำนวนรูป"
  ],
  "toastPhotoLimit": [
    "Up to four photos per page, please.",
    "เพิ่มได้ไม่เกินสี่รูปต่อหน้าบันทึก"
  ],
  "toastPhotoSize": [
    "Please choose an image smaller than 8 MB.",
    "กรุณาเลือกรูปภาพขนาดไม่เกิน 8 MB"
  ],
  "toastPhotoError": [
    "That photo couldn’t be opened. Please try another.",
    "เปิดรูปนี้ไม่ได้ กรุณาลองรูปอื่น"
  ],
  "toastFutureSummary": [
    "Let’s keep the future a surprise. Choose this month or an earlier one.",
    "เก็บอนาคตไว้ให้ประหลาดใจ เลือกเดือนนี้หรือเดือนก่อนหน้านะ"
  ],
  "toastRestore": [
    "Your garden is back. Welcome home.",
    "สวนของคุณกลับมาแล้ว ยินดีต้อนรับกลับบ้าน"
  ],
  "toastImportError": [
    "That file doesn’t look like a Memory Garden backup.",
    "ไฟล์นี้ไม่ใช่ข้อมูลสำรองของสวนความทรงจำ"
  ],
  "toastReset": [
    "A fresh page for your garden.",
    "เริ่มหน้าใหม่ให้สวนแล้ว"
  ],
  "notificationTitle": [
    "A little reminder from your garden",
    "สวนมีเรื่องเล็กๆ มาเตือน"
  ],
  "due": [
    "It’s time for: {title}",
    "ถึงเวลาสำหรับ: {title}"
  ],
  "languageChanged": [
    "A little change of language.",
    "เปลี่ยนภาษาเรียบร้อยแล้ว"
  ],
  "initError": [
    "The garden couldn’t open. Try reloading the page.",
    "เปิดสวนไม่ได้ กรุณาลองโหลดหน้าใหม่"
  ]
};function t(key,vars,lang){const pair=messages[key];if(!pair)throw new Error('Missing translation: '+key);let text=pair[lang==='th'?1:0];for(const [name,value] of Object.entries(vars||{}))text=text.split('{'+name+'}').join(String(value));return text}messages.sampleVitamins=['Take morning vitamins','กินวิตามินตอนเช้า'];messages.sampleStretch=['A little stretch','ยืดเส้นยืดสายสักนิด'];messages.sampleCall=['Call Mum','โทรหาแม่'];messages.winsLabel=['little wins','ความสำเร็จ'];messages.pagesLabel=['diary pages','หน้าบันทึก'];messages.photosLabel=['photos','รูปภาพ'];Object.assign(messages,{"diaryFont":["Writing font","แบบตัวอักษร"],"diaryColour":["Ink colour","สีหมึก"],"diaryPaper":["Paper","กระดาษ"],"paperRuled":["Soft ruled","เส้นบรรทัด"],"paperPlain":["Plain cream","ครีมเรียบ"],"paperDots":["Dotted","จุดเล็กๆ"],"paperGrid":["Squared","ตาราง"],"paperKraft":["Warm kraft","คราฟต์อบอุ่น"],"paperRose":["Blush paper","กระดาษสีชมพู"],"fontHint":["12 Thai + English fonts. They load online from Google Fonts; offline you’ll see a system fallback.","12 ฟอนต์ที่รองรับไทยและอังกฤษ โหลดจาก Google Fonts เมื่อออนไลน์ หากออฟไลน์จะใช้ฟอนต์สำรอง"],"savePage":["Save diary","บันทึกไดอารี่"],"customisePage":["MAKE THIS PAGE YOURS","แต่งหน้านี้ให้เป็นของคุณ"],"changeCover":["Choose your own picture","เลือกรูปของคุณเอง"],"restoreCover":["Use the garden picture","ใช้รูปสวนเดิม"],"coverSaved":["Your diary corner has a new picture. ♡","มุมไดอารี่มีรูปใหม่แล้ว ♡"],"latestDiary":["FRESH FROM YOUR DIARY","ส่งตรงจากไดอารี่"],"latestDiaryTitle":["A little page, kept close.","หน้าบันทึกเล็กๆ ที่เก็บไว้ใกล้ใจ"],"noSavedDiary":["Save a diary page and it will appear here, too.","บันทึกไดอารี่แล้วหน้าบันทึกจะปรากฏที่นี่ด้วย"],"openSavedDiary":["Read this page","อ่านหน้านี้"],"focus":["Focus nook","มุมโฟกัส"],"focusEyebrow":["ONE THING, WITH A LITTLE CARE","ตั้งใจกับหนึ่งเรื่องเล็กๆ"],"focusTitle":["A little time for what matters.","แบ่งเวลาให้สิ่งสำคัญ"],"focusSub":["Choose one thing, settle in, and let your focus grow.","เลือกหนึ่งเรื่อง นั่งสบายๆ แล้วให้สมาธิค่อยๆ เติบโต"],"focusTask":["What are you focusing on?","อยากตั้งใจกับเรื่องอะไร"],"focusPlaceholder":["e.g. I want to study JavaScript","เช่น อยากเรียน JavaScript"],"focusDuration":["How long?","นานเท่าไร"],"duration15":["15 minutes","15 นาที"],"duration25":["25 minutes","25 นาที"],"duration30":["30 minutes","30 นาที"],"duration45":["45 minutes","45 นาที"],"duration60":["60 minutes","60 นาที"],"duration90":["90 minutes","90 นาที"],"durationCustom":["Choose my own time","กำหนดเวลาเอง"],"focusCustomMinutes":["Minutes (5–180)","นาที (5–180)"],"focusStart":["Start a little focus","เริ่มช่วงเวลาโฟกัส"],"focusAgain":["Start a new session","เริ่มช่วงเวลาใหม่"],"focusPause":["Pause","พักเวลา"],"focusResume":["Resume","ทำต่อ"],"focusCancel":["End this session","ยุติช่วงเวลานี้"],"focusMinimise":["Minimise & keep going","ย่อแล้วใช้งานเว็บต่อ"],"focusOpen":["Open focus nook","เปิดมุมโฟกัส"],"focusReady":["Ready when you are.","พร้อมเมื่อคุณพร้อม"],"focusRunning":["A little focus is growing.","กำลังค่อยๆ สะสมสมาธิ"],"focusPaused":["A little pause. Breathe.","พักสักนิด หายใจสบายๆ"],"focusCompleted":["You did it. Take a little break!","ทำสำเร็จแล้ว พักสักนิดนะ"],"focusReward":["Finish this session for {xp} XP.","ทำช่วงเวลานี้ให้จบเพื่อรับ {xp} XP"],"focusTimerNote":["The timer keeps its finish time while you browse or reload. If this page is closed, your reward is recorded when you return.","ระบบจำเวลาสิ้นสุดแม้เปลี่ยนหน้าหรือโหลดใหม่ หากปิดเว็บ รางวัลจะถูกบันทึกเมื่อคุณกลับมา"],"focusInvalid":["Give your session a name and choose 5–180 minutes.","ตั้งชื่อช่วงเวลาและเลือกเวลา 5–180 นาที"],"focusConfirmCancel":["End this session early? XP is awarded only for completed sessions.","ยุติช่วงเวลานี้ก่อนกำหนดหรือไม่ จะได้รับ XP เฉพาะเมื่อครบเวลา"],"focusFinishToast":["A little focus, finished! +{xp} XP · {rank}","โฟกัสสำเร็จแล้ว! +{xp} XP · {rank}"],"focusNotification":["Your focus session is finished.","ช่วงเวลาโฟกัสเสร็จแล้ว"],"focusQuickTitle":["Make a little room to focus.","แบ่งที่ว่างให้สมาธิสักนิด"],"focusQuickBody":["Study, read, create — one gentle timer at a time.","เรียน อ่าน สร้างสรรค์ ค่อยๆ ทำทีละช่วงเวลา"],"focusRankLabel":["YOUR STUDY RANK","อันดับการเรียนของคุณ"],"rankSeed":["Little Seed","เมล็ดน้อย"],"rankSprout":["Curious Sprout","ต้นอ่อนช่างเรียนรู้"],"rankSapling":["Steady Sapling","ต้นกล้าผู้มุ่งมั่น"],"rankOak":["Study Oak","ต้นโอ๊กนักเรียนรู้"],"rankSage":["Garden Sage","ปราชญ์แห่งสวน"],"rankProgress":["{minutes} focus minutes · {sessions} completed sessions","โฟกัสแล้ว {minutes} นาที · สำเร็จ {sessions} ช่วงเวลา"],"rankNext":["{minutes} more minutes to become {rank}.","อีก {minutes} นาที จะเป็น {rank}"],"rankTop":["Your focus has grown into a whole little forest.","สมาธิของคุณเติบโตเป็นป่าเล็กๆ แล้ว"],"focusHistory":["Little sessions, gathered","เก็บช่วงเวลาที่ตั้งใจ"],"focusHistoryEmpty":["Your finished sessions will gather here.","ช่วงเวลาที่โฟกัสสำเร็จจะปรากฏที่นี่"],"focusHistoryLine":["{minutes} minutes · +{xp} XP","{minutes} นาที · +{xp} XP"],"focusSummary":["{minutes} focus minutes across {sessions} sessions","โฟกัส {minutes} นาที จาก {sessions} ช่วงเวลา"],"focusDismiss":["Dismiss timer","ปิดแถบเวลา"],"musicEyebrow":["A LITTLE SOUNDTRACK","เสียงเพลงเล็กๆ"],"musicTitle":["Make a playlist for your day.","ทำเพลย์ลิสต์ให้วันของคุณ"],"musicIntro":["Paste YouTube video links, give them names, and keep them in your own playlists. No account connection is needed.","วางลิงก์วิดีโอ YouTube ตั้งชื่อเพลง แล้วเก็บเป็นเพลย์ลิสต์ของคุณ โดยไม่ต้องเชื่อมบัญชี"],"playlistLabel":["Your playlists","เพลย์ลิสต์ของคุณ"],"defaultPlaylist":["My study soundtrack","เพลงสำหรับอ่านหนังสือ"],"playlistName":["New playlist name","ชื่อเพลย์ลิสต์ใหม่"],"playlistNamePlaceholder":["e.g. Rainy afternoon","เช่น บ่ายวันฝนตก"],"createPlaylist":["Create playlist","สร้างเพลย์ลิสต์"],"deletePlaylist":["Remove playlist","นำเพลย์ลิสต์ออก"],"playlistDeleteConfirm":["Remove this playlist and its saved links?","นำเพลย์ลิสต์นี้และลิงก์ที่บันทึกไว้ออกหรือไม่"],"videoLink":["YouTube video link","ลิงก์วิดีโอ YouTube"],"trackTitle":["A name for this track (optional)","ชื่อเพลงนี้ (ไม่จำเป็น)"],"trackTitlePlaceholder":["e.g. Quiet piano","เช่น เปียโนเบาๆ"],"addTrack":["Add to playlist","เพิ่มในเพลย์ลิสต์"],"playPlaylist":["Play this playlist","เล่นเพลย์ลิสต์นี้"],"findYouTube":["Find music on YouTube ↗","หาเพลงใน YouTube ↗"],"playlistEmpty":["A little silence. Add your first YouTube link.","เงียบสักนิด เพิ่มลิงก์ YouTube แรกของคุณได้เลย"],"untitledTrack":["Track {number}","เพลงที่ {number}"],"playTrack":["Play {title}","เล่น {title}"],"removeTrack":["Remove {title}","นำ {title} ออก"],"moveTrackUp":["Move track up","เลื่อนเพลงขึ้น"],"moveTrackDown":["Move track down","เลื่อนเพลงลง"],"musicAdded":["A little music, added. ♫","เพิ่มเสียงเพลงแล้ว ♫"],"musicDuplicate":["That video is already in this playlist.","มีวิดีโอนี้ในเพลย์ลิสต์แล้ว"],"musicBadLink":["Please paste a YouTube video link or its 11-character video ID.","กรุณาวางลิงก์วิดีโอ YouTube หรือรหัสวิดีโอ 11 ตัวอักษร"],"musicPlaylistLimit":["Keep up to 50 videos in each playlist.","เก็บวิดีโอได้ไม่เกิน 50 รายการต่อเพลย์ลิสต์"],"musicNewPlaylist":["Your new playlist is ready.","เพลย์ลิสต์ใหม่พร้อมแล้ว"],"musicPlayerTitle":["YouTube playlist player","เครื่องเล่นเพลย์ลิสต์ YouTube"],"musicNowPlaying":["Playlist: {name}","เพลย์ลิสต์: {name}"],"stopMusic":["Stop & close player","หยุดและปิดเครื่องเล่น"],"openYouTube":["Open in YouTube ↗","เปิดใน YouTube ↗"],"musicNote":["YouTube needs internet. Some videos block embedding, and opening this app as a local file can prevent playback; use localhost/HTTPS or Open in YouTube. Playlists are saved in this app, not in your YouTube account.","YouTube ต้องใช้อินเทอร์เน็ต บางวิดีโอไม่อนุญาตให้ฝัง และการเปิดเว็บเป็นไฟล์อาจเล่นไม่ได้ ให้ใช้ localhost/HTTPS หรือเปิดใน YouTube เพลย์ลิสต์บันทึกในแอปนี้ ไม่ได้บันทึกในบัญชี YouTube"],"musicQueueHint":["The visible player follows you around the site. Close it to stop. Playlist edits apply the next time you press Play.","เครื่องเล่นที่มองเห็นจะอยู่ด้วยขณะเปลี่ยนหน้า ปิดเพื่อหยุดเล่น การแก้เพลย์ลิสต์จะมีผลเมื่อกดเล่นใหม่"]});const api={messages,t};if(typeof module==='object'&&module.exports)module.exports=api;else root.GardenI18n=api})(typeof window!=='undefined'?window:globalThis);
