"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Search, ChevronDown, List } from "lucide-react";

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  icon: string;
  items: PriceItem[];
}

const priceData: PriceCategory[] = [
  {
    title: "Загальні види робіт",
    icon: "🦷",
    items: [
      { name: "Консультація", price: "500" },
      { name: "Анестезія аплікаційна", price: "150" },
      { name: "Анестезія провідникова", price: "300" },
      { name: "Анестезія інфільтраційна", price: "250" },
      { name: "Рентген зуба", price: "300" },
      { name: "Зняття коронки: штампованої/пластмасової", price: "300" },
      { name: "Зняття коронки: цільнолитої/керамічної", price: "450" },
      { name: "Видалення штифта: анкерного", price: "500" },
      { name: "Видалення штифта: скловолоконного", price: "1 000" },
      { name: "Видалення металевої вкладки однокореневої", price: "900" },
      { name: "Накладання кофердама (просте)", price: "300" },
      { name: "Накладання кофердама (складне)", price: "400" },
      { name: "Коагуляція ясенного краю лазером (1 зуб)", price: "400" },
      { name: "Повітряно-абразивне препарування Rondoflex", price: "350" },
      { name: "Набір стерильних інструментів", price: "200" },
    ],
  },
  {
    title: "Профілактика",
    icon: "✨",
    items: [
      { name: "Зняття чутливості 1 зуба сіал-протектором", price: "300" },
      { name: "Фторування зубів (1 щелепа)", price: "1 000" },
      { name: "Герметизація фісур постійних зубів", price: "500" },
      { name: "Ремінералізуюча терапія REGENAMEL", price: "2 500" },
    ],
  },
  {
    title: "Пародонтологія",
    icon: "🩺",
    items: [
      { name: "Професійна чистка зубів комплексна", price: "2 300" },
      { name: "Професійна чистка зубів пастою", price: "600" },
      { name: "Професійна чистка зубів апаратом, система Airflow", price: "600" },
      { name: "Зняття зубних відкладень ультразвуком", price: "600" },
      { name: "Закритий кюретаж пародонтальних кишень (1 зуб)", price: "500" },
      { name: "Відкритий кюретаж пародонтальних кишень (1 зуб)", price: "1 000" },
      { name: "Закритий кюретаж одного сегменту", price: "2 500" },
      { name: "Інсталяція ясеневих кишень", price: "250" },
      { name: "Шинування зубів (1 зуб)", price: "700" },
      { name: "Корекція незнімного ретейнера", price: "500" },
      { name: "Відбілювання естетичного сегмента зубів (1 щелепа)", price: "3 500" },
      { name: "Відбілювання коронкове 1-го зуба", price: "800" },
      { name: "Відбілювання системою Beyond", price: "6 000" },
      { name: "Відбілювання системою Magic Smile", price: "5 000" },
    ],
  },
  {
    title: "Ендодонтія",
    icon: "🔬",
    items: [
      { name: "Механічна обробка: первинна, однокореневий зуб", price: "600" },
      { name: "Механічна обробка: первинна, двокореневий зуб", price: "1 200" },
      { name: "Механічна обробка: первинна, трьохкореневий зуб", price: "1 600" },
      { name: "Механічна обробка: вторинна, однокореневий зуб", price: "400" },
      { name: "Механічна обробка: вторинна, двокореневий зуб", price: "800" },
      { name: "Механічна обробка: вторинна, трьохкореневий зуб", price: "1 100" },
      { name: "Пломбування: однокореневого каналу", price: "700" },
      { name: "Пломбування: двокореневих каналів", price: "1 400" },
      { name: "Пломбування: трьохкореневих каналів", price: "1 600" },
      { name: "Тимчасове пломбування гідроксидом кальцію", price: "500" },
      { name: "Закриття перфорації MTA", price: "800" },
      { name: "Швидка допомога (анестезія, девіталізація, обробка, тимчасова пломба)", price: "1 500" },
      { name: "Розпломбування: одного каналу", price: "500" },
      { name: "Розпломбування: двох каналів", price: "1 000" },
      { name: "Розпломбування: трьох каналів", price: "1 500" },
      { name: "Вилучення стороннього тіла з кореневого каналу", price: "800" },
    ],
  },
  {
    title: "Пломбування та реставрації",
    icon: "💎",
    items: [
      { name: "Відновлення апроксимальної стінки перед ендолікуванням", price: "700" },
      { name: "Тимчасове відновлення (1 клас)", price: "700" },
      { name: "Тимчасове відновлення (2 клас)", price: "1 000" },
      { name: "Лікування карієсу: поверхневий", price: "1 400" },
      { name: "Лікування карієсу: середній", price: "1 800" },
      { name: "Лікування карієсу: глибокий", price: "2 000" },
      { name: "Реконструкція зуба 1 клас", price: "2 000" },
      { name: "Реконструкція зуба 2 клас", price: "2 500" },
      { name: "Реконструкція зуба (з додатковими поверхнями)", price: "3 000" },
      { name: "Реставрація зуба 3 клас", price: "2 000" },
      { name: "Реставрація зуба 4 клас", price: "2 500" },
      { name: "Реставрація зуба повне покриття", price: "3 500" },
      { name: "Реставрація зуба з використанням шаблону", price: "4 000" },
      { name: "Корекція пломби", price: "700" },
      { name: "Build up (після ендодонтичного лікування)", price: "1 500" },
    ],
  },
  {
    title: "Протезування",
    icon: "👑",
    items: [
      { name: "Відбитки: частковий", price: "200" },
      { name: "Відбитки: Speedex", price: "500" },
      { name: "Відбитки: Express", price: "700" },
      { name: "Виготовлення діагностичних моделей", price: "600" },
      { name: "Фотополімерна штифтова культя", price: "1 200" },
      { name: "Культьові вкладки: проста", price: "1 600" },
      { name: "Культьові вкладки: розбірна", price: "2 100" },
      { name: "Культьова вкладка з оксид цирконію з керамічним покриттям", price: "4 000" },
      { name: "Wax-up", price: "600" },
      { name: "Mock-up", price: "400" },
      { name: "Коронка тимчасова", price: "1 000" },
      { name: "Коронка тимчасова (лабораторна)", price: "1 400" },
      { name: "Коронка тимчасова РММА", price: "1 800" },
      { name: "Коронка металева", price: "2 300" },
      { name: "Коронка металокерамічна (бокові зуби)", price: "5 000" },
      { name: "Коронка металокерамічна (передні зуби)", price: "5 700" },
      { name: "Вінір високої складності", price: "15 000 – 17 000" },
      { name: "Одиниця без металева пресована кераміка", price: "9 000 – 11 000" },
      { name: "Одиниця пресованої кераміки на оксиді цирконію", price: "9 000 – 11 000" },
      { name: "Керамічна вкладка", price: "6 000 – 9 000" },
      { name: "Армування скловолоконним штифтом", price: "1 000" },
      { name: "Фіксація: склоіономерний цемент", price: "400" },
      { name: "Фіксація: тимчасовий цемент", price: "250" },
      { name: "Фіксація: адгезивна", price: "700" },
      { name: "Фіксація на імплантанті", price: "800" },
    ],
  },
  {
    title: "Знімне протезування",
    icon: "🔧",
    items: [
      { name: "Індивідуальна ложка", price: "600" },
      { name: "Прикусний валик", price: "600" },
      { name: "Мікропротез", price: "2 000" },
      { name: "Мікропротез термопластичний", price: "2 500" },
      { name: "Частковий знімний протез", price: "4 500" },
      { name: "Повний знімний протез", price: "5 500" },
      { name: "Частковий знімний протез нейлоновий", price: "8 000" },
      { name: "Бюгельні протези: з кламерною фіксацією", price: "7 500" },
      { name: "Бюгельні протези: з замковою фіксацією", price: "9 000" },
      { name: "Бюгельні протези: складної конструкції", price: "12 000" },
      { name: "Перебазування тимчасової коронки", price: "200" },
      { name: "Захисна капа, ретенційна капа", price: "2 000" },
      { name: "Суглобова капа", price: "2 500" },
    ],
  },
  {
    title: "Хірургія",
    icon: "⚕️",
    items: [
      { name: "Видалення зуба просте", price: "800" },
      { name: "Видалення зуба складне", price: "1 200" },
      { name: "Видалення зуба мудрості (просте)", price: "1 600" },
      { name: "Атипове видалення (1 степінь складності)", price: "2 200" },
      { name: "Атипове видалення (2 степінь складності)", price: "2 600" },
      { name: "Видалення молочного зуба (просте)", price: "250" },
      { name: "Видалення молочного зуба (складне)", price: "400" },
      { name: "Резекція верхівки кореня", price: "4 500" },
      { name: "Закрита остеотомія", price: "500" },
      { name: "Остеопластика / Остеопластика РОЛ-технікою", price: "2 000" },
      { name: "Закритий синус-ліфтинг (+ кістковий матеріал)", price: "8 000" },
      { name: "Відкритий синус-ліфтинг (+ кістковий матеріал)", price: "10 000" },
      { name: "Видалення кісти з гайморової пазухи", price: "6 500" },
      { name: "Застосування натуральних мембран (Україна)", price: "3 500" },
      { name: "BIO-OSS, CERABONE (за дозу 0,25 мг)", price: "6 000" },
      { name: "BIOGIDE Perio / Tutoplast", price: "7 650" },
      { name: "Колагенова губка", price: "400" },
      { name: "Застосування I-PRF (2 дози)", price: "900" },
      { name: "Закриття рецесії (1 зуб)", price: "3 000" },
      { name: "Пересадка піднебінного трансплантанта", price: "4 000" },
      { name: "Пересадка трансплантанта з бугра (метод ПОНЧО)", price: "3 000" },
      { name: "Лікування альвеоліту", price: "600" },
      { name: "Видалення кісти", price: "3 500" },
      { name: "Кісткова пластика", price: "8 000" },
      { name: "Послаблюючий розріз по піднебінню", price: "800" },
      { name: "Мукогінгівальна хірургія (1 зуб)", price: "1 500" },
    ],
  },
  {
    title: "Імплантологія",
    icon: "🔩",
    items: [
      { name: "Навігаційний шаблон: 1-2 імплантанта", price: "6 500" },
      { name: "Навігаційний шаблон: 3-5 імплантантів", price: "6 500" },
      { name: "Навігаційний шаблон: 6+ імплантантів", price: "8 500" },
      { name: "1-й етап: Nobel Straumann (Швейцарія)", price: "26 500" },
      { name: "1-й етап: Nobel Straumann (складний)", price: "28 500" },
      { name: "1-й етап: Mis C1 (Ізраїль)", price: "17 000" },
      { name: "1-й етап: Mis C1 (складний)", price: "19 000" },
      { name: "1-й етап: INNO (Корея)", price: "12 000" },
      { name: "1-й етап: INNO (складний)", price: "12 500" },
      { name: "2-й етап: Nobel Straumann", price: "3 000" },
      { name: "2-й етап: Mis", price: "2 500" },
      { name: "2-й етап: INNO", price: "2 500" },
      { name: "Реімплантація", price: "1 000" },
    ],
  },
  {
    title: "Протезування на імплантантах",
    icon: "🦷",
    items: [
      { name: "Зняття відбитків за допомогою трансферів", price: "1 000" },
      { name: "Тимчасова коронка на імпланті", price: "2 000" },
      { name: "Металокерамічна коронка на імпланті", price: "6 500" },
      { name: "Керамічна коронка на оксиді цирконія", price: "8 500" },
      { name: "Керамічна коронка на імплантанті", price: "8 500" },
      { name: "Простий абатмент: Швейцарія", price: "5 900" },
      { name: "Тимчасовий абатмент: Швейцарія", price: "3 600" },
      { name: "Абатмент з оксиду цирконію: Швейцарія", price: "7 800" },
      { name: "Платформа для індивідуального абатмента: Швейцарія", price: "3 600" },
      { name: "Простий абатмент: MIS", price: "2 650" },
      { name: "Тимчасовий абатмент: MIS", price: "1 500" },
      { name: "Абатмент з оксиду цирконію: MIS", price: "5 400" },
      { name: "Платформа для індивідуального абатмента: MIS", price: "4 200" },
      { name: "Простий абатмент: INNO", price: "2 160" },
      { name: "Тимчасовий абатмент: INNO", price: "1 440" },
      { name: "Абатмент з оксиду цирконію: INNO", price: "5 400" },
      { name: "Платформа для індивідуального абатмента: INNO", price: "2 400" },
    ],
  },
  {
    title: "Ортодонтія",
    icon: "😁",
    items: [
      { name: "Консультація ортодонта", price: "700" },
      { name: "Діагностичні моделі", price: "600" },
      { name: "Фіксація металевої брекет-системи (1 щелепа)", price: "14 000" },
      { name: "Активація металевої брекет-системи", price: "1 000" },
      { name: "Фіксація металевого брекета (відклеївся, втрачений)", price: "1 400" },
      { name: "Фіксація металевого брекета (відклеївся поза клінікою)", price: "500" },
      { name: "Фіксація керамічної лігатурної системи (1 щелепа)", price: "28 500" },
      { name: "Активація керамічної брекет-системи", price: "1 000" },
      { name: "Фіксація керамічного брекета (втрачений)", price: "1 600" },
      { name: "Фіксація самолігуючої металевої системи Empowerx (США)", price: "35 000" },
      { name: "Активація самолігуючої металевої системи", price: "1 200" },
      { name: "Фіксація самолігуючого металевого брекета (втрачений)", price: "1 800" },
      { name: "Фіксація самолігуючої керамічної системи Damon (США)", price: "30 000" },
      { name: "Активація самолігуючої керамічної системи", price: "1 000" },
      { name: "Фіксація самолігуючого керамічного брекета (втрачений)", price: "2 700" },
      { name: "Фіксація апарату Carriere MOTION 3D", price: "12 000" },
      { name: "Активація апарату Carriere MOTION 3D", price: "500" },
      { name: "Фіксація незнімного ретейнера (1 щелепа)", price: "3 000" },
      { name: "Зняття брекет-системи + поліровка (1 щелепа)", price: "2 000" },
      { name: "Зняття + поліровка + фіксація ретейнера (1 щелепа)", price: "5 000" },
      { name: "Ретенційна капа (вакуумний ретейнер)", price: "3 000" },
      { name: "Трейнер ретенційний", price: "3 500" },
      { name: "Суглобова капа", price: "2 500" },
      { name: "Корекція незнімного ретейнера (1 зуб)", price: "500" },
      { name: "Зняття незнімного ретейнера", price: "1 000" },
      { name: "Апарат з гвинтом для розширення (1 щелепа)", price: "4 000" },
      { name: "Апарат Біоблок з гвинтом (1 щелепа)", price: "5 000" },
      { name: "Апарат для дисталізації", price: "6 000" },
      { name: "Апарат Марко-Россо", price: "9 000" },
      { name: "Апарат для розриву піднебінного шва", price: "7 000" },
      { name: "Повторна фіксація кільця", price: "500" },
      { name: "Повторна фіксація незнімного апарату", price: "1 000" },
      { name: "Лицева маска", price: "3 000" },
      { name: "Трейнер дитячий початковий, жорсткий", price: "3 000" },
      { name: "Еластелайнер однощелепний", price: "2 500" },
      { name: "Активація еластелайнера щипцями Хільярда", price: "300" },
      { name: "Встановлення мікроімпланта", price: "2 500" },
      { name: "Повторний огляд з апаратом", price: "300" },
      { name: "Зняття незнімного апарату на кільцях", price: "500" },
      { name: "Зняття незнімного апарату на мікроімплантах", price: "800" },
      { name: "MARPE (незнімний розширюючий на мікроімплантах)", price: "25 000" },
      { name: "Апарат Froggy Mouth", price: "3 000" },
      { name: "ALF-апарат", price: "8 000" },
      { name: "Активація ALF-апарату", price: "400" },
      { name: "Лабораторна корекція пластинки", price: "1 000" },
      { name: "Лікування елайнерами: 1 ступінь складності", price: "100 000" },
      { name: "Лікування елайнерами: 2 ступінь складності", price: "120 000" },
      { name: "Лікування елайнерами: 3 ступінь складності", price: "140 000" },
      { name: "Ремонт ALF-апарату", price: "800" },
      { name: "Зняття брекет-системи за межами клініки (2 щелепи)", price: "18 000" },
      { name: "Депрограмматор Койса", price: "2 500" },
      { name: "AQUA SPLINT", price: "3 500" },
      { name: "Апарат для утримання місця (розпірка)", price: "1 500" },
      { name: "Зняття атачментів", price: "600" },
      { name: "Ретейнер після лікування елайнерами", price: "3 000" },
      { name: "Ретенційна капа після елайнерів", price: "3 000" },
      { name: "Тимчасові накладки для підняття прикусу", price: "500" },
      { name: "Фіксація апарату після ремонту", price: "1 500" },
      { name: "Фіксація кнопки", price: "500" },
      { name: "Міофункціональний тренажер", price: "1 000" },
      { name: "Діагностика перед лікуванням на елайнерах", price: "4 000" },
      { name: "Керамічна лігатурна система (1 щелепа)", price: "16 000" },
      { name: "Металева лігатурна система (1 щелепа)", price: "18 000" },
      { name: "Металева самолігуюча Damon (США) (1 щелепа)", price: "25 000" },
      { name: "Керамічна самолігуюча Empowerx (США) (1 щелепа)", price: "33 000" },
    ],
  },
  {
    title: "Лазерна стоматологія",
    icon: "⚡",
    items: [
      { name: "Пластика ясни (1 зуб)", price: "400" },
      { name: "Пластика вуздечки", price: "1 500" },
      { name: "Стерилізація кореневого каналу", price: "300" },
      { name: "Відкриття ринованого зуба (з фіксацією брекета)", price: "2 500" },
      { name: "Відкриття атипово розміщеного зуба", price: "3 000" },
    ],
  },
  {
    title: "Дитяча стоматологія",
    icon: "👶",
    items: [
      { name: "«Адаптаційний прийом» (30 хв)", price: "400" },
      { name: "Герметизація фісур", price: "500" },
      { name: "Пломба: поверхневий карієс", price: "400" },
      { name: "Пломба: середній карієс", price: "600" },
      { name: "Пломба: глибокий карієс", price: "900" },
      { name: "Лікування ускладнень (пульпіт, періодонтит)", price: "800" },
      { name: "Комплексна дитяча професійна гігієна", price: "900" },
      { name: "Фторування зубів", price: "700" },
      { name: "Фторування одного зуба", price: "250" },
      { name: "Склоіномерна пломба", price: "500" },
      { name: "Видалення молочного зуба (просте)", price: "250" },
      { name: "Видалення молочного зуба (складне)", price: "400" },
    ],
  },
];

