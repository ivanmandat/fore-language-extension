# IEaxDataAreaHierarchies.Find

IEaxDataAreaHierarchies.Find
-


# IEaxDataAreaHierarchies.Find


## Синтаксис


Find(S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Key: Integer; EId: String): [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm);


## Параметры


S. Измерение, в котором находится
 альтернативная иерархия;


Key. Ключ измерения;


EId. Идентификатор элемента
 измерения.


## Описание


Метод Find осуществляет
 поиск формулы преобразования данных по идентификатору элемента измерения.


## Комментарии


Если формула не будет найдена, то метод вернет значение Null.


Для поиска формулы преобразования данных по индексу элемента измерения
 используйте [IEaxDataAreaHierarchies.FindByDE](IEaxDataAreaHierarchies.FindByDE.htm).


## Пример


Использование метода приведено в примере для [IEaxDataAreaHierarchies.FindByDE](IEaxDataAreaHierarchies.FindByDE.htm).


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
