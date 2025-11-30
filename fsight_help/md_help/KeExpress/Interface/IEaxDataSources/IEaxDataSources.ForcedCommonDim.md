# IEaxDataSources.ForcedCommonDim

IEaxDataSources.ForcedCommonDim
-


# IEaxDataSources.ForcedCommonDim


## Синтаксис


ForcedCommonDim(DimKey: Integer): Boolean;


## Параметры


DimKey. Ключ частного измерения
 в источнике данных экспресс-отчёта.


## Описание


Свойство ForcedCommonDim определяет
 признак принудительного переноса частного измерения в общие.


## Комментарии


Допустимые значения:


	- True. Частное измерение
	 принудительно перенесено в общие;


	- False. Частное измерение
	 находится в частных.


Если свойству, имеющему значение False,
 задать значение True, то частное
 измерение будет принудительно перенесено в общие. Если свойству, имеющему
 значение True, задать значение
 False, то измерение будет перенесено
 обратно в частные.


Для определения возможности принудительного переноса частного измерения
 в общие используйте метод [IEaxDataSources.CanForcedCommonDim](IEaxDataSources.CanForcedCommonDim.htm).


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
