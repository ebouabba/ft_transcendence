'use client'

import {useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoding, setIsLoding] = useState(false);
    const toggLeVariant = useCallback(() => {
        if (variant == 'LOGIN')
            setVariant('REGISTER');
        else
            setVariant('LOGIN');
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });
    return (
        <div></div>
    )
}
export default AuthForm;