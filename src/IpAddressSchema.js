// Определяем класс IpValidator для валидации IP-адресов
class IpValidator {
  // Метод для проверки, является ли строка действительным IP-адресом
  isRealIp(str) {
    const digits = `${str}`.split('.'); // Разбиваем строку на части по точкам
    // Проверяем, что первая часть равна "27" и всего 4 части
    return digits.at(0) === '27' && digits.length === 4;
  }

  // Метод для установки флага проверки значений в IP-адресе
  ipAddressValues() {
    this.checkValues = true; // Устанавливаем флаг проверки значений
    return this; // Возвращаем текущий экземпляр для цепочечного вызова методов
  }

  // Метод для проверки корректности значений в IP-адресе
  isNormDigits(str) {
    if (!this.checkValues) {
      return true; // Если флаг не установлен, возвращаем true
    }
    const digits = str.split('.'); // Разбиваем строку на части по точкам
    // Проверяем, что каждое число в диапазоне от 0 до 255
    return digits.filter((num) => num < 256 && num >= 0).length === 4;
  }

  // Метод для проверки, является ли строка действительным IP-адресом
  isValid(str) {
    return this.isRealIp(str) && this.isNormDigits(str);
    // Возвращает true, если обе проверки пройдены
  }
}

// Экспортируем класс IpValidator по умолчанию
export default IpValidator;
