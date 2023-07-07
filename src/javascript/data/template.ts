export class Template {
    constructor() {}

    injectData(template: string, data: any) {
        let result: any = template;
        for(const prop in data) {
          const label = prop;
          result = result.replaceAll(`{${ label }}`, data[prop]);
        }
        return result;
    }

    injectInterateData(template: string, data: any[]) {
      let result: any = '';
      data.forEach((item: any) => {
        let text = template;
        for(const prop in item) {
          const label = `{${ prop }}`;
          text = text.replace(label, item[prop]);
        }
        result += text;
      });
      return result;
  }
}