import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {Input} from "../components/components";
import {authService} from "../api/api";
import { useDispatch } from "react-redux";
import {login} from "../features/auth_slice"

export default function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {register, handleSubmit, formState} = useForm({
    defaultValues: {
        name: "",
        email: "",
        password: ""
    }
  });
  const {errors} = formState

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(data => {
              authService.signup(data).then(res => {
                if (res){
                  dispatch(login(res))
                  navigate("/posts")
                }
              }).catch(reason => alert(reason.message))
            })}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>

                <Input name="name" id="name" placeholder="name123"
                register={register} validation={
                  {
                    required: {
                      value: true,
                      message: "name is required"
                    }
                  }
                }
                />

                <p className="error_msg">{errors.name?.message}</p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>

                <Input name="email" type="email" id="email" placeholder="name@company.com"
                register={register} validation={
                  {
                    required: {
                      value: true,
                      message: "Email is required"
                    },
                    pattern: {
                      value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
                      message: "Enter a valid Email"
                    }
                  }
                }
                />

                <p className="error_msg">{errors.email?.message}</p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <Input name="password" type="password" id="password" placeholder="••••••••"
                register={register} validation={
                  {
                    required: {
                      value: true,
                      message: "Password is required"
                    },
                    minLength: {
                      value: 8,
                      message: "Password should at least be 8 characters long"
                    }
                  }
                }
                />

                <p className="error_msg">{errors.password?.message}</p>
              </div>
              
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
