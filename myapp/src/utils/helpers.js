export function generateRandomString(length) {
    var result = '';
    var characters = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function formatNumberToThousand(num) {
    if (!num) return
    return num.toLocaleString('en-US');
}