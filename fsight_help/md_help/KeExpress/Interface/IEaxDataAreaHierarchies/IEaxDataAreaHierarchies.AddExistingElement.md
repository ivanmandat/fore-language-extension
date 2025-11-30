# IEaxDataAreaHierarchies.AddExistingElement

IEaxDataAreaHierarchies.AddExistingElement
-


# IEaxDataAreaHierarchies.AddExistingElement


## Синтаксис


AddExistingElement(Original: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);
 CD: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);
 Element: Integer; Name: String);


## Параметры


Original. Измерение, в котором
 находится альтернативная иерархия;


CD. Измерение фактов;


Element. Элемент альтернативной
 иерархии;


Name. Наименование элемента.


## Описание


Метод AddExistingElement добавляет
 в измерение фактов элемент из оригинальной иерархии.


## Комментарии


Для получения отметки элементов, добавленных пользователем вручную,
 используйте [IEaxDataAreaHierarchies.AddedElementsSelection](IEaxDataAreaHierarchies.AddedElementsSelection.htm).


Для применения накопленных изменений в измерении фактов к измерению
 с альтернативной иерархией используйте [IEaxDataAreaHierarchies.PushChangesToDimInstance](IEaxDataAreaHierarchies.PushChangesToDimInstance.htm).


## Пример


Использование метода приведено в примере для [IEaxDataAreaHierarchies.PushChangesToDimInstance](IEaxDataAreaHierarchies.PushChangesToDimInstance.htm).


См. также:


[IEaxDataAreaHierarchies](IEaxDataAreaHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
