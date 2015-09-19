import createBrowserHistory from 'history/lib/createBrowserHistory';

let history;
export default function lazyHistory() {
  if (!history) {
    history = createBrowserHistory();
  }
  return history;
}
