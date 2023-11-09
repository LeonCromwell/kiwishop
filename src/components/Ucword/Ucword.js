function Ucword(string) {
    const arr = string.toLowerCase().split(' ');
    const result = arr.map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()));

    return result.join(' ');
}

export default Ucword;
