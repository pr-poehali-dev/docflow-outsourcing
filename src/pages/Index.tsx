import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const HERO_IMG = "https://cdn.poehali.dev/projects/b215399b-3706-42bd-9a94-77d12b7ebf8a/files/e30ae593-671d-4aa2-b589-c9ba48f8014b.jpg";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    contact: "",
    volume: "",
    comment: "",
    services: [] as string[],
  });

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-2xl font-bold tracking-tight">DocFlow</span>
          <nav className="hidden md:flex items-center gap-8">
            {[
              ["Услуги", "services"],
              ["Процесс", "process"],
              ["Тарифы", "pricing"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo("contact")}
              className="rounded-full px-6"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8">
                <Icon name="Sparkles" size={16} />
                Документооборот на аутсорсе
              </div>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-balance">
                Порядок в документах — без найма
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                Счета, акты, КП и договоры по вашим шаблонам. Реестр, контроль
                статусов, еженедельный отчёт.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollTo("contact")}
                  size="lg"
                  className="rounded-full px-8 text-base h-14"
                >
                  Рассчитать стоимость
                </Button>
                <Button
                  onClick={() => scrollTo("process")}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-base h-14"
                >
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50">
                {[
                  ["1–4 ч", "время ответа"],
                  ["от 15", "документов/мес"],
                  ["NDA", "по запросу"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold font-serif">{val}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/5 rounded-3xl -rotate-3" />
                <img
                  src={HERO_IMG}
                  alt="Документооборот"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
            {[
              "Работаем по договору",
              "ООО и ИП",
              "Облачное хранение",
              "ЭДО поддержка",
              "Еженедельные отчёты",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">Услуги</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 tracking-tight">
              Что мы берём на себя
            </h2>
            <p className="text-lg text-muted-foreground">
              Закрываем рутину документооборота — вы занимаетесь бизнесом.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "FileText", title: "Счета на оплату", desc: "Подготовка, отправка, контроль статуса" },
              { icon: "FileSpreadsheet", title: "КП и прайс-листы", desc: "Оформление по вашему брендбуку" },
              { icon: "FileCheck", title: "Договоры", desc: "Заполнение утверждённых шаблонов" },
              { icon: "FileBadge", title: "Акты и УПД", desc: "Закрывающие + передача на ЭДО" },
              { icon: "ListChecks", title: "Реестр документов", desc: "Статусы и напоминания" },
              { icon: "Archive", title: "Архив и порядок", desc: "Структурированные папки + поиск" },
            ].map((s, i) => (
              <Card
                key={i}
                className="group border border-border/50 bg-card hover:bg-secondary/5 transition-all duration-500 cursor-default"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-500">
                    <Icon name={s.icon as any} size={22} className="text-foreground/70 group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">Процесс</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 tracking-tight">
              Четыре шага к порядку
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Онбординг", desc: "Реквизиты, шаблоны, структура папок. 1 рабочий день.", icon: "UserPlus" },
              { num: "02", title: "Заявка", desc: "Отправляете данные — фиксируем сроки.", icon: "ClipboardList" },
              { num: "03", title: "Подготовка", desc: "Оформляем, согласовываем, отправляем.", icon: "PenTool" },
              { num: "04", title: "Контроль", desc: "Реестр, статусы, еженедельный отчёт.", icon: "BarChart3" },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-serif font-bold text-background/10 mb-4 group-hover:text-secondary/30 transition-colors duration-500">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center mb-4">
                  <Icon name={step.icon as any} size={20} className="text-background/60" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-background/10">
                    <Icon name="ArrowRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">Тарифы</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 tracking-tight">
              Прозрачные цены
            </h2>
            <p className="text-lg text-muted-foreground">
              Без скрытых доплат. Сверхлимит — по согласованному прайсу.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Старт",
                price: "12 000",
                features: ["До 15 документов/мес", "Реестр + статусы", "1 канал связи", "Ответ 1–4 ч"],
              },
              {
                name: "Бизнес",
                price: "25 000",
                features: ["До 40 документов/мес", "Контроль оплат", "Еженедельный отчёт", "Ответ 1–4 ч"],
                popular: true,
              },
              {
                name: "Полный",
                price: "45 000",
                features: ["До 80 документов/мес", "Приоритетная обработка", "ЭДО поддержка", "Регламент и архив"],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-500 ${
                  plan.popular
                    ? "bg-foreground text-background ring-1 ring-foreground scale-[1.02]"
                    : "bg-card border border-border/50 hover:border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 px-4 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                    Популярный
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm">от</span>
                    <span className="font-serif text-5xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-sm ml-1">₽/мес</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span className={plan.popular ? "text-background/80" : "text-muted-foreground"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollTo("contact")}
                  variant={plan.popular ? "secondary" : "outline"}
                  className="w-full rounded-full h-12"
                >
                  Выбрать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">Кейсы</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 tracking-tight">
              Результаты клиентов
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "B2B услуги",
                metric: "–70%",
                label: "времени на документы",
                quote: "Документы перестали теряться в переписках. Всё в одном реестре, ответ — за пару часов.",
              },
              {
                type: "Торговля",
                metric: "–40%",
                label: "просрочек по оплатам",
                quote: "Реестр с напоминаниями и еженедельные отчёты решили проблему потерянных УПД.",
              },
              {
                type: "Онлайн-проект",
                metric: "+40 ч",
                label: "свободных часов в месяц",
                quote: "Передали всю рутину на аутсорс — основатель наконец занялся стратегией.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-500"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{c.type}</span>
                <div className="font-serif text-6xl font-bold mt-4 mb-1 tracking-tight">{c.metric}</div>
                <div className="text-sm text-muted-foreground mb-6">{c.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{c.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-secondary uppercase tracking-widest">Безопасность</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 tracking-tight">
                Ваши данные под защитой
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Минимальные доступы, NDA по запросу, журнал всех операций.
              </p>
              <Button onClick={() => scrollTo("contact")} variant="outline" className="rounded-full px-8 h-12">
                Обсудить безопасность
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Lock", title: "Минимальные доступы" },
                { icon: "ShieldCheck", title: "2FA защита" },
                { icon: "FileSignature", title: "NDA по запросу" },
                { icon: "ClipboardCheck", title: "Журнал операций" },
                { icon: "FolderLock", title: "Раздельные папки" },
                { icon: "EyeOff", title: "Обезличенные примеры" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                  <Icon name={item.icon as any} size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">FAQ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 tracking-tight">
              Частые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              ["Что именно вы делаете?", "Готовим счета, КП, договоры, акты/УПД по вашим шаблонам, ведём реестр, контролируем статусы. Не заменяем бухгалтера и юриста."],
              ["Как быстро можно начать?", "Онбординг — 1 рабочий день. Собираем реквизиты, шаблоны, настраиваем папки и реестр."],
              ["Какие сроки исполнения?", "Стандартные заявки — 1–4 часа в рабочее время. Срочные — менее 1 часа за доплату."],
              ["Как отправляете документы?", "Почта, мессенджеры или через ваше ЭДО (если подключено)."],
              ["Где хранятся документы?", "В облачных папках с доступом для вас. Возможна интеграция с вашей системой."],
              ["Можно разовую услугу?", "Да, по индивидуальному прайсу. Обычно выгоднее при объёме 5+ документов в месяц."],
              ["Что если превышен лимит?", "Оплата сверхлимитных документов по согласованному прайсу или переход на больший тариф."],
              ["Договор и NDA?", "Работаем по договору оказания услуг. NDA — по запросу."],
            ].map(([q, a], i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-medium text-secondary uppercase tracking-widest">Контакт</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 tracking-tight">
                Наведём порядок вместе
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md">
                Ответим в течение рабочего дня, подберём тариф под ваш объём.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Консультация по процессу и срокам",
                  "Расчёт стоимости под ваш объём",
                  "План онбординга",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-secondary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <a href="https://t.me/" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
                <a href="https://wa.me/" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
                <a href="mailto:info@docflow.ru" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Mail" size={18} />
                  info@docflow.ru
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10">
              <h3 className="text-xl font-semibold mb-6">Заявка на расчёт</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Submit:", form);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван"
                      className="rounded-xl h-12 bg-muted/30"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm">Форма (ООО/ИП)</Label>
                    <Input
                      id="company"
                      placeholder="ООО"
                      className="rounded-xl h-12 bg-muted/30"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-sm">Телефон или Telegram</Label>
                    <Input
                      id="contact"
                      placeholder="+7 900 123-45-67"
                      className="rounded-xl h-12 bg-muted/30"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume" className="text-sm">Документов в месяц</Label>
                    <Input
                      id="volume"
                      placeholder="~20"
                      className="rounded-xl h-12 bg-muted/30"
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-sm">Интересуют:</Label>
                  <div className="flex flex-wrap gap-3">
                    {["Счета", "КП", "Договоры", "Акты/УПД", "Реестр", "Контроль"].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggleService(s)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${
                          form.services.includes(s)
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-foreground border-border hover:border-foreground/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-sm">Комментарий</Label>
                  <Textarea
                    id="comment"
                    placeholder="Особенности или вопросы..."
                    className="rounded-xl bg-muted/30 min-h-[80px]"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="consent" required className="mt-1" />
                  <Label htmlFor="consent" className="text-xs text-muted-foreground cursor-pointer leading-normal">
                    Согласен на обработку персональных данных
                  </Label>
                </div>
                <Button type="submit" className="w-full rounded-full h-13 text-base">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <span className="font-serif text-2xl font-bold">DocFlow</span>
              <p className="text-sm text-muted-foreground mt-3">
                Документооборот для микробизнеса на аутсорсе
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Навигация</h4>
              <div className="space-y-3">
                {[["Услуги", "services"], ["Процесс", "process"], ["Тарифы", "pricing"], ["FAQ", "faq"]].map(([l, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <a href="https://t.me/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Send" size={14} /> Telegram
                </a>
                <a href="https://wa.me/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="MessageCircle" size={14} /> WhatsApp
                </a>
                <a href="mailto:info@docflow.ru" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Mail" size={14} /> info@docflow.ru
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Документы</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">Политика конфиденциальности</a>
                <a href="#" className="block hover:text-foreground transition-colors">Условия оказания услуг</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
            © 2024 DocFlow. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
