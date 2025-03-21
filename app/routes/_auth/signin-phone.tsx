import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/_auth/signin-phone")({
  component: MobileLoginComponent,
});

interface FormData {
  phone: string;
}

interface ApiResponse {
  token?: string;
  message?: string;
  status?: number;
  data?: any; // Adjust this based on your API response structure
}

const sendOtpAPI = async (
  data: FormData,
  token: string | null
): Promise<ApiResponse> => {
  const response = await fetch(
    "https://dev-api-iotsoftstarter.up.railway.app/v1.0/users/sign-in/send-otp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();
  console.log("Send OTP API Response:", responseData); // Debug log
  return { ...responseData, status: response.status };
};

export function MobileLoginComponent() {
  const navigate = useNavigate();
  const [state, setState] = useState<{
    isSubmitting: boolean;
    apiError: string | null;
  }>({
    isSubmitting: false,
    apiError: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { phone: localStorage.getItem("phoneNumber") || "" },
  });

  const { mutate: sendOtp } = useMutation({
    mutationFn: async (data: FormData) => {
      const token = localStorage.getItem("authToken");
      const response = await sendOtpAPI(data,token);
      if (response.status === 200 || response.status === 201) {
        return { ...response, submittedPhone: data.phone }; // Pass submitted phone along
      } else {
        throw response;
      }
    },
    onSuccess: (response) => {
      // Use the phone from response.data.phone if available, otherwise use submitted phone
      const phoneToStore = response.data?.phone || response.submittedPhone;
      if (phoneToStore) {
        localStorage.setItem("phoneNumber", phoneToStore);
        console.log("Stored phoneNumber in localStorage:", phoneToStore); // Debug log
      } else {
        console.warn("No phone number found in response or form data");
      }
      toast.success("OTP sent successfully");
      navigate({ to: "/verify-otp" });
      setState((prev) => ({ ...prev, isSubmitting: false }));
    },
    onError: (error: any) => {
      setState((prev) => ({
        ...prev,
        apiError: error?.message || "Failed to send OTP",
        isSubmitting: false,
      }));
      toast.error(error?.message || "Failed to send OTP");
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setState((prev) => ({ ...prev, isSubmitting: true, apiError: null }));
    sendOtp(data);
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="h-screen w-screen flex">
        <div className="w-[65%] rounded-[16px] overflow-hidden m-5">
          <img
            className="w-full h-full object-cover"
            src="/assets/image.webp"
            alt="Main Image"
          />
        </div>
        <div className="w-[35%] flex flex-col items-center gap-10 h-dvh px-24 justify-center">
          <img src="/assets/logo.svg" alt="Logo" className="mb-5" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-8 text-[#35353d]"
          >
            <div className="text-center text-sm">
              <div>Sign In</div>
              <div className="text-gray-500">
                Sign in to access your Account
              </div>
            </div>
            <div className="space-y-0.5">
              <label htmlFor="phone-input" className="text-xs text-gray-600">
                Phone
              </label>
              <div className="flex items-center w-full rounded-md border border-[#EAEAEA] bg-[#f7f7f7] pl-2 overflow-hidden">
                <img src="/assets/phonesvg.svg" alt="Phone Icon" />
                <input
                  id="phone-input"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-inherit p-1.5 outline-none"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
              {state.apiError && !errors.phone && (
                <p className="text-red-500 text-sm">{state.apiError}</p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={state.isSubmitting}
                className={`w-full border border-[#45a845] text-[#45a845] px-2 py-1 rounded-full ${
                  state.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {state.isSubmitting ? "Sending..." : "Send OTP"}
              </button>
              <div className="text-center text-gray-500 w-full">or</div>
              <button
                type="button"
                onClick={() => navigate({ to: "/" })}
                className="text-green-500 hover:underline text-sm"
              >
                Login With Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MobileLoginComponent;
