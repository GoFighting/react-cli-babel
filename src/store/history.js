import createHistory from 'history/createBrowserHistory';

function addQuery(history) {
    const location = history.location;
    history.location = { ...location };
}

const history = createHistory();

addQuery(history);

window.linkTo = history
export const unlisten = history.listen(() => {
	addQuery(history);
});

export default history;
