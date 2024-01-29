import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { authService } from "../api/api";
import { Input } from "../components/components";
import { useNavigate } from "react-router-dom";

export default function PasswordManager() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      oldPass: "",
      newPass: "",
    },
  });
  const { errors } = formState;

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Password Manager
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit((data) => {
                authService
                  .changePassword(data)
                  .then((res) => {
                    if (res) {
                      alert("Password changed successfully");
                      navigate("/");
                    }
                  })
                  .catch((reason) => {
                    alert(reason.message);
                  });
              })}
            >
              <div>
                <label
                  htmlFor="oldPass"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Password
                </label>

                <Input
                  name="oldPass"
                  type="password"
                  id="oldPass"
                  placeholder="••••••••"
                  register={register}
                  validation={{
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password should at least be 8 characters long",
                    },
                  }}
                />

                <p className="error_msg">{errors.oldPass?.message}</p>
              </div>
              <div>
                <label
                  htmlFor="newPass"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <Input
                  name="newPass"
                  type="password"
                  id="newPass"
                  placeholder="••••••••"
                  register={register}
                  validation={{
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password should at least be 8 characters long",
                    },
                  }}
                />

                <p className="error_msg">{errors.newPass?.message}</p>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
