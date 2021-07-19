import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { Container } from './styles';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function Button({ name, children, ...rest }: ButtonProps) {
  return (
      <Container type="button" name={name} {...rest}>
        {children}
      </Container>
  )
}

