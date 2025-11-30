# IEaxDataAreaHierarchies.RemoveDependant

IEaxDataAreaHierarchies.RemoveDependant
-


# IEaxDataAreaHierarchies.RemoveDependant


## Синтаксис


RemoveDependant(S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Key: Integer; EId: String; T: [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm));


## Параметры


S. Измерение, в котором находится
 альтернативная иерархия;


Key. Ключ измерения;


EId. Идентификатор элемента
 измерения;


T. Формула преобразования данных.


## Описание


Метод RemoveDependant удаляет
 формулу преобразования данных из коллекции альтернативных иерархий.


## Комментарии


Для добавления формулы преобразования данных в альтернативную иерархию
 используйте [IEaxDataAreaHierarchies.AddDependant](IEaxDataAreaHierarchies.AddDependant.htm).


## Пример


Использование метода приведено в примере для [IEaxDataAreaHierarchies.FindByDE](IEaxDataAreaHierarchies.FindByDE.htm).


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
