import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  consultationType: string;
  setConsultationType: (value: string) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const HeroSection = ({ consultationType, setConsultationType, formData, setFormData, handleSubmit }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
