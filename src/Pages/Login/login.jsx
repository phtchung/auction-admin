import { Card, Button, Typography, Input } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import USER, {adminLogin} from "../../Services/userService.jsx";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleClick = async () => {
    try {

      localStorage.clear()

      const res = await adminLogin({
        email: email,
        password: password,
      });

      const accessToken = res?.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }
      const id = res?.data?.id;
      if (id) {
        localStorage.setItem("id", id);
      }
      toast.success("Login success");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const accessToken = useMemo(() => localStorage.getItem("accessToken"), []);

  useEffect(() => {
    if (accessToken) {
      navigate("/reqTracking");
    }
  }, [navigate, accessToken]);
  return (
    <>
      <Card color="white" className="p-6" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Đăng nhập
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-left"
            >
              Your Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="Số điện thoại"
              className=" !border-t-blue-gray-200 "
              onChange={handleMailChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 text-left"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              onChange={handlePasswordChange}
              className=" !border-t-blue-gray-200 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          {/*<div*/}
          {/*    color="gray"*/}
          {/*    className="flex text-sm items-center font-normal">*/}
          {/*    <Checkbox className="flex"/>*/}
          {/*    I agree the*/}
          {/*    <a*/}
          {/*        href="#"*/}
          {/*        className="font-medium transition-colors hover:text-gray-900"*/}
          {/*    >*/}
          {/*        &nbsp;Terms and Conditions*/}
          {/*    </a>*/}
          {/*</div>*/}

          <Button className="mt-6 bg-black" onClick={handleClick} fullWidth>
            Đăng nhập
          </Button>
        </form>
      </Card>
    </>
  );
};
export default Login;
