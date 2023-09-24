function formatDate(input: string): string {
    const date = new Date(input);

    const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);

    let suffix = '';
    switch (day) {
        case '01':
        case '21':
        case '31':
            suffix = 'st';
            break;
        case '02':
        case '22':
            suffix = 'nd';
            break;
        case '03':
        case '23':
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
    }

    return `${parseInt(day)}${suffix} of ${month} ${year}`;
}

export { formatDate }