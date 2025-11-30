# IMetabasePasswordPolicy

IMetabasePasswordPolicy
-


# IMetabasePasswordPolicy


## Описание


Интерфейс IMetabasePasswordPolicy
 содержит свойства и методы для настройки парольной политики безопасности.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckForbiddenStrings](IMetabasePasswordPolicy.CheckForbiddenStrings.htm)
		 Свойство CheckForbiddenStrings
		 определяет признак использования проверки пароля на вхождение
		 запрещенных строк.


		 ![](../../Property_Image.gif)
		 [ForbiddenStrings](IMetabasePasswordPolicy.ForbiddenStrings.htm)
		 Свойство ForbiddenStrings
		 возвращает список, содержащий запрещенные строки, наличие которых
		 будет проверяться в пароле.


		 ![](../../Property_Image.gif)
		 [HashedPasswords](IMetabasePasswordPolicy.HashedPasswords.htm)
		 Свойство HashedPasswords
		 определяет параметры хеширования пароля.


		 ![](../../Property_Image.gif)
		 [HistoryLength](IMetabasePasswordPolicy.HistoryLength.htm)
		 Свойство HistoryLength
		 определяет количество старых паролей, хранимых и проверяемых на
		 совпадение с новым паролем пользователя.


		 ![](../../Property_Image.gif)
		 [MaxAge](IMetabasePasswordPolicy.MaxAge.htm)
		 Свойство MaxAge определяет
		 максимальный срок действия пароля (дней).


		 ![](../../Property_Image.gif)
		 [MaxRepeatedCharCount](IMetabasePasswordPolicy.MaxRepeatedCharCount.htm)
		 Свойство MaxRepeatedCharCount
		 определяет максимальное количество повторяющихся символов, которые
		 могут быть использованы в пароле.


		 ![](../../Property_Image.gif)
		 [MinAge](IMetabasePasswordPolicy.MinAge.htm)
		 Свойство MinAge определяет
		 минимальный срок действия пароля (дней).


		 ![](../../Property_Image.gif)
		 [MinLength](IMetabasePasswordPolicy.MinLength.htm)
		 Свойство MinLength
		 определяет минимальную длину пароля (символов).


		 ![](../../Property_Image.gif)
		 [NotAllowFullUserName](IMetabasePasswordPolicy.NotAllowFullUserName.htm)
		 Свойство NotAllowFullUserName
		 определяет запрет на совпадение полного имени пользователя и пароля.


		 ![](../../Property_Image.gif)
		 [NotAllowUserName](IMetabasePasswordPolicy.NotAllowUserName.htm)
		 Свойство NotAllowUserName
		 определяет запрет на совпадение имени пользователя и пароля.


		 ![](../../Property_Image.gif)
		 [RequireDifferentChars](IMetabasePasswordPolicy.RequireDifferentChars.htm)
		 Свойство RequireDifferentChars
		 определяет запрет использования пароля из одинаковых символов.


		 ![](../../Property_Image.gif)
		 [RequireDifferentLetterCase](IMetabasePasswordPolicy.RequireDifferentLetterCase.htm)
		 Свойство RequireDifferentLetterCase
		 определяет запрет использования пароля из букв одного регистра.


		 ![](../../Property_Image.gif)
		 [RequireDigitsAndChars](IMetabasePasswordPolicy.RequireDigitsAndChars.htm)
		 Свойство RequireDigitsAndChars
		 определяет признак обязательного использования в пароле цифр и
		 букв.


		 ![](../../Property_Image.gif)
		 [RequireNonAlphabeticChars](IMetabasePasswordPolicy.RequireNonAlphabeticChars.htm)
		 Свойство RequireNonAlphabeticChars
		 определяет признак обязательного использования в пароле спецсимволов
		 (_, @, #, $, %, &, *, ^).


		 ![](../../Property_Image.gif)
		 [UniquenessDegree](IMetabasePasswordPolicy.UniquenessDegree.htm)
		 Свойство UniquenessDegree
		 определяет минимальное отличие старого пароля от нового (символов).


		 ![](../../Property_Image.gif)
		 [WarningMaxAge](IMetabasePasswordPolicy.WarningMaxAge.htm)
		 Свойство WarningMaxAge
		 определяет количество дней, за которое пользователь будет уведомлен
		 о необходимости смены пароля.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CheckPassword](IMetabasePasswordPolicy.CheckPassword.htm)
		 Метод CheckPassword
		 осуществляет проверку нового пароля пользователя на корректность
		 в соответствии с установленной политикой паролей в менеджере безопасности.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
