import {
    Card,
    Input,
    
    Button,
    Typography,
  } from "@material-tailwind/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="shadow-lg border p-10 rounded-lg">
            <Card color="transparent" shadow={false}>
      <Typography className="text-center" variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography  color="gray" className="mt-1 text-center font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div className="flex justify-center items-center gap-10 mt-5">

        <FaGoogle className="text-2xl hover:shadow-lg:" />
        <FaFacebook className="text-2xl hover:shadow-lg:"></FaFacebook>
        <FaXTwitter className="text-2xl hover:shadow-lg:"></FaXTwitter>
        </div>

        <Button className="mt-6" fullWidth>
          sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to='/register' className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
        </div>
        </div>
    );
};

export default Login;