# IMetabaseObjectDescriptor.ParentAllowed

IMetabaseObjectDescriptor.ParentAllowed
-


# IMetabaseObjectDescriptor.ParentAllowed


## Синтаксис


		ParentAllowed(Parent: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)):
		 Boolean;


## Параметры


Parent. Описание объекта репозитория,
 который предполагается использовать в качестве объекта-владельца для текущего
 объекта.


## Описание


Свойство ParentAllowed возвращает
 признак возможности установки текущего объекта в качестве дочернего для
 указанного объекта.


## Комментарии


Для получения описания объекта-владельца используйте свойство [IMetabaseObjectDescriptor.Parent](IMetabaseObjectDescriptor.Parent.htm).


Допустимые значения:


	- True. Текущий объект
	 будет установлен в качестве дочернего для указанного объекта;


	- False. Текущий объект
	 не будет установлен в качестве дочернего для указанного объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
