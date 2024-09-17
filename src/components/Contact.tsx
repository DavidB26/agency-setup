import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { contactSchema } from "../schema/contact.schema";
import Container from "./Container";
import Title from "./Title";
import { useState } from "react";
import { hatch } from "ldrs";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  access_key: string;
};

function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      access_key: "b2c71605-dbed-4173-81ed-7dd3e9e18921",
    },
  });

  hatch.register();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (res) => {
        let response = await res.json();
        if (response.success) {
          setSuccess(true);
          reset();
        } else {
          setSuccess(false);
        }
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  };

  return (
    <section className='py-20' id='contact'>
      <Container>
        <Title title='Contactanos' align='center' underline='center' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col max-w-xl gap-5 mx-auto mt-10'
        >
          <input
            type='hidden'
            value='b2c71605-dbed-4173-81ed-7dd3e9e18921'
            {...register("access_key")}
          />
          {/* Nombres y Apellidos */}
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Nombres y Apellidos
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='name'
                {...register("name")}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6'
              />
            </div>
            {errors.name && (
              <span className='block mt-2 text-xs text-red-500'>
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2'>
              <input
                type='email'
                id='email'
                {...register("email")}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6'
              />
            </div>
            {errors.email && (
              <span className='block mt-2 text-xs text-red-500'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Asunto */}
          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Asunto
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='subject'
                {...register("subject")}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6'
              />
            </div>
            {errors.subject && (
              <span className='block mt-2 text-xs text-red-500'>
                {errors.subject.message}
              </span>
            )}
          </div>
          {/* Mensaje */}
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Mensaje
            </label>
            <div className='mt-2'>
              <textarea
                rows={6}
                id='message'
                {...register("message")}
                placeholder='Haznos saber tu consulta'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6'
              />
            </div>
            {errors.message && (
              <span className='block mt-2 text-xs text-red-500'>
                {errors.message.message}
              </span>
            )}
          </div>

          <div className='flex flex-col items-center justify-center mt-6 '>
            <button
              disabled={isSubmitting}
              type='submit'
              className='w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-blue-brandable hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:max-w-xs'
            >
              {isSubmitting ? (
                <l-hatch size={15} stroke={3} speed={3.5} color='white' />
              ) : (
                "Enviar"
              )}
            </button>
            {isSubmitSuccessful && success && (
              <span className='block mt-2 text-xs text-center text-green-500'>
                Enviado exitosamente!
              </span>
            )}
            {isSubmitSuccessful && !success && (
              <span className='block mt-2 text-xs text-center text-red-500'>
                Oops, algo salió mal!
              </span>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Contact;
