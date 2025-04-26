export default function cleanSet(set, startString) {
    if (!startString || !startString.length) return '';
  
    const cleaned = [];
    for (const value of set) {
      if (value.startsWith(startString)) {
        cleaned.push(value.slice(startString.length));
      }
    }
    return cleaned.join('-');
  }
  