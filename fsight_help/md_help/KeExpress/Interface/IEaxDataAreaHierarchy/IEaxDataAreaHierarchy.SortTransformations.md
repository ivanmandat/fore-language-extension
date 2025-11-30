# IEaxDataAreaHierarchy.SortTransformations

IEaxDataAreaHierarchy.SortTransformations
-


# IEaxDataAreaHierarchy.SortTransformations


## Синтаксис


SortTransformations: [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Описание


Свойство SortTransformations
 возвращает коллекцию формул преобразования данных у элементов альтернативной
 иерархии.


## Комментарии


Формула, которая будет указана в [выражении](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.Expression.htm)
 формулы преобразования, должна возвращать целочисленное значение. Данное
 значение будет рассматриваться как значение атрибута Порядок и в соответствии
 с ним элементы будут переставляться в списке. Направление сортировки элементов
 указывается в свойстве [IEaxDataAreaHierarchy.SortDirection](IEaxDataAreaHierarchy.SortDirection.htm).
 Для выполнения сортировки элементов альтернативной иерархии используйте
 метод [IEaxDataAreaHierarchy.Sort](IEaxDataAreaHierarchy.Sort.htm).


См. также:


[IEaxDataAreaHierarchy](IEaxDataAreaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
