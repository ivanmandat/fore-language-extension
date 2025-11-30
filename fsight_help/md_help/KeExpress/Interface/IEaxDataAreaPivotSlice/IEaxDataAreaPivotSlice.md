# IEaxDataAreaPivotSlice

IEaxDataAreaPivotSlice
-


# IEaxDataAreaPivotSlice


Сборка: Express;


## Описание


Интерфейс IEaxDataAreaPivotSlice
 используется для работы со срезом аналитической области данных, построенном
 на многомерном источнике.


## Иерархия наследования


           IEaxDataAreaPivotSlice


## Комментарии


Для получения объекта данного типа необходимо срез, описываемый интерфейсом
 [IEaxDataAreaSlice](../IEaxDataAreaSlice/IEaxDataAreaSlice.htm),
 привести к типу IEaxDataAreaPivotSlice.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalcOnChangedData](IEaxDataAreaPivotSlice.CalcOnChangedData.htm)
		 Свойство CalcOnChangedData
		 определяет, используется ли [расчёт
		 формул](UiAnalyticalArea.chm::/Working_with_table_data/FormulaCalculation.htm) на измененных данных без предварительного
		 сохранения данных для среза аналитической области.


		 ![](../../Property_Image.gif)
		 [CombinedIndicatorSelection](IEaxDataAreaPivotSlice.CombinedIndicatorSelection.htm)
		 Свойство CombinedIndicatorSelection
		 возвращает отметку всех метрик измерений.


		 ![](../../Property_Image.gif)
		 [ExternalTransformations](IEaxDataAreaPivotSlice.ExternalTransformations.htm)
		 Свойство ExternalTransformations
		 возвращает коллекцию задач моделирования, используемых для преобразования
		 данных в срезе данных.


		 ![](../../Property_Image.gif)
		 [InvisibleDimensions](IEaxDataAreaPivotSlice.InvisibleDimensions.htm)
		 Свойство InvisibleDimensions
		 возвращает коллекцию невидимых измерений среза аналитической области
		 данных.


		 ![](../../Property_Image.gif)
		 [InvisibleParam](IEaxDataAreaPivotSlice.InvisibleParam.htm)
		 Свойство InvisibleParam
		 определяет, скрыт ли параметр с указанным идентификатором.


		 ![](../../Property_Image.gif)
		 [IsParameterized](IEaxDataAreaPivotSlice.IsParameterized.htm)
		 Свойство IsParameterized
		 возвращает признак наличия параметров у источника данных для среза.


		 ![](../../Property_Image.gif)
		 [ParamValues](IEaxDataAreaPivotSlice.ParamValues.htm)
		 Свойство ParamValues
		 определяет коллекцию значений параметров источника среза.


		 ![](../../Property_Image.gif)
		 [Pivot](IEaxDataAreaPivotSlice.Pivot.htm)
		 Свойство Pivot возвращает
		 объект для работы с основой для построения таблицы с данными.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Apply](IEaxDataAreaPivotSlice.Apply.htm)
		 Метод Apply применяет
		 импортированные параметры к срезу аналитической области данных.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
