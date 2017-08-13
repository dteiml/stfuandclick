//SESSION:
export const loading = (bool: boolean) => ({
	type: 'LOADING',
	loading: bool
});

export const loadingFailed = () => ({
	type: 'LOADING_FAILED'
});

export const setString = (bool: boolean) => ({
	type: 'SET_STRING',
	setString: bool
});

//RANKING:
export const load = (url: string, name: string) => {
	return (dispatch: any) => { 
    dispatch(loading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loading(false));
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(loaded(response)))
      .catch(() => dispatch(loadingFailed()));
    };
}

export const loaded = (ranking: {}) => ({
	type: 'LOADED',
	ranking,
});

export const setTeam = (name: string, decode: boolean) => ({
	type: 'SET_TEAM',
	name,
	decode
});

export const changeLocal = (int: number) => ({
	type: 'CHANGE_LOCAL',
	int
});

export const incrementGlobal = () => ({
	type: 'INCREMENT_GLOBAL'
});

