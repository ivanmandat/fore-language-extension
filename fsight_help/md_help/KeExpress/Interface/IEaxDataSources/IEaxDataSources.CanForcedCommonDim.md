# IEaxDataSources.CanForcedCommonDim

IEaxDataSources.CanForcedCommonDim
-


# IEaxDataSources.CanForcedCommonDim


## Синтаксис


CanForcedCommonDim(DimKey: Integer): Boolean;


## Параметры


DimKey. Ключ частного измерения
 в источнике данных экспресс-отчёта.


## Описание


Метод CanForcedCommonDim возвращает
 признак возможности принудительного переноса частного измерения в общие.


## Комментарии


Допустимые значения:


	- True. Частное измерение
	 можно принудительно перенести в общие;


	- False. Частное измерение
	 нельзя принудительно перенести в общие.


Для принудительного переноса частного измерения в общие используйте
 свойство [IEaxDataSources.ForcedCommonDim](IEaxDataSources.ForcedCommonDim.htm).


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
