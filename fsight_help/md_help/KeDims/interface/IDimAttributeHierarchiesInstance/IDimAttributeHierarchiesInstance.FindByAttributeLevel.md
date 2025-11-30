# IDimAttributeHierarchiesInstance.FindByAttributeLevel

IDimAttributeHierarchiesInstance.FindByAttributeLevel
-


# IDimAttributeHierarchiesInstance.FindByAttributeLevel


## Синтаксис


FindByAttributeLevel(AttributeKey: Integer; [LevelKey:
 Integer = 0]): [IDimAttributeHierarchyInstance](../IDimAttributeHierarchyInstance/IDimAttributeHierarchyInstance.htm);


## Параметры


AttributeKey. Ключ атрибута;


LevelKey. Уровень иерархии
 атрибута.


## Описание


Метод FindByAttributeLevel выполняет
 поиск данных альтернативной иерархии атрибута по его уровню.


## Комментарии


Если данные не найдены, то метод возвращает значение Null.


Если в параметр LevelKey передать
 значение «-1», то поиск выполняется независимо от уровня.


## Пример


Использование метода приведено в примере для [IDimAttributeHierarchyInstance.AttributeHierarchy](../IDimAttributeHierarchyInstance/IDimAttributeHierarchyInstance.AttributeHierarchy.htm).


См. также:


[IDimAttributeHierarchiesInstance](IDimAttributeHierarchiesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
