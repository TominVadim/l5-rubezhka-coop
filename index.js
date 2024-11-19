// Импортируем классы валидаторов из других файлов
import PostalValidator from './src/PostalCodeSchema.js';
import IpValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';

// Определяем основной класс Validator
class Validator {
  // Метод для создания валидатора почтовых кодов
  postalCode() {
    return new PostalValidator(); // Возвращаем новый экземпляр PostalValidator
  }

  // Метод для создания валидатора IP-адресов
  ipAddress() {
    return new IpValidator(); // Возвращаем новый экземпляр IpValidator
  }

  // Метод для создания валидатора объектов пользователей
  user() {
    return new UserValidator(); // Возвращаем новый экземпляр UserValidator
  }
}

// Экспортируем класс Validator по умолчанию
export default Validator;
