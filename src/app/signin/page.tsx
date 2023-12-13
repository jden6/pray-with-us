import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { UserAuthForm } from "@/app/signin/_components/userAuthForm";

const LoginPage = async () => {
  const session = await getServerSession();
  if (session != null) {
    return redirect("/pray");
  }
  return (
    <div className="container relative flex h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">Pray with us all of the time for everyone</p>
            <footer className="text-sm">Pray with us</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Pray with us Login
            </h1>
            <p className="text-sm text-muted-foreground">
              아래 로그인을 이용 해주세요
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
