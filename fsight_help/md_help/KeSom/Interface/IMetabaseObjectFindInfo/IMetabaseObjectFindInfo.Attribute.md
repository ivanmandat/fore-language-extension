# IMetabaseObjectFindInfo.Attribute

IMetabaseObjectFindInfo.Attribute
-


# IMetabaseObjectFindInfo.Attribute


## Синтаксис


Attribute: [FindAttribute](../../Enums/FindAttribute.htm);


## Описание


Свойство Attribute определяет
 атрибут, по значениям которого будет осуществляться поиск.


## Комментарии


Свойство используется для совместимости с более старыми версиями платформы.
 Для определения атрибута, по значениям которого требуется осуществить
 поиск, в новых версиях платформы рекомендуется использовать свойство [IMetabaseObjectFindInfo.AttributeEx](IMetabaseObjectFindInfo.AttributeEx.htm).


По умолчанию свойству установлено значение FindAttribute.Ident,
 при этом поиск значения указанного в свойстве [IMetabaseObjectFindInfo.Text](IMetabaseObjectFindInfo.Text.htm)
 будет осуществляться среди идентификаторов объектов.


## Пример


Пример использования приведён в описании свойства [IMetabaseObjectFindInfo.CaseSensitive](IMetabaseObjectFindInfo.CaseSensitive.htm).


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
