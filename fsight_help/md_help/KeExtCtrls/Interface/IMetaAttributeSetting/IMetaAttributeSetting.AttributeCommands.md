# IMetaAttributeSetting.AttributeCommands

IMetaAttributeSetting.AttributeCommands
-


# IMetaAttributeSetting.AttributeCommands


## Синтаксис


AttributeCommands: Boolean;


## Описание


Свойство AttributeCommands определяет
 признак доступности для атрибута команд по изменению его места расположения
 в цепочке навигации.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом в контекстном меню для атрибута будут доступны все команды. Если
 свойству установить значение True,
 то из контекстного меню будут удалены команды по замене и удалению атрибута.
 Также будет недоступен выбор других атрибутов. Доступными будут команды
 по настройке сортировки и команды по установке [параметров](../IMetaAttributeParamItems/IMetaAttributeParamItems.htm),
 если они созданы для атрибута.


См. также:


[IMetaAttributeSetting](IMetaAttributeSetting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
