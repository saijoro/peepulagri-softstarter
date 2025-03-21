import { createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { EyeSvg } from "@/components/svg/EyeSvg";
import { useState } from "react";
import { OpenEye } from "@/components/svg/OpenEye";
import Cookies from "js-cookie";
import { EmailSvg } from "@/components/svg/EmailSvg";
import { PasswordSvg } from "@/components/svg/PasswordSvg";

// Type definitions
interface FormValues {
  email: string;
  password: string;
}

interface ApiResponse {
  success: boolean;
  status: number;
  errors?: {
    email?: string;
    password?: string;
  };
  message: string;
  data: {
    access_token?: string;
  } | null;
}

const loginAPI = async (data: FormValues): Promise<ApiResponse> => {
  const response = await fetch(
    "https://dev-api-iotsoftstarter.up.railway.app/v1.0/users/sign-in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();
  return { ...responseData, status: response.status };
};
export function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { device_id } = useParams({ strict: false })

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      if (data.success && data.status === 200 && data.data?.access_token) {
        const accessToken = data.data.access_token;
        Cookies.set("token", accessToken, { secure: true, sameSite: "strict" });
        localStorage.setItem("authToken", accessToken);
        toast.success("Login Successful");
        navigate({ to: `/devices/$device_id/motors/$motor_id`,params:{
          device_id:'34',
          motor_id:'34'
        } });
      } else {
        throw new Error(data.message || "Login failed");
      }
    },
    onError: (error: any, variables, context) => {
      if (error.status === 422 && error.errors) {
        // Set form-specific errors
        if (error.errors.email) {
          setError("email", { type: "manual", message: error.errors.email });
        }
        if (error.errors.password) {
          setError("password", {
            type: "manual",
            message: error.errors.password,
          });
        }
      }
      toast.error(error.message || "Authentication failed");
    },
  });

  const onSubmit = (data: FormValues) => {
    mutateLogin(data);
  };

  const [view, setView] = useState(false);
  const handleView = () => setView(!view);

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="h-screen w-screen flex text-xs bg-white">
        <div className="w-[65%] rounded-[16px] overflow-hidden m-5">
          <img
            className="w-full h-full object-cover"
            src="/assets/image.webp"
            alt="Main Image"
          />
        </div>
        <div className="w-[35%] flex flex-col items-center gap-10 h-dvh px-24 justify-center">
          <div>
            <img src="/assets/logo.svg" alt="Logo" className="mb-5" />
          </div>

          <div className="w-full space-y-5 text-[#35353d] text-xs font-normal">
            <div className="text-center">
              <div className="text-lg text-title font-[400]">Sign In</div>
              <div className="text-gray-500 text-sm font-[300]">
                Sign in to access your Account
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-1 text-title text-base">
                <div>Email</div>
                <div className="flex items-center w-full rounded-[9.12px] border border-[#e9e9e9] pl-2 bg-[#FAFAFA]">
                  <EmailSvg />
                  <input
                    placeholder="Enter your email"
                    className="h-full outline-none p-2 w-full bg-inherit font-[300]"
                    type="text"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 text-title text-base">
                <div>Password</div>
                <div className="flex items-center w-full rounded-[9.12px] border border-[#e9e9e9] pl-2 bg-[#f9f9f9]">
                  <PasswordSvg />
                  <input
                    placeholder="Enter your Password"
                    className="h-full outline-none p-2 w-full bg-inherit font-[300]"
                    type={view ? "text" : "password"}
                    {...register("password")}
                  />
                  <button type="button" onClick={handleView} className="px-2.5">
                    {view ? <OpenEye /> : <EyeSvg />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-center pt-5 space-y-2">
                <button
                  type="submit"
                  className="w-full text-white bg-[#45a845] p-2 rounded-full disabled:opacity-50 flex items-center justify-center text-base"
                  disabled={isPendingLogin}
                >
                  {isPendingLogin ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
                <div>
                  <div className="text-gray-500 text-base">or</div>
                  <button
                    onClick={() => navigate({ to: "/signin-phone" })}
                    className="text-[#2F80ED] disabled:opacity-50 text-base"
                    disabled={isPendingLogin}
                  >
                    Login With OTP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
