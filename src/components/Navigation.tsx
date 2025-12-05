import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

interface NavigationProps {
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

const Navigation = ({ consultationType, setConsultationType, formData, setFormData, handleSubmit }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;
