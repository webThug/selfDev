import {userActions} from 'entities/User';
import {login} from './login';
import {TestAsyncThunk} from 'shared/lib/components/testing/TestAsyncThunk';
import {defaultFormSendingErrorMsg} from 'shared/lib/messages';

describe('login.test', () => {
  test('success login', async () => {
    const userValue = {username: '123', id: '1', avatar: 'lal'};

    const thunk = new TestAsyncThunk(login);
    thunk.api.post.mockReturnValue(Promise.resolve({status: 200, data: userValue}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(login);
    thunk.api.post.mockReturnValue(Promise.reject({status: 403}));
    const result = await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(defaultFormSendingErrorMsg);
  });
});
