import { Button } from "@app/components/atoms/Button";
import { Icon } from "@app/components/atoms/Icon";
import { Input } from "@app/components/atoms/Input";
import { Container, ContentButton, ContentInput } from "./styles";
import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().email('O e-mail deve ser válido.').required('O e-mail é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
}).required();

type FormData = yup.InferType<typeof schema>;

export function FormLogin() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    // window.location.href = '/dashboard'
  };

  return(
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ContentInput>
        <Icon icon={FaUser} color="#D1D1D1" size={18}/>
        <input {...register("email")}/>
        {errors.email && <p>{errors.email?.message}</p>}
      </ContentInput>
      <ContentInput>
        <Icon icon={FaLock} color="#D1D1D1" size={18}/>
        <input {...register("password")}/>
        {errors.password && <p>{errors.password?.message}</p>}
      </ContentInput>
        {isValid ? (
          <ContentButton href='/dashboard'>
            <Button text="ENTRAR" />
          </ContentButton>
        ) : (
          <Button text="ENTRAR" disabled/>
        )}
    </Container>
  )
}