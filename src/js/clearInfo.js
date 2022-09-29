function clearInfo(string,list, info) {
    if (string === '') {
        list.innerHTML = '';
        info.innerHTML = '';
        return;
    }
}
export { clearInfo };