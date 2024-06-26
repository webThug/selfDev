import {useEffect, useState} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {ReducersList, ReduxStoreWithManager, StateSchemaKey} from '../config/StateSchema';

export const useReducerManager = (reducers: ReducersList, removeAfterUnmount: boolean = true) => {
  const [isMount, setIsMount] = useState(false);
  const [isReducersInit, setIsReducersInit] = useState(false);
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      Object.entries(reducers).forEach(([name, reducer]) => {
        store?.reducerManager?.add(name as StateSchemaKey, reducer);
        dispatch({type: `@INIT ${name} reducer`});
      });
      setIsReducersInit(true);
    }

    return () => {
      if (removeAfterUnmount && isMount) {
        Object.entries(reducers).forEach(([name]) => {
          store?.reducerManager?.remove(name as StateSchemaKey);
          dispatch({type: `@DESTROY ${name} reducer`});
        });
      }
    };

  }, [dispatch, isMount, isReducersInit, reducers, removeAfterUnmount, store?.reducerManager]);

  return {isReducersInit};
};