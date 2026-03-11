export default function Index() {
  const workshops = [
    {
      num: "01",
      title: "Как повысить ЗП на 30% без переработок и смены компании",
      items: [
        "Как мыслит руководитель",
        "Когда говорить о повышении",
        "Как часто можно менять работу",
        "Какие есть стратегии переговоров о повышении",
        "Запись отработки навыков переговоров в парах",
      ],
    },
    {
      num: "02",
      title: "Границы на работе. Как не дать себя прогибать и научиться отказывать без грубости",
      items: [
        "Что такое просьба и приказ, формула отказа на просьбу и на приказ",
        "Как правильно отказывать коллегам, смежникам и начальству",
        "Запись отработки навыков экологичных отказов",
        "Разбор ошибок: чего нельзя делать в процессе отказа",
      ],
    },
    {
      num: "03",
      title: "Как проводить 1-на-1 с руководителем",
      items: [
        "Стратегии подготовки к 1-на-1",
        "Как перехватить управление встречей, чтобы она шла на пользу карьере",
        "Запись отработки навыков проведения 1-на-1",
      ],
    },
  ];

  const tariffs = [
    {
      label: "БАЗОВЫЙ",
      title: "Только запись воркшопа «Как проводить 1-на-1 с руководителем»",
      features: [
        "Видео с воркшопом",
        "Доступ к чату с вопросами, ответами и разборами ДЗ",
        "ДЗ и её разбор в чате",
      ],
      oldPrice: null,
      price: "2 990 ₽",
      highlight: false,
      url: "https://algo-base.ru/buy-intensive-03-2026",
    },
    {
      label: "ВСЁ ВКЛЮЧЕНО",
      title: "Запись трёх воркшопов",
      features: [
        "3 видео с воркшопами",
        "Доступ к 3 чатам с вопросами, ответами и разборами ДЗ",
        "3 ДЗ и их разбор в чатах",
      ],
      oldPrice: "10 970 ₽",
      price: "3 990 ₽",
      highlight: true,
      url: "https://algo-base.ru/three_workshops",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ВЫШЕ ВИЛКИ
          </a>
          <div className="flex space-x-8">
            <a href="#workshops" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Программа
            </a>
            <a href="#tariffs" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Тарифы
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="inline-block bg-red-600 text-white text-sm uppercase tracking-widest px-3 py-1 mb-6">
              3 воркшопа по цене одного
            </div>
            <h1 className="font-bold tracking-tighter leading-none mb-6">
              <span className="block text-6xl md:text-8xl">ЗАПИСИ</span>
              <span className="block text-4xl md:text-6xl">ВОРКШОПОВ</span>
            </h1>
            <p className="text-xl max-w-xl mb-10">
              Для IT-специалистов, которые хотят развивать карьеру — без смены работы и переработок.
            </p>
            <div className="flex items-end gap-6 flex-wrap">
              <div>
                <span className="text-neutral-400 line-through text-xl block mb-1">10 970 ₽</span>
                <span className="text-5xl font-bold tracking-tighter">3 990 ₽</span>
              </div>
              <a
                href="#tariffs"
                className="bg-black text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-red-600 transition-colors duration-300"
              >
                Купить
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-end justify-start p-8">
              <div className="text-white">
                <div className="text-7xl font-bold tracking-tighter leading-none">×3</div>
                <div className="text-sm uppercase tracking-widest mt-2">воркшопа в пакете</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">ЧТО ВХОДИТ</h2>
          <p className="text-neutral-400 uppercase tracking-widest text-sm mb-16">В ПАКЕТ ИЗ ТРЁХ ВОРКШОПОВ</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((w) => (
              <div key={w.num} className="group border border-neutral-800 p-8 hover:border-red-600 transition-colors duration-300">
                <div className="text-red-600 text-6xl font-bold tracking-tighter mb-6">{w.num}</div>
                <h3 className="text-lg font-bold mb-6 leading-snug">«{w.title}»</h3>
                <ul className="space-y-3">
                  {w.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                      <span className="text-red-600 mt-0.5 shrink-0">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">ТАРИФЫ</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-sm mb-16">Выберите подходящий вариант</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {tariffs.map((t) => (
              <div
                key={t.label}
                className={`relative p-8 border-2 flex flex-col ${
                  t.highlight ? "border-black bg-black text-white" : "border-black bg-white text-black"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-4 left-8 bg-red-600 text-white text-xs uppercase tracking-widest px-3 py-1">
                    Выгоднее всего
                  </div>
                )}
                <div className={`text-xs uppercase tracking-widest mb-4 ${t.highlight ? "text-red-500" : "text-red-600"}`}>
                  {t.label}
                </div>
                <h3 className="text-base font-bold mb-6 leading-snug flex-1">{t.title}</h3>
                <ul className="space-y-3 mb-8">
                  {t.features.map((f, i) => (
                    <li key={i} className={`flex gap-3 text-sm leading-relaxed ${t.highlight ? "text-neutral-300" : "text-neutral-600"}`}>
                      <span className="text-red-600 shrink-0 mt-0.5">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  {t.oldPrice && (
                    <span className={`line-through text-base block mb-1 ${t.highlight ? "text-neutral-500" : "text-neutral-400"}`}>
                      {t.oldPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold tracking-tighter">{t.price}</span>
                </div>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-sm uppercase tracking-widest font-bold transition-colors duration-300 text-center block ${
                    t.highlight
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-black text-white hover:bg-red-600"
                  }`}
                >
                  Купить
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-xl font-bold tracking-tighter">ВЫШЕ ВИЛКИ</span>
        </div>
      </footer>
    </main>
  );
}