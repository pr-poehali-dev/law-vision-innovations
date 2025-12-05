import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContentSections = () => {
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
    <>
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
    </>
  );
};

export default ContentSections;
