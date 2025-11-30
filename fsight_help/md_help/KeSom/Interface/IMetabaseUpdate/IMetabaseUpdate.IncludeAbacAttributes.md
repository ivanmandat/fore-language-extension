# IMetabaseUpdate.IncludeAbacAttributes

IMetabaseUpdate.IncludeAbacAttributes
-


# IMetabaseUpdate.IncludeAbacAttributes


## Синтаксис


IncludeAbacAttributes: Boolean;


## Описание


Свойство IncludeAbacAttributes
 определяет признак переноса [пользовательских
 атрибутов](Admin.chm::/04_SecurityPolicy/Creating_attributes.htm) при использовании [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


## Комментарии


Допустимые значения:


	- True. При обновлении
	 переносятся все пользовательские атрибуты пользователей, групп пользователей,
	 классов объектов и отдельных типов объектов;


	- False. По умолчанию.
	 Пользовательские атрибуты не переносятся.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdate.AbacRulesNode](IMetabaseUpdate.AbacRulesNode.htm).


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
