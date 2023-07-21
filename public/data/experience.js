export class EXPERIENCE {
    get() {
        return [
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
            { name: "sasd", tyep: "", some: "", somn: true },
        ];
    }
    toSnakeCase(word) {
        word = word.toString().trim();
        const words = word.split("");
        let result = words
            .map((char, index) => {
            return char && index > 2 && /[A-Z]/.test(char) ? `_${char}` : char;
        })
            .join('');
        return result.toLowerCase();
    }
    processText(text) {
        let result = [];
        text = text.replaceAll("\n", " \n");
        console.log(text);
        const words = text.trim().split(" ");
        words.forEach((w, index) => {
            const format = this.formatWord(w);
            w = w.replace("\n", "<br>");
            result.push({ index: index, word: w, format: format });
        });
        return result;
    }
    formatWord(word) {
        const letters = word.split("");
        const middle = Math.trunc(letters.length / 2);
        letters[middle] = `<b>${letters[middle]}</b>`;
        return letters.join("").replaceAll("\n", "");
    }
}
