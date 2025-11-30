# ITableCreator.ObjectCreateInfo

ITableCreator.ObjectCreateInfo
-


# ITableCreator.ObjectCreateInfo


## Синтаксис


ObjectCreateInfo: [IMetabaseObjectCreateInfo](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm);


## Описание


Свойство ObjectCreateInfo определяет описание объекта репозитория, который будет соответствовать создаваемой таблице.


## Комментарии


Описание создаваемого объекта может быть получено при выполнении метода [IMetabase.CreateCreateInfo](KeSom.chm::/Interface/IMetabase/IMetabase.CreateCreateInfo.htm). В данном описании можно указать все необходимые параметры создаваемой в репозитории таблицы (наименование, идентификатор, родительскую папку и т.д.). Класс создаваемого объекта будет установлен автоматически при выполнении метода [Execute](ITableCreator.Execute.htm) и будет иметь значение [MetabaseObjectClass.KE_CLASS_TABLE](KeSom.chm::/Enums/MetabaseObjectClass.htm).


## Пример


Пример использования приведен в описании метода [Execute](ITableCreator.Execute.htm).


См. также:


[ITableCreator](ITableCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
