# INetHttpCommand.AcceptLanguage

INetHttpCommand.AcceptLanguage
-


# INetHttpCommand.AcceptLanguage


## Синтаксис


AcceptLanguage: String;


## Описание


Свойство AcceptLanguage задаёт
 языки, на которых предпочтительны ответы сервера на запрос.


## Комментарии


В качестве значения свойства указывается тег языка. Тег состоит из кода
 языка (2х-буквенный код в соответствии с ISO 639-1 или 3х-буквенный код
 в соответствии с ISO 639-2), также через «-» может быть указан код страны
 или региона.


Значение «*» указывает на то, что ответ может быть на любом языке.


Дополнительно может быть указан весовой коэффициент, который определяет
 приоритет выбора языка.


AcceptLanguage := "*"


AcceptLanguage := "ru"


AcceptLanguage := "en-US"


AcceptLanguage := en-US,en;q=0.5


AcceptLanguage := fr-CH, fr;q=0.9, en;q=0.8, *;q=0.5


AcceptLanguage := ru-RU, ru;q=0.9, en-US;q=0.8,
 en;q=0.7, *;q=0.5


## Пример


Пример использования приведён в описании метода [INetCommand.Start](../INetCommand/INetCommand.Start.htm).


См. также:


[INetHttpCommand](INetHttpCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
