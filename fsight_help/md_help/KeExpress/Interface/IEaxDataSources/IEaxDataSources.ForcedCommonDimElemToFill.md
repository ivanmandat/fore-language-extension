# IEaxDataSources.ForcedCommonDimElemToFill

IEaxDataSources.ForcedCommonDimElemToFill
-


# IEaxDataSources.ForcedCommonDimElemToFill


## Синтаксис


ForcedCommonDimElemToFill(DimKey:
 Integer): Boolean;


## Параметры


DimKey. Ключ частного измерения
 в источнике данных экспресс-отчёта.


## Описание


Свойство ForcedCommonDimElemToFill
 определяет элемент частного измерения, заполняемый данными из источника
 без этого измерения.


## Комментарии


При выполнении принудительного переноса частного измерения в общие для
 источника, в котором это измерение отсутствует, данные будут располагаться
 в элементе ForcedCommonDimElemToFill
 переносимого измерения. Если задать свойству значение «-1», то данные
 из источника будут отображаться во всех элементах переносимого измерения.


Для определения возможности принудительного переноса частного измерения
 в общие используйте метод [IEaxDataSources.CanForcedCommonDim](IEaxDataSources.CanForcedCommonDim.htm).


Для принудительного переноса частного измерения в общие используйте
 свойство [IEaxDataSources.ForcedCommonDim](IEaxDataSources.ForcedCommonDim.htm).


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
