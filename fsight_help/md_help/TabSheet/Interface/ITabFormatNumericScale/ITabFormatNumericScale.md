# ITabFormatNumericScale

ITabFormatNumericScale
-


# ITabFormatNumericScale


Сборка: Tab;


## Описание


Интерфейс ITabFormatNumericScale
 используется для работы с числовой шкалой.


## Иерархия наследования


           IGxScale


           [IGxNumericScale](ModDrawing.chm::/Interface/IGxNumericScale/IGxNumericScale.htm)


           ITabFormatNumericScale


## Комментарии


Для получения объекта данного типа необходимо, чтобы:


	- Свойство [ITabFormatCondition.Type](../ITabFormatCondition/ITabFormatCondition.Type.htm)
	 должно принять значение [TabConditionType.NumericScale](../../Enums/TabConditionType.htm);


	- Значение, возвращаемое свойством [ITabFormatCondition.Details](../ITabFormatCondition/ITabFormatCondition.Details.htm),
	 было приведено к [ITabFormatNumericScale](ITabFormatNumericScale.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TargetType](ITabFormatNumericScale.TargetType.htm)
		 Свойство TargetType
		 определяет назначение цифровой шкалы.


## Свойства, унаследованные от [IGxNumericScale](ModDrawing.chm::/Interface/IGxNumericScale/IGxNumericScale.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EndValue](ModDrawing.chm::/Interface/IGxNumericScale/IGxNumericScale.EndValue.htm)
		 Свойство EndValue определяет
		 конечное значение числовой шкалы.


		 ![](../../Property_Image.gif)
		 [StartValue](ModDrawing.chm::/Interface/IGxNumericScale/IGxNumericScale.StartValue.htm)
		 Свойство StartValue
		 определяет начальное значение числовой шкалы.


		 ![](../../Property_Image.gif)
		 [Value](ModDrawing.chm::/Interface/IGxNumericScale/IGxNumericScale.Value.htm)
		 Свойство Value определяет
		 значение числовой шкалы по индексу интервала.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetMaxValue](ITabFormatNumericScale.GetMaxValue.htm)
		 Метод GetMaxValue возвращает
		 максимальное значение числовой шкалы.


		 ![](../../Sub_Image.gif)
		 [GetMinValue](ITabFormatNumericScale.GetMinValue.htm)
		 Метод GetMinValue возвращает
		 минимальное значение числовой шкалы.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
