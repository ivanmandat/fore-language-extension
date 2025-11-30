# IDtRestProvider.ResultProvider

IDtRestProvider.ResultProvider
-


# IDtRestProvider.ResultProvider


## Синтаксис


ResultProvider: [IDtProvider](../IDtProvider/IDtProvider.htm);


## Описание


Свойство ResultProvider возвращает
 настройки источника данных, который будет обрабатывать ответ от REST-сервиса.


## Комментарии


Для настройки источника данных приведите значение свойства ResultProvider
 к интерфейсу [IDtJsonProvider](../IDtJsonProvider/IDtJsonProvider.htm)
 (при [ResultType](IDtRestProvider.ResultType.htm) = [DtRestProviderResultType.Json](../../Enums/DtRestProviderResultType.htm))
 или [IDtXmlProvider](../IDtXmlProvider/IDtXmlProvider.htm)
 (при [ResultType](IDtRestProvider.ResultType.htm) = [DtRestProviderResultType.Xml](../../Enums/DtRestProviderResultType.htm)).


## Пример


Пример использования приведён в описании свойства [IDtRestProvider.Url](IDtRestProvider.Url.htm).


См. также:


[IDtRestProvider](IDtRestProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