export default function PriceList({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredData = priceData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center sm:items-start justify-center p-2 sm:p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[calc(100vh-4rem)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-border px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <List size={20} className="text-accent-dark" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-text">Прайс-лист</h2>
                  <p className="text-xs sm:text-sm text-text-secondary">S.Dent</p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-warm hover:bg-warm-dark flex items-center justify-center transition-colors"
              >
                <X size={20} className="text-text-secondary" />
              </motion.button>
            </div>

            {/* Search */}
            <div className="px-4 sm:px-6 pt-4 pb-2 shrink-0">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light"
                />
                <input
                  type="text"
                  placeholder="Пошук послуги..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-border rounded-xl text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                />
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-4 sm:px-6 pb-6 flex-1 min-h-0">
              {filteredData.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-text-secondary text-lg">
                    Нічого не знайдено за запитом &laquo;{searchQuery}&raquo;
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  {filteredData.map((cat, catIndex) => {
                    const originalIndex = priceData.indexOf(cat);
                    const isOpen = openCategories.includes(originalIndex);
                    return (
                      <div
                        key={originalIndex}
                        className="rounded-2xl overflow-hidden border border-border/50"
                      >
                        <button
                          onClick={() => toggleCategory(originalIndex)}
                          className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-warm/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl">{cat.icon}</span>
                            <span className="font-semibold text-sm sm:text-base text-text group-hover:text-primary transition-colors text-left">
                              {cat.title}
                            </span>
                            <span className="text-xs text-text-light bg-warm px-2 py-0.5 rounded-full">
                              {cat.items.length}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                            className="w-8 h-8 rounded-full bg-warm flex items-center justify-center shrink-0 ml-3"
                          >
                            <ChevronDown size={16} className="text-text-secondary" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 sm:px-5 pb-4">
                                <div className="rounded-xl bg-warm/50 overflow-hidden">
                                  {cat.items.map((item, itemIndex) => (
                                    <div
                                      key={itemIndex}
                                      className={`flex items-baseline justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 ${
                                        itemIndex !== cat.items.length - 1
                                          ? "border-b border-border/30"
                                          : ""
                                      }`}
                                    >
                                      <span className="text-xs sm:text-sm text-text-secondary min-w-0">
                                        {item.name}
                                      </span>
                                      <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap shrink-0">
                                        {item.price} ₴
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-6 px-4 py-3 bg-warm rounded-xl">
                <p className="text-xs text-text-light leading-relaxed text-center">
                  Ціни вказані в гривнях (₴). Остаточна вартість визначається після
                  консультації та діагностики. Можливість оплати частинами.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
