import { useState, useRef } from "react";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Camera, Save } from "lucide-react";
import { toast } from "sonner";
import imgMembers from "@/assets/2d2d4de26d16019c939c7468d658dc71ae4fb8f0.png";

export function Profile() {
  const [preferences, setPreferences] = useState({
    emailNotifications: false,
    pushNotifications: false,
    darkMode: false,
  });
  const [profileData, setProfileData] = useState({
    name: "Lucas Marte",
    email: "lucasmarte@gmail.com",
    phone: "+55 (11) 98765-4321",
    birthdate: "1990-01-15",
    avatar: imgMembers,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    // TODO: Integrate with Supabase to save profile data
    toast.success("Perfil atualizado com sucesso!");
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, avatar: reader.result as string });
        toast.success("Foto atualizada com sucesso!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTogglePreference = (key: keyof typeof preferences) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
    toast.success(`${key === "emailNotifications" ? "Notificações por e-mail" : key === "pushNotifications" ? "Notificações push" : "Modo escuro"} ${!preferences[key] ? "ativadas" : "desativadas"}`);
  };
  return (
    <Layout
      title="Perfil"
      showSearch={false}
      showDatePicker={false}
      actionButton={
        <Button
          onClick={handleSave}
          className="bg-[#080b12] hover:bg-[#080b12]/90 text-white rounded-[100px] px-[16px] py-[12px] gap-[8px] w-full sm:w-auto shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <Save className="size-[16px] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-semibold text-[16px] sm:text-[18px]">Salvar alterações</span>
        </Button>
      }
    >
      <div className="space-y-[20px] sm:space-y-[24px]">
        {/* Profile Header */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[24px]">
            {/* Avatar */}
            <div className="relative">
              <img
                src={profileData.avatar}
                alt="User"
                className="size-[80px] sm:size-[100px] rounded-full border-4 border-[#E5E7EB] transition-all duration-300 hover:border-[#2a89ef] object-cover"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                className="absolute bottom-0 right-0 bg-[#080b12] text-white rounded-full p-[8px] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#2a89ef] active:scale-95"
                aria-label="Alterar foto"
                onClick={handleCameraClick}
              >
                <Camera className="size-[16px]" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[#080b12] mb-[4px]">
                {profileData.name}
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#6B7280] mb-[16px]">
                {profileData.email}
              </p>
              <div className="flex flex-wrap gap-[16px]">
                <div>
                  <p className="text-[12px] text-[#6B7280] mb-[4px]">Membro desde</p>
                  <p className="text-[14px] font-semibold text-[#080b12]">Jan 2024</p>
                </div>
                <div>
                  <p className="text-[12px] text-[#6B7280] mb-[4px]">ID do usuário</p>
                  <p className="text-[14px] font-semibold text-[#080b12]">#123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4 delay-75">
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#080b12] mb-[24px]">
            Informações pessoais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="space-y-[8px]">
              <Label htmlFor="name" className="text-[14px] font-semibold text-[#080b12]">
                Nome completo
              </Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
              />
            </div>
            <div className="space-y-[8px]">
              <Label htmlFor="email" className="text-[14px] font-semibold text-[#080b12]">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
              />
            </div>
            <div className="space-y-[8px]">
              <Label htmlFor="phone" className="text-[14px] font-semibold text-[#080b12]">
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
              />
            </div>
            <div className="space-y-[8px]">
              <Label htmlFor="birthdate" className="text-[14px] font-semibold text-[#080b12]">
                Data de nascimento
              </Label>
              <Input
                id="birthdate"
                type="date"
                value={profileData.birthdate}
                onChange={(e) => setProfileData({ ...profileData, birthdate: e.target.value })}
                className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4 delay-150">
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#080b12] mb-[24px]">
            Segurança
          </h3>
          <div className="space-y-[20px]">
            <div className="space-y-[8px]">
              <Label htmlFor="current-password" className="text-[14px] font-semibold text-[#080b12]">
                Senha atual
              </Label>
              <Input
                id="current-password"
                type="password"
                placeholder="Digite sua senha atual"
                className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              <div className="space-y-[8px]">
                <Label htmlFor="new-password" className="text-[14px] font-semibold text-[#080b12]">
                  Nova senha
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Digite a nova senha"
                  className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
                />
              </div>
              <div className="space-y-[8px]">
                <Label
                  htmlFor="confirm-password"
                  className="text-[14px] font-semibold text-[#080b12]"
                >
                  Confirmar senha
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirme a nova senha"
                  className="border-[#9CA3AF] rounded-[8px] transition-all duration-300 focus:border-[#2a89ef] focus:ring-2 focus:ring-[#2a89ef]/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4 delay-300">
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#080b12] mb-[24px]">
            Preferências
          </h3>
          <div className="space-y-[20px]">
            <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB] last:border-0">
              <div>
                <p className="text-[14px] font-semibold text-[#080b12]">Notificações por e-mail</p>
                <p className="text-[12px] text-[#6B7280]">Receba atualizações importantes</p>
              </div>
              <Button 
                variant={preferences.emailNotifications ? "default" : "outline"} 
                size="sm" 
                className="transition-all duration-300 hover:scale-110 active:scale-95"
                onClick={() => handleTogglePreference("emailNotifications")}
              >
                {preferences.emailNotifications ? "Ativo" : "Ativar"}
              </Button>
            </div>
            <div className="flex items-center justify-between py-[12px] border-b border-[#E5E7EB] last:border-0">
              <div>
                <p className="text-[14px] font-semibold text-[#080b12]">Notificações push</p>
                <p className="text-[12px] text-[#6B7280]">Receba notificações no dispositivo</p>
              </div>
              <Button 
                variant={preferences.pushNotifications ? "default" : "outline"} 
                size="sm" 
                className="transition-all duration-300 hover:scale-110 active:scale-95"
                onClick={() => handleTogglePreference("pushNotifications")}
              >
                {preferences.pushNotifications ? "Ativo" : "Ativar"}
              </Button>
            </div>
            <div className="flex items-center justify-between py-[12px]">
              <div>
                <p className="text-[14px] font-semibold text-[#080b12]">Modo escuro</p>
                <p className="text-[12px] text-[#6B7280]">Ative o tema escuro</p>
              </div>
              <Button 
                variant={preferences.darkMode ? "default" : "outline"} 
                size="sm" 
                className="transition-all duration-300 hover:scale-110 active:scale-95"
                onClick={() => handleTogglePreference("darkMode")}
              >
                {preferences.darkMode ? "Ativo" : "Ativar"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
