import URLSearchParamsPoylfill from 'url-search-params';

export function setEnvParam(value) {
  const params = getParams();
  params.set('env', value);
  window.location.search = params;
}

export function getEnvParam() {
  const params = getParams();
  return params.get('env');
}

function getParams() {
  return window.URLSearchParams
    ? new URLSearchParams(location.search)
    : URLSearchParamsPoylfill(location.search);
}
