import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [consultationType, setConsultationType] = useState('free');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'Полное юридическое сопровождение от регистрации до реорганизации'
    },
    {
      icon: 'Gavel',
      title: 'Судебная практика',
      description: 'Защита интересов в судах всех инстанций'
    },
    {
      icon: 'FileText',
      title: 'Договоры',
      description: 'Разработка и проверка любых договоров'
    },
    {
      icon: 'Shield',
      title: 'IP & Патенты',
      description: 'Защита интеллектуальной собственности'
    },
    {
      icon: 'TrendingUp',
      title: 'M&A',
      description: 'Сделки слияния и поглощения'
    },
    {
      icon: 'Users',
      title: 'Трудовое право',
      description: 'Кадровые вопросы и споры'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Icon name="Scale" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">LawVision</div>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase">Legal Solutions</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">О нас</a>
              <a href="#services" className="text-sm text-slate-300 hover:text-white transition-colors">Услуги</a>
              <a href="#cases" className="text-sm text-slate-300 hover:text-white transition-colors">Кейсы</a>
              <a href="#team" className="text-sm text-slate-300 hover:text-white transition-colors">Команда</a>
              <a href="#blog" className="text-sm text-slate-300 hover:text-white transition-colors">Блог</a>
              <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Контакты</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 border-0">
                  Консультация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                <DialogHeader>
                  <DialogTitle>Запись на консультацию</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Выберите тип консультации и оставьте контакты
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Тип консультации</Label>
                    <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free" className="font-normal cursor-pointer">
                          Бесплатная (30 минут)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paid" id="paid" />
                        <Label htmlFor="paid" className="font-normal cursor-pointer">
                          Платная (60 минут, ₽5000)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-800 border-slate-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800 border-slate-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-800 border-slate-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-800 border-slate-700"
                      rows={3}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">Юридические решения нового поколения</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Право.<br/>
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Технологии.
              </span><br/>
              Победа.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Защищаем бизнес с 2009 года. Используем ИИ и аналитику для построения непробиваемых правовых стратегий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-lg px-8 h-14">
                    Получить консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-slate-900 border-slate-800 text-white">
                  <DialogHeader>
                    <DialogTitle>Запись на консультацию</DialogTitle>
                    <DialogDescription className="text-slate-400">
                      Выберите тип консультации и оставьте контакты
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Тип консультации</Label>
                      <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="free" id="free-hero" />
                          <Label htmlFor="free-hero" className="font-normal cursor-pointer">
                            Бесплатная (30 минут)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paid" id="paid-hero" />
                          <Label htmlFor="paid-hero" className="font-normal cursor-pointer">
                            Платная (60 минут, ₽5000)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name-hero">Имя</Label>
                      <Input
                        id="name-hero"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-hero">Email</Label>
                      <Input
                        id="email-hero"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-hero">Телефон</Label>
                      <Input
                        id="phone-hero"
                        type="tel"
                        placeholder="+7 (999) 999-99-99"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message-hero">Описание</Label>
                      <Textarea
                        id="message-hero"
                        placeholder="Опишите вашу ситуацию"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-transparent border-slate-700 hover:bg-slate-800 hover:text-white">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-slate-500 mt-1">лет опыта</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-slate-500 mt-1">клиентов</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-slate-500 mt-1">побед</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black mb-6">О компании</h2>
            <p className="text-lg text-slate-400">
              Основаны в 2009 году. Объединяем опыт юристов с технологиями для максимальной эффективности.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Target" size={28} className="text-white" />
                </div>
                <CardTitle className="text-white">Миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Качественные юридические услуги для любого бизнеса
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-white" />
                </div>
                <CardTitle className="text-white">Видение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Лидер инновационных правовых решений
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Award" size={28} className="text-white" />
                </div>
                <CardTitle className="text-white">Ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Профессионализм, честность, инновации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Услуги</h2>
            <p className="text-lg text-slate-400">
              Комплексное юридическое сопровождение
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-slate-900/50 border-slate-800 hover:border-violet-500/50 transition-all group cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-cyan-600 rounded-2xl flex items-center justify-center mb-4 transition-all">
                    <Icon name={service.icon} size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Кейсы</h2>
            <p className="text-lg text-slate-400">
              Примеры успешных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all">
              <CardHeader>
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">₽50M</div>
                <CardTitle className="text-white">IT-стартап</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Защита ПО в споре с корпорацией</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all">
              <CardHeader>
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">₽2B</div>
                <CardTitle className="text-white">M&A сделка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Слияние двух tech-компаний</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all">
              <CardHeader>
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">100%</div>
                <CardTitle className="text-white">Конфликт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">Урегулирование без суда</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Команда</h2>
            <p className="text-lg text-slate-400">
              Опытные юристы-эксперты
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-800 hover:border-violet-500/50 transition-all text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <CardTitle className="text-white text-base">Анна Соколова</CardTitle>
                <CardDescription className="text-slate-500 text-xs">Управляющий партнер</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-xs">15 лет опыта</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-violet-500/50 transition-all text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <CardTitle className="text-white text-base">Дмитрий Петров</CardTitle>
                <CardDescription className="text-slate-500 text-xs">Партнер, M&A</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-xs">12 лет опыта</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-violet-500/50 transition-all text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <CardTitle className="text-white text-base">Елена Волкова</CardTitle>
                <CardDescription className="text-slate-500 text-xs">Партнер, суды</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-xs">14 лет опыта</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-violet-500/50 transition-all text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <CardTitle className="text-white text-base">Максим Орлов</CardTitle>
                <CardDescription className="text-slate-500 text-xs">Старший юрист, IP</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-xs">8 лет опыта</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Блог</h2>
            <p className="text-lg text-slate-400">
              Актуальные материалы о праве и бизнесе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-violet-600/20 text-violet-400 text-xs font-medium rounded-full mb-3">Корпоративное право</div>
                <CardTitle className="text-white text-base leading-tight">Новые правила управления 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Icon name="Calendar" size={14} />
                  <span>15 ноября 2024</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-400 text-xs font-medium rounded-full mb-3">IT-право</div>
                <CardTitle className="text-white text-base leading-tight">Защита данных: что нужно знать</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Icon name="Calendar" size={14} />
                  <span>10 ноября 2024</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-violet-600/20 text-violet-400 text-xs font-medium rounded-full mb-3">M&A</div>
                <CardTitle className="text-white text-base leading-tight">Тренды M&A в цифровизации</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Icon name="Calendar" size={14} />
                  <span>5 ноября 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6">Контакты</h2>
              <p className="text-lg text-slate-400">
                Свяжитесь с нами
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Адрес</h3>
                      <p className="text-slate-400 text-sm">г. Москва, ул. Тверская, д. 15, офис 501</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Телефон</h3>
                      <p className="text-slate-400 text-sm">+7 (495) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-white">Email</h3>
                      <p className="text-slate-400 text-sm">info@lawvision.ru</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Напишите нам</CardTitle>
                  <CardDescription className="text-slate-400">Ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input
                        id="contact-name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Сообщение</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-800 border-slate-700"
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Icon name="Scale" size={22} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">LawVision</div>
                <div className="text-[9px] text-slate-500 tracking-widest uppercase">Legal Solutions</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 LawVision. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-violet-400 transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-violet-400 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
