# IEaxDataAreaTransformations.TransformationElements

IEaxDataAreaTransformations.TransformationElements
-


# IEaxDataAreaTransformations.TransformationElements


## Синтаксис


TransformationElements(FilterBy: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)):
 IEaxTransformationTargetsArray;


## Параметры


FilterBy. Измерение, в которой
 находится формула преобразования данных.


## Описание


Свойство TransformationElements возвращает
 массив элементов измерения, для которых настроена формула преобразования
 данных.


## Комментарии


Если в параметр FilterBy передать
 Null, то свойство вернет элементы всех измерений, для которых настроена
 формула преобразования данных.


Для получения отметки элементов, для которых настроена формула преобразования
 данных, используйте [IEaxDataAreaTransformations.TransformationsSelection](IEaxDataAreaTransformations.TransformationsSelection.htm).


## Пример


Использование свойства приведено в примере для [IEaxDataAreaTransformations.IndexOf](IEaxDataAreaTransformations.IndexOf.htm).


См. также:


[IEaxDataAreaTransformations](IEaxDataAreaTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
