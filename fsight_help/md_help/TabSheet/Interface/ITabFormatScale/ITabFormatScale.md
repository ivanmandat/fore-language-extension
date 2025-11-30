# ITabFormatScale

ITabFormatScale
-


# ITabFormatScale


Сборка: Tab;


## Описание


Интерфейс ITabFormatScale содержит
 свойства условного формата, позволяющего сформировать цветовую шкалу на
 основании значений ячеек.


## Иерархия наследования


           [IGxScale](ModDrawing.chm::/Interface/IGxScale/IGxScale.htm)


           [IGxColorScale](ModDrawing.chm::/Interface/IGxColorScale/IGxColorScale.htm)


           ITabFormatScale


## Комментарии


Параметры условного формата задаются в свойстве [ITabFormatCondition.Details](../ITabFormatCondition/ITabFormatCondition.Details.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TargetType](ITabFormatScale.TargetType.htm)
		 Свойство TargetType
		 определяет область применения цветовой шкалы.


## Свойства, унаследованные от [IGxColorScale](ModDrawing.chm::/Interface/IGxColorScale/IGxColorScale.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Color](../../../ModDrawing/Interface/IGxColorScale/IGxColorScale.Color.htm)
		 Свойство Color определяет
		 цвет указанного интервала шкалы.


		 ![](../../Property_Image.gif)
		 [EndColor](../../../ModDrawing/Interface/IGxColorScale/IGxColorScale.EndColor.htm)
		 Свойство EndColor определяет
		 конечный цвет шкалы.


		 ![](../../Property_Image.gif)
		 [StartColor](../../../ModDrawing/Interface/IGxColorScale/IGxColorScale.StartColor.htm)
		 Свойство StartColor
		 определяет начальный цвет шкалы.


## Свойства, унаследованные от [IGxScale](ModDrawing.chm::/Interface/IGxScale/IGxScale.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoCalculable](../../../ModDrawing/Interface/IGxScale/IGxScale.AutoCalculable.htm)
		 Свойство AutoCalculable
		 определяет необходимо ли автоматически рассчитывать значения интервалов.


		 ![](../../Property_Image.gif)
		 [IntervalsCount](../../../ModDrawing/Interface/IGxScale/IGxScale.IntervalsCount.htm)
		 Свойство IntervalsCount
		 определяет количество интервалов.


		 ![](../../Property_Image.gif)
		 [Item](../../../ModDrawing/Interface/IGxScale/IGxScale.Item.htm)
		 Свойство Item определяет
		 значение интервала по индексу.


		 ![](../../Property_Image.gif)
		 [Type](../../../ModDrawing/Interface/IGxScale/IGxScale.Type.htm)
		 Свойство Type определяет
		 тип таблицы стилей.


		 ![](../../Property_Image.gif)
		 [UseAutoValues](../../../ModDrawing/Interface/IGxScale/IGxScale.UseAutoValues.htm)
		 Свойство UseAutoValues
		 определяет необходимо ли использовать автоподбор значений.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetAutoColor](ITabFormatScale.GetAutoColor.htm)
		 Метод GetAutoColor
		 возвращает цвет по индексу.


		 ![](../../Sub_Image.gif)
		 [GetIntervalValueBound](ITabFormatScale.GetIntervalValueBound.htm)
		 Метод GetIntervalValueBound
		 получает границу интервала.


		 ![](../../Sub_Image.gif)
		 [GetUsedIntervalIndex](ITabFormatScale.GetUsedIntervalIndex.htm)
		 Метод GetUsedIntervalIndex
		 используется для получения количества используемых интервалов
		 шкалы.


		 ![](../../Sub_Image.gif)
		 [GetUsedIntervalsCount](ITabFormatScale.GetUsedIntervalsCount.htm)
		 Метод GetUsedIntervalsCount
		 используется для получения индекса интервала шкалы по индексу
		 используемого интервала.


		 ![](../../Sub_Image.gif)
		 [Recalc](ITabFormatScale.Recalc.htm)
		 Метод Recalc выполняет
		 пересчет цветовой шкалы.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
