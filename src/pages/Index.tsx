import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyType: "",
    contact: "",
    volume: "",
    comment: "",
    services: [] as string[],
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-gray-900">DocFlow</h1>
              <nav className="hidden md:flex gap-6">
                <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  Цены
                </button>
                <button onClick={() => scrollToSection("process")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  Процесс
                </button>
                <button onClick={() => scrollToSection("cases")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  Кейсы
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  Контакты
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="shadow-md hover:shadow-lg transition-all">
                Рассчитать стоимость
              </Button>
              <Button onClick={() => window.open("https://t.me/", "_blank")} variant="outline" size="lg" className="gap-2">
                <Icon name="Send" size={18} />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Документооборот для микробизнеса под ключ
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Счета, акты/УПД, КП и договоры по согласованным шаблонам. Ведём реестр, контролируем статусы оплат и подписаний.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-start gap-3 text-left">
                <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Без хаоса в чатах</p>
                  <p className="text-sm text-gray-600">и "потерянных" актов</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Icon name="Clock" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Ответ за 1–4 часа</p>
                  <p className="text-sm text-gray-600">в рабочее время</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Icon name="FolderCheck" size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Порядок в папках</p>
                  <p className="text-sm text-gray-600">+ еженедельный отчёт</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                ✅ Рассчитать стоимость
              </Button>
              <Button onClick={() => window.open("https://t.me/", "_blank")} variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-all">
                💬 Написать в Telegram
              </Button>
            </div>
            <p className="text-sm text-gray-500">Работаем с ООО и ИП по договору. NDA по запросу.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что мы делаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Закрываем документооборот по вашим шаблонам и держим всё в порядке.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "FileText", title: "Счета на оплату", desc: "Подготовка и отправка по реквизитам и шаблону" },
              { icon: "FileSpreadsheet", title: "КП и прайс-листы", desc: "Оформление предложения для ускорения решения" },
              { icon: "FileCheck", title: "Договоры по шаблону", desc: "Заполнение и унификация утверждённых форм" },
              { icon: "FileBadge", title: "Акты / УПД", desc: "Закрывающие документы, передача на подпись/ЭДО" },
              { icon: "ListChecks", title: "Реестр и статусы", desc: "Выставлено/оплачено/подписано/просрочено" },
              { icon: "Archive", title: "Архив и порядок", desc: "Структура папок + быстрый поиск" },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="shadow-lg hover:shadow-xl transition-all">
              Подобрать тариф
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой процесс без лишней переписки — всё фиксируем в реестре.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { step: "1", title: "Онбординг (1 день)", desc: "Реквизиты, шаблоны, правила, папки и реестр", icon: "UserPlus" },
                { step: "2", title: "Заявка на документ", desc: "Данные по форме, подтверждение сроков", icon: "ClipboardList" },
                { step: "3", title: "Подготовка и отправка", desc: "Согласование, отправка почта/ЭДО", icon: "Send" },
                { step: "4", title: "Контроль и отчёт", desc: "Статусы, еженедельный отчёт", icon: "BarChart3" },
              ].map((item, idx) => (
                <div key={idx} className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex items-start gap-4 ml-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                <strong>SLA:</strong> обычные заявки — в рабочее время, срочные — по доплате.
              </p>
            </div>
            <div className="text-center">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы и стоимость</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачные лимиты и понятные сроки. Без "бесконечных правок".
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {[
              {
                name: "Старт",
                price: "от 12 000 ₽/мес",
                features: ["До 15 документов/мес", "Реестр + статусы", "1 канал связи", "Ответ 1–4 часа"],
              },
              {
                name: "Операционный",
                price: "от 25 000 ₽/мес",
                features: ["До 40 документов/мес", "Контроль оплат/подписаний", "Еженедельный отчёт", "Ответ 1–4 часа"],
                popular: true,
              },
              {
                name: "Под ключ",
                price: "от 45 000 ₽/мес",
                features: ["До 80 документов/мес", "Приоритет", "ЭДО (если у клиента)", "Регламент и архив"],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  plan.popular ? "border-primary border-2 shadow-2xl scale-105" : "border-gray-200"
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => scrollToSection("contact")} className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Сверхлимит:</strong> документы сверх лимита оплачиваются отдельно по согласованному прайсу.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Срочность:</strong> срочные заявки (менее 1 часа) — по доплате.
            </p>
            <p className="text-sm text-gray-600">
              <strong>NDA:</strong> по запросу предоставляем соглашение о неразглашении.
            </p>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Кейсы: как мы наводим порядок</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "B2B услуги",
                before: "Документы терялись в переписке, клиенты жаловались на задержки",
                after: "Все счета и акты в реестре, срок ответа — до 2 часов",
                result: "Клиент сократил время на документооборот на 70%",
              },
              {
                title: "Торговля",
                before: "Хаос с УПД, постоянные вопросы о статусах оплат",
                after: "Реестр с автоматическими напоминаниями, еженедельные отчёты",
                result: "Снижение просрочек по оплатам на 40%",
              },
              {
                title: "Онлайн-проект",
                before: "Основатель тратил 10+ часов в неделю на документы",
                after: "Документооборот на аутсорсе, владелец вернулся к продукту",
                result: "Освобождено 40 часов в месяц для стратегии",
              },
            ].map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Было:</h4>
                    <p className="text-sm text-gray-600">{caseItem.before}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Сделали:</h4>
                    <p className="text-sm text-gray-600">{caseItem.after}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Стало:</h4>
                    <p className="text-sm text-gray-600">{caseItem.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="shadow-lg hover:shadow-xl transition-all">
              Хочу так же — рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Безопасность и NDA</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { icon: "Lock", title: "Минимальные доступы", desc: "Только необходимые права для работы" },
              { icon: "FolderLock", title: "Раздельные папки", desc: "Строгое разделение по проектам" },
              { icon: "ShieldCheck", title: "2FA защита", desc: "Двухфакторная аутентификация" },
              { icon: "FileSignature", title: "NDA", desc: "Соглашение о неразглашении" },
              { icon: "ClipboardCheck", title: "Регламент действий", desc: "Журнал всех операций" },
              { icon: "EyeOff", title: "Обезличивание", desc: "Примеры без реальных данных" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Обсудить процесс и безопасность
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Что именно вы делаете?",
                  a: "Готовим счета, КП, договоры, акты/УПД по вашим шаблонам, ведём реестр, контролируем статусы оплат и подписаний. Не заменяем бухгалтера и юриста.",
                },
                {
                  q: "Как быстро можно начать?",
                  a: "Онбординг занимает 1 рабочий день. Собираем реквизиты, шаблоны, настраиваем структуру папок и реестр.",
                },
                {
                  q: "Какие сроки исполнения заявок?",
                  a: "Стандартные заявки — 1–4 часа в рабочее время. Срочные — менее 1 часа за доплату.",
                },
                {
                  q: "Как отправляете документы?",
                  a: "Почта, мессенджеры, или через ваше ЭДО (если подключено).",
                },
                {
                  q: "Где хранятся документы?",
                  a: "В облачных папках (Google Drive / Яндекс.Диск) с доступом для вас. Возможна интеграция с вашей системой.",
                },
                {
                  q: "Как контролируете статусы?",
                  a: "Ведём реестр с полями: выставлено/оплачено/подписано/просрочено. Еженедельный отчёт на email.",
                },
                {
                  q: "Можно разовую услугу?",
                  a: "Да, по индивидуальному прайсу. Обычно это выгоднее при объёме 5+ документов в месяц.",
                },
                {
                  q: "Работаете с нестандартными формами?",
                  a: "Да, если формы согласованы. Сложные документы — с доплатой за настройку.",
                },
                {
                  q: "Что если превышен лимит?",
                  a: "Оплата сверхлимитных документов по согласованному прайсу или переход на больший тариф.",
                },
                {
                  q: "Договор и NDA?",
                  a: "Работаем по договору оказания услуг. NDA предоставляем по запросу.",
                },
                {
                  q: "Как начать работу?",
                  a: "Заполните заявку на сайте или напишите в Telegram. Обсудим объём, подберём тариф, запустим онбординг.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Давайте наведём порядок в документах</h2>
            <p className="text-xl text-gray-600">Ответим в течение рабочего дня и подберём тариф под ваш объём.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Что вы получите:</h3>
                <ul className="space-y-3">
                  {[
                    "Консультацию по процессу и срокам",
                    "Расчёт стоимости под ваш объём",
                    "План онбординга и старта работ",
                    "Ответы на все вопросы",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-900 mb-4">Свяжитесь с нами:</h4>
                <div className="space-y-3">
                  <a href="https://t.me/" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Send" size={20} />
                    <span>Telegram</span>
                  </a>
                  <a href="https://wa.me/" className="flex items-center gap-3 text-secondary hover:text-secondary/80 transition-colors">
                    <Icon name="MessageCircle" size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <a href="mailto:info@docflow.ru" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Icon name="Mail" size={20} />
                    <span>info@docflow.ru</span>
                  </a>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Заявка на расчёт</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyType">Форма организации</Label>
                    <Input
                      id="companyType"
                      placeholder="ООО / ИП"
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Телефон или Telegram</Label>
                    <Input
                      id="contact"
                      placeholder="+7 900 123-45-67 или @username"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="volume">Примерный объём документов в месяц</Label>
                    <Input
                      id="volume"
                      placeholder="например, 20-30"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="mb-3 block">Какие услуги интересуют:</Label>
                    <div className="space-y-2">
                      {["Счета", "КП", "Договоры", "Акты/УПД", "Реестр", "Контроль статусов"].map((service) => (
                        <div key={service} className="flex items-center gap-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({ ...formData, services: [...formData.services, service] });
                              } else {
                                setFormData({ ...formData, services: formData.services.filter((s) => s !== service) });
                              }
                            }}
                          />
                          <Label htmlFor={service} className="cursor-pointer">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий (необязательно)</Label>
                    <Textarea
                      id="comment"
                      placeholder="Особенности или вопросы..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" required />
                    <Label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                      Согласен на обработку персональных данных
                    </Label>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Рассчитать стоимость
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы принимаете{" "}
                    <a href="#" className="text-primary hover:underline">
                      политику конфиденциальности
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">DocFlow</h3>
              <p className="text-sm">Документооборот для микробизнеса под ключ</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">
                    Услуги
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                    Цены
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("process")} className="hover:text-primary transition-colors">
                    Процесс
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("cases")} className="hover:text-primary transition-colors">
                    Кейсы
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://t.me/" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Icon name="Send" size={16} />
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/" className="hover:text-secondary transition-colors flex items-center gap-2">
                    <Icon name="MessageCircle" size={16} />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:info@docflow.ru" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    info@docflow.ru
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Согласие на обработку ПДн
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Условия оказания услуг
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 DocFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;