# IDimAttributeHierarchiesList.FindByLevel

IDimAttributeHierarchiesList.FindByLevel
-


# IDimAttributeHierarchiesList.FindByLevel


## Синтаксис


FindByLevel(LevelKey: Integer): [IDimAttributeHierarchy](../IDimAttributeHierarchy/IDimAttributeHierarchy.htm);


## Параметры


LevelKey. Уровень альтернативной
 иерархии.


## Описание


Метод FindByLevel выполняет
 поиск альтернативной иерархии атрибута в списке по уровню.


## Комментарии


Если альтернативная иерархия не найдена, то метод возвращает значение
 Null.


Если в параметр LevelKey передать
 значение «-1», то поиск выполняется независимо от уровня.


Для поиска альтернативных иерархий по идентификатору используйте [IDimAttributeHierarchiesList.FindById](IDimAttributeHierarchiesList.FindById.htm).


## Пример


Использование свойства приведено в примере для [IDimAttributeHierarchiesList.Count](IDimAttributeHierarchiesList.count.htm).


См. также:


[IDimAttributeHierarchiesList](IDimAttributeHierarchiesList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
