import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingUpForm from "./components/sing-up";
import SingInForm from "./components/sing-in";

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SingInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
