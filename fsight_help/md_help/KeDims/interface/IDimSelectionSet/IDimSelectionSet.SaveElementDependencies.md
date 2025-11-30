# IDimSelectionSet.SaveElementDependencies

IDimSelectionSet.SaveElementDependencies
-


# IDimSelectionSet.SaveElementDependencies


## Синтаксис


SaveElementDependencies(Value: [IMbElementDependencies](KeSom.chm::/Interface/IMbElementDependencies/IMbElementDependencies.htm);
 [ObjectKey: Integer = -1]);


## Параметры


Value - зависимости, в список
 которых будут добавлены зависимости от элементов, имеющихся в отметке.


ObjectKey - ключ объекта, для
 которого необходимо установить зависимости. По умолчанию передается значение
 «-1», при этом ключ объекта должен быть задан в условии [Where](KeSom.chm::/Interface/IMbElementDependencies/IMbElementDependencies.Where.htm)
 сохраняемой коллекции зависимостей Value.


## Описание


Метод SaveElementDependencies
 осуществляет сохранение коллекции зависимостей от элементов, содержащихся
 в отметках справочников.


## Комментарии


Данный метод является расширенной версией метода [IDimSelection.SaveElementDependencies](../IDimSelection/IDimSelection.SaveElementDependencies.htm).
 При выполнении метода осуществляется сохранение ссылок на отмеченные элементы
 всех справочников, входящих в текущую коллекцию.


См. также:


[IDimSelectionSet](IDimSelectionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
