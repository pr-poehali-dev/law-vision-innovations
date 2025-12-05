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
      description: 'Юридическое сопровождение бизнеса на всех этапах развития'
    },
    {
      icon: 'Scale',
      title: 'Судебная защита',
      description: 'Представительство интересов в арбитражных и общих судах'
    },
    {
      icon: 'FileCheck',
      title: 'Договорная работа',
      description: 'Разработка и экспертиза коммерческих договоров'
    },
    {
      icon: 'Shield',
      title: 'Защита интеллектуальной собственности',
      description: 'Регистрация и защита прав на товарные знаки и патенты'
    },
    {
      icon: 'Briefcase',
      title: 'M&A сделки',
      description: 'Сопровождение слияний, поглощений и реорганизаций'
    },
    {
      icon: 'Users',
      title: 'Трудовое право',
      description: 'Решение кадровых вопросов и трудовых споров'
    }
  ];

  const cases = [
    {
      title: 'Защита IT-стартапа',
      result: '₽50M выигранный спор',
      description: 'Успешно защитили права на программное обеспечение в споре с крупной корпорацией'
    },
    {
      title: 'M&A сделка',
      result: '₽2B сделка',
      description: 'Провели юридическое сопровождение сделки по слиянию двух технологических компаний'
    },
    {
      title: 'Корпоративный конфликт',
      result: '100% решение',
      description: 'Урегулировали корпоративный конфликт между акционерами без судебного разбирательства'
    }
  ];

  const team = [
    {
      name: 'Анна Соколова',
      position: 'Управляющий партнер',
      experience: '15 лет опыта'
    },
    {
      name: 'Дмитрий Петров',
      position: 'Партнер, M&A практика',
      experience: '12 лет опыта'
    },
    {
      name: 'Елена Волкова',
      position: 'Партнер, судебная практика',
      experience: '14 лет опыта'
    },
    {
      name: 'Максим Орлов',
      position: 'Старший юрист, IP',
      experience: '8 лет опыта'
    }
  ];

  const blogPosts = [
    {
      title: 'Новые правила корпоративного управления 2024',
      date: '15 ноября 2024',
      category: 'Корпоративное право'
    },
    {
      title: 'Защита данных: что нужно знать бизнесу',
      date: '10 ноября 2024',
      category: 'IT-право'
    },
    {
      title: 'Тренды M&A рынка в условиях цифровизации',
      date: '5 ноября 2024',
      category: 'M&A'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Icon name="Scale" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                LawVision
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">О компании</a>
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#cases" className="text-foreground/70 hover:text-primary transition-colors font-medium">Кейсы</a>
              <a href="#team" className="text-foreground/70 hover:text-primary transition-colors font-medium">Команда</a>
              <a href="#blog" className="text-foreground/70 hover:text-primary transition-colors font-medium">Блог</a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
                  Консультация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Выберите тип консультации и оставьте свои контактные данные
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Тип консультации</Label>
                    <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free" className="font-normal cursor-pointer">
                          Бесплатная консультация (30 минут)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paid" id="paid" />
                        <Label htmlFor="paid" className="font-normal cursor-pointer">
                          Платная консультация (60 минут, ₽5000)
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
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание вопроса</Label>
                    <Textarea
                      id="message"
                      placeholder="Кратко опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20 shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Юридические решения нового поколения</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Защита бизнеса в эпоху{' '}
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    цифровых трансформаций
                  </span>
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  LawVision — это юридическая компания, которая сочетает многолетний опыт с инновационными технологиями. 
                  Мы создаем правовые стратегии, которые не только защищают, но и ускоряют рост вашего бизнеса.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 text-lg px-8">
                        Получить консультацию
                      </Button>
                    </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Запись на консультацию</DialogTitle>
                    <DialogDescription>
                      Выберите тип консультации и оставьте свои контактные данные
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Тип консультации</Label>
                      <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="free" id="free-hero" />
                          <Label htmlFor="free-hero" className="font-normal cursor-pointer">
                            Бесплатная консультация (30 минут)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paid" id="paid-hero" />
                          <Label htmlFor="paid-hero" className="font-normal cursor-pointer">
                            Платная консультация (60 минут, ₽5000)
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
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message-hero">Описание вопроса</Label>
                      <Textarea
                        id="message-hero"
                        placeholder="Кратко опишите вашу ситуацию"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-secondary">
                    <a href="#services">Наши услуги</a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">15+</div>
                    <div className="text-sm text-foreground/60">лет опыта</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm text-foreground/60">клиентов</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">95%</div>
                    <div className="text-sm text-foreground/60">побед</div>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-6">
                    <Icon name="Scale" size={64} className="text-primary" />
                  </div>
                  <div className="absolute bottom-12 left-8 w-40 h-40 bg-white rounded-2xl shadow-xl p-6 transform -rotate-3">
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/20 rounded"></div>
                      <div className="h-3 bg-accent/20 rounded w-3/4"></div>
                      <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-foreground/70">
              LawVision была основана в 2009 году группой юристов, объединенных общим видением: 
              использовать технологии для предоставления более эффективных юридических услуг.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-white hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Сделать качественные юридические услуги доступными и понятными для каждого бизнеса, 
                  независимо от его размера
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-white hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <Icon name="Eye" size={24} className="text-white" />
                </div>
                <CardTitle>Наше видение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Стать лидером в области инновационных юридических решений, 
                  устанавливая новые стандарты качества и эффективности
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-white hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <CardTitle>Наши ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Профессионализм, честность, инновации и персональный подход к каждому клиенту
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-lg text-foreground/70">
              Комплексное юридическое сопровождение для бизнеса любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border bg-white hover:border-primary transition-all hover:scale-105 hover:shadow-2xl group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши кейсы</h2>
            <p className="text-lg text-foreground/70">
              Примеры успешно реализованных проектов и решенных задач
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-border bg-white hover:border-primary transition-all hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">{caseItem.result}</div>
                  <CardTitle>{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наша команда</h2>
            <p className="text-lg text-foreground/70">
              Опытные юристы с подтвержденной экспертизой в различных областях права
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border bg-white hover:border-primary transition-all hover:scale-105 hover:shadow-2xl text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Блог</h2>
            <p className="text-lg text-foreground/70">
              Актуальные материалы о праве, бизнесе и технологиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-border bg-white hover:border-primary transition-all hover:scale-105 hover:shadow-2xl cursor-pointer">
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-secondary text-primary text-sm font-medium rounded-full mb-3">{post.category}</div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h2>
              <p className="text-lg text-foreground/70">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="border-border bg-white hover:border-primary/50 transition-all">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-foreground/70">г. Москва, ул. Тверская, д. 15, офис 501</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-foreground/70">+7 (495) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-foreground/70">info@lawvision.ru</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-foreground/70">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="border-border bg-white shadow-xl">
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
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
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Icon name="Scale" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                LawVision
              </span>
            </div>
            <p className="text-foreground/60 text-sm">
              © 2024 LawVision. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
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