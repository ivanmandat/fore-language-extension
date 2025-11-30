# IRdsDictionaryElements.HasAccess

IRdsDictionaryElements.HasAccess
-


# IRdsDictionaryElements.HasAccess


## Синтаксис


HasAccess(Element: Integer; Attribute: [RdsAccessAttribute](../../Enums/RdsAccessAttribute.htm)):
 Boolean;


## Параметры


Element. Ключ элемента, для
 которого необходимо проверить наличие прав, на указанный в параметре Attribute, вид доступа;


Attribute. Вид атрибута доступа,
 определяющего права, наличие которых необходимо проверить для текущего
 пользователя.


## Описание


Свойство HasAccess возвращает
 признак наличия прав у текущего пользователя.


## Комментарии


Допустимые значения:


	- True. У пользователя
	 есть права на указанный элемент;


	- False. У пользователя
	 нет прав на указанный элемент.


См. также:


[IRdsDictionaryElements](IRdsDictionaryElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
