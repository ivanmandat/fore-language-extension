# Dictionary.Translation

Dictionary.Translation
-


# Dictionary.Translation


## Синтаксис


Translation: Object;


## Описание


Свойство Translation определяет доступный перевод для справочника НСИ.


## Комментарии


Значение свойства устанавливается с помощью метода setTranslation, а возвращается - с помощью метода getTranslation. Из JSON значение задать нельзя.


При вызове метода setTranslation используется параметр tr - объект с настройками перевода в формате метаданных. Метод getTranslation имеет параметр lcid - код языка.


Свойство содержит JSON-объект со следующими полями: id - идентификатор перевода, isDefault - признак того, используется ли данный перевод по умолчанию, k - код языка.


## Пример


Пример использования приведён на странице описания свойства [Attribute.Translation](../Attribute/Attribute.Translation.htm).


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
