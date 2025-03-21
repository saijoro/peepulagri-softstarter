import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { EditSvg } from "@/components/svg/EditSvg";
import { useMutation } from "@tanstack/react-query";
import { toast, Toaster } from "sonner";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_auth/verify-otp")({
  component: PhoneOTP,
});

interface VerifyOtpData {
  phone: string;
  otp: string;
}

interface ApiResponse {
  token?: string;
  message?: string;
  status: number;
  data?: {
    access_token?: string;
    [key: string]: any;
  };
}

const verifyOtpAPI = async (
  data: VerifyOtpData,
  token: string | null
): Promise<ApiResponse> => {
  const response = await fetch(
    "https://dev-api-iotsoftstarter.up.railway.app/v1.0/users/sign-in/verify-otp",
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
  console.log("Verify OTP Response:", responseData); // Debug log
  return { ...responseData, status: response.status };
};

const resendOtpAPI = async (
  phone: string,
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
      body: JSON.stringify({ phone }),
    }
  );

  const responseData = await response.json();
  console.log("Resend OTP Response:", responseData); // Debug log
  return { ...responseData, status: response.status };
};

export function PhoneOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const phoneNumber = localStorage.getItem("phoneNumber") || "";

  const { mutate: verifyOtp, isPending: isVerifying } = useMutation({
    mutationFn: async (data: VerifyOtpData) => {
      const token = localStorage.getItem("authToken");
      const response = await verifyOtpAPI(data, token);
      if (response.status === 200 || response.status === 201) {
        return response;
      } else {
        throw response;
      }
    },
    onSuccess: (response) => {
      const accessToken = response.data?.access_token || response.token;
      if (accessToken) {
        Cookies.set("token", accessToken, {
          priority: "High",
        })
        localStorage.setItem("authToken", accessToken);
        navigate({ to: "/dashboard" });
      } else {
        console.warn("No access token found in response");
      }
      toast.success("OTP verified successfully");
      navigate({ to: "/dashboard" });
    },
    onError: (error: any) => {
      const errorMsg = error?.message || "Invalid OTP. Please try again.";
      setApiError(errorMsg);
      toast.error(errorMsg);
    },
  });

  const { mutate: resendOtp, isPending: isResending } = useMutation({
    mutationFn: async (phone: string) => {
      const token = localStorage.getItem("authToken");
      const response = await resendOtpAPI(phone, token);
      if (response.status === 200 || response.status === 201) {
        return response;
      } else {
        throw response;
      }
    },
    onSuccess: () => {
      setResendTimer(30);
      setCanResend(false);
      toast.success("OTP resent successfully");
    },
    onError: (error: any) => {
      const errorMsg =
        error?.message || "Failed to resend OTP. Please try again.";
      setApiError(errorMsg);
      toast.error(errorMsg);
    },
  });

  const handleOtpChange = (value: string) => {
    setOtp(value);
    setApiError(null);
  };

  const handleVerify = () => {
    if (otp.length !== 4) {
      setApiError("Please enter a 4-digit OTP");
      return;
    }
    console.log({ phone: phoneNumber, otp }, "Credentials being sent");
    verifyOtp({ phone: phoneNumber, otp });
  };

  const handleResend = () => {
    if (!canResend || isResending) return;
    resendOtp(phoneNumber);
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const maskedPhone = phoneNumber
    ? `${phoneNumber.slice(0, 2)}XXXXXX${phoneNumber.slice(-2)}`
    : "Not available";

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
        <div className="w-[35%] flex flex-col items-center h-dvh px-20 gap-10 justify-center">
          <div>
            <img src="/assets/logo.svg" alt="Logo" className="mb-5" />
          </div>
          <div className="w-full text-center space-y-5">
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-sm">OTP Verification</div>
              <div className="text-gray-500 text-xs">
                Enter the OTP sent to your mobile number
              </div>
              <div className="text-gray-500 text-xs flex items-center gap-2">
                <Phone size={14} />
                <span>{maskedPhone}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate({ to: "/signin-phone" })}
                >
                  <EditSvg />
                </span>
              </div>
            </div>
            <div>
              <InputOTP
                className="w-full flex justify-center"
                maxLength={4}
                value={otp}
                onChange={handleOtpChange}
              >
                <InputOTPGroup className="flex gap-3 items-center justify-center w-full animate-caret-blink">
                  <InputOTPSlot
                    className="border outline-[2px] rounded-[3px] w-8 h-8 text-center"
                    index={0}
                  />
                  <InputOTPSlot
                    className="border outline-[2px] rounded-[3px] w-8 h-8 text-center"
                    index={1}
                  />
                  <InputOTPSlot
                    className="border outline-[2px] rounded-[3px] w-8 h-8 text-center"
                    index={2}
                  />
                  <InputOTPSlot
                    className="border outline-[2px] rounded-[3px] w-8 h-8 text-center"
                    index={3}
                  />
                </InputOTPGroup>
              </InputOTP>
              {apiError && (
                <p className="text-red-500 text-sm mt-2">{apiError}</p>
              )}
            </div>
            <div className="text-sm">
              <div className="text-gray-400 font-normal">
                Didn’t receive OTP?
              </div>
              <div
                className={`cursor-pointer ${canResend && !isResending ? "text-[#45A845]" : "text-gray-400"
                  }`}
                onClick={handleResend}
              >
                {isResending
                  ? "Resending..."
                  : canResend
                    ? "Resend OTP"
                    : `Resend OTP in ${resendTimer}s`}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full text-sm">
            <button
              onClick={handleVerify}
              disabled={isVerifying || otp.length !== 4}
              className={`w-[75%] text-white rounded-full bg-[#45A845] p-2 ${isVerifying || otp.length !== 4
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
                }`}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </button>
            <div className="text-gray-400">or</div>
            <div
              className="cursor-pointer text-[#45A845] hover:underline"
              onClick={() => navigate({ to: "/" })}
            >
              Login With Password
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneOTP;
