import {memo, ReactNode, useEffect, useRef, useState} from 'react';
import cls from './Input.module.scss';
import classNames from 'classnames';
import {HTMLInputProps, MultiLanguageMassage, ProjectLanguages} from 'shared/types';
import {InputValidationErrors, InputValidations} from 'shared/lib/services/InputValidationService';
import {useInputErrors} from 'shared/ui/Input/lib/useInputErrors';
import {useInputHandlers} from 'shared/ui/Input/lib/useInputHandlers';

export type InputExternalErrorMassage = undefined | string | string[] | MultiLanguageMassage;

interface InputProps extends HTMLInputProps {
  className?: string;
  value: string | number;
  onChange: (value: string) => void;
  label?: ReactNode,
  autofocus?: boolean;
  readonly?: boolean;
  externalError?: InputExternalErrorMassage;
  noticeMassage?: string;
  validations?: InputValidations[],
  currentLanguage?: ProjectLanguages
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autofocus,
    readonly,
    validations,
    externalError,
    currentLanguage = 'ru',
    ...otherProps
  } = props;

  const [validationErrors, setValidationErrors] = useState<InputValidationErrors | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const {ExternalErrors, ValidationErrors} = useInputErrors({externalError, currentLanguage, validationErrors});
  const {onFocus, onBlur, onChangeHandler} = useInputHandlers({
    ref,
    validations,
    currentLanguage,
    setValidationErrors,
    onChange
  });

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, {[cls.readonly]: readonly}, className)}>
      {label && (
        <div className={cls.label}>
          {label}
        </div>
      )}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.input, {[cls.invalid]: validationErrors})}
        readOnly={readonly}
        onFocus={onFocus}
        onBlur={onBlur}
        {...otherProps}
      />
      {ExternalErrors}
      {ValidationErrors}
    </div>
  );
});

Input.displayName = 'Input';
export {Input};