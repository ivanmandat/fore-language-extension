# IEaxDataAreaTransformations.Add

IEaxDataAreaTransformations.Add
-


# IEaxDataAreaTransformations.Add


## Синтаксис


Add(SS: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);
 S: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 el: Integer): [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm);


## Параметры


SS. Отметка измерения, в которой
 находится формула преобразования данных;


S. Измерение, в котором находится
 отметка;


el. Элемент измерения.


## Описание


Метод Add добавляет формулу
 преобразования данных в коллекцию.


## Комментарии


Параметр el используется при
 работе с формулой преобразования [вычисляемого
 элемента](../IEaxDataAreaSlice/IEaxDataAreaSlice.CalcTransformations.htm). Для всех других формул преобразования в качестве значения
 параметра el необходимо передавать
 значение «-1».


## Пример


Использование метода приведено в примере для [IEaxDataAreaSlice.CalcTransformations](../IEaxDataAreaSlice/IEaxDataAreaSlice.CalcTransformations.htm),
 [IEaxDataAreaSlice.FilterTransformations](../IEaxDataAreaSlice/IEaxDataAreaSlice.FilterTransformations.htm),
 [IEaxDataAreaSlice.SortTransformations](../IEaxDataAreaSlice/IEaxDataAreaSlice.SortTransformations.htm).


См. также:


[IEaxDataAreaTransformations](IEaxDataAreaTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
