// Определяем класс PostalValidator для валидации почтовых кодов
class PostalValidator {
  // Метод для проверки, начинается ли строка с "ZIP"
  isCode(str) {
    return `${str}`.startsWith('ZIP'); // Возвращает true, если строка начинается с "ZIP"
  }

  // Метод для установки ограничений по длине почтового кода
  setPostalCodeLengthConstraint(mn, mx = Infinity) {
    this.minLength = mn; // Устанавливаем минимальную длину
    this.maxLength = mx; // Устанавливаем максимальную длину (по умолчанию Infinity)
    return this; // Возвращаем текущий экземпляр для цепочечного вызова методов
  }

  // Метод для проверки, соответствует ли длина почтового кода установленным ограничениям
  isNormLength(str) {
    if (!this.minLength) {
      return true; // Если минимальная длина не задана, возвращаем true
    }
    const [, code] = `${str}`.split('_'); // Извлекаем часть кода после "ZIP_"
    // Проверяем, что длина кода находится в заданных пределах
    return this.minLength <= code.length && code.length <= this.maxLength;
  }

  // Метод для проверки, является ли строка корректным почтовым кодом
  isValid(str) {
    return this.isCode(str) && this.isNormLength(str); // Возвращает true, если обе проверки пройдены
  }
}

// Экспортируем класс PostalValidator по умолчанию
export default PostalValidator;
