import {useMemo} from 'react';
import cls from 'shared/ui/Input/Input.module.scss';
import {InputValidationErrors} from 'shared/lib/services/InputValidationService';
import {ProjectLanguages} from 'shared/types';
import {InputExternalErrorMassage} from 'shared/ui/Input/Input';

interface Props {
  validationErrors: InputValidationErrors | null;
  currentLanguage: ProjectLanguages;
  externalError?: InputExternalErrorMassage;
}

export const useInputErrors = (props: Props) => {
  const {validationErrors, externalError, currentLanguage} = props;
  const ValidationErrors = useMemo(() => {
    return validationErrors && validationErrors[currentLanguage].length
      ? <div className={cls.errMassage}>
        {Array.isArray(validationErrors[currentLanguage]) ? validationErrors?.[currentLanguage]?.join('\n') : '!'}
      </div>
      : null;
  }, [currentLanguage, validationErrors]);

  const ExternalErrors = useMemo(() => {
    if (externalError) {
      if (typeof externalError === 'string') {
        return <div className={cls.errMassage}>
          {externalError}
        </div>;
      } else if (Array.isArray(externalError)) {
        return <div className={cls.errMassage}>
          {externalError.join('\n')}
        </div>;
      } else if (typeof externalError === 'object' && !Array.isArray(externalError)) {
        return <div className={cls.errMassage}>
          {externalError[currentLanguage]}
        </div>;
      } else return null;
    } else {
      return null;
    }
  }, [currentLanguage, externalError]);

  return {
    ValidationErrors,
    ExternalErrors
  };
};