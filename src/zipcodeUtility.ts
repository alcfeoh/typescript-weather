

export function addZipcode(zipcode: string): string[] {
    let zipcodes = getZipcodes();
    zipcodes.push(zipcode);
    localStorage.setItem("zipcodes", JSON.stringify(zipcodes));
    return zipcodes;
}

export function getZipcodes(): string[] {
    const str = localStorage.getItem("zipcodes") || "[]";
    return JSON.parse(str);
}
