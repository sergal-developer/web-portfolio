export class Template {
    constructor() { }
    injectData(template, data) {
        let result = template;
        for (const prop in data) {
            const label = prop;
            result = result.replaceAll(`{${label}}`, data[prop]);
        }
        return result;
    }
    injectInterateData(template, data) {
        let result = '';
        data.forEach((item) => {
            let text = template;
            for (const prop in item) {
                const label = `{${prop}}`;
                text = text.replace(label, item[prop]);
            }
            result += text;
        });
        return result;
    }
}
