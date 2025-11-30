# IPrxChart

IPrxChart
-


# IPrxChart


Сборка: Report;


## Описание


Интерфейс IPrxChart содержит
 свойства и методы объекта регламентного отчета - «Диаграмма».


## Иерархия наследования


           IPrxChart


## Комментарии


Для работы с объектом регламентного отчета «Карта» используйте свойства
 и методы интерфейса [IPrxMap](../IPrxMap/IPrxMap.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoAdjust](IPrxChart.AutoAdjust.htm)
		 Свойство AutoAdjust
		 определяет, будут ли автоматически изменяться данные диаграммы
		 в соответствии с изменениями размеров области данных, на которой
		 она построена.


		 ![](../../Property_Image.gif)
		 [Data](IPrxChart.Data.htm)
		 Свойство Data определяет
		 адрес диапазона, из которого будут браться числовые данные для
		 построения диаграммы.


		 ![](../../Property_Image.gif)
		 [DataRange](IPrxChart.DataRange.htm)
		 Свойство DataRange
		 возвращает диапазон таблицы, содержащий числовые данные, по которым
		 строится диаграмма.


		 ![](../../Property_Image.gif)
		 [EaxChart](IPrxChart.EaxChart.htm)
		 Свойство EaxChart определяет
		 диаграмму, источником данных которой является аналитическая область
		 данных.


		 ![](../../Property_Image.gif)
		 [ExcludedPoints](IPrxChart.ExcludedPoints.htm)
		 Свойство ExcludedPoints
		 определяет диапазон индексов точек, подписи которых исключены
		 из списка отображаемых на оси категорий диаграммы.


		 ![](../../Property_Image.gif)
		 [IncludeHidden](IPrxChart.IncludeHidden.htm)
		 Свойство IncludeHidden
		 определяет состояние опции «Отображать скрытые данные».


		 ![](../../Property_Image.gif)
		 [Name](IPrxChart.Name.htm)
		 Свойство Name определяет
		 наименование диаграммы.


		 ![](../../Property_Image.gif)
		 [PointChartMode](IPrxChart.PointChartMode.htm)
		 Свойство PointChartMode
		 определяет способ передачи данных.


		 ![](../../Property_Image.gif)
		 [PointNameByIndex](IPrxChart.PointNameByIndex.htm)
		 Свойство PointNameByIndex
		 возвращает имя точки, передаваемой посредством входного параметра
		 PointIndex.


		 ![](../../Property_Image.gif)
		 [Points](IPrxChart.Points.htm)
		 Свойство Points определяет
		 адрес диапазона, из которого будут браться наименования точек
		 диаграммы.


		 ![](../../Property_Image.gif)
		 [PointsFormatted](IPrxChart.PointsFormatted.htm)
		 Свойство PointsFormatted
		 определяет, использовать ли форматированный текст ячеек для наименований
		 точек диаграммы.


		 ![](../../Property_Image.gif)
		 [PointsRange](IPrxChart.PointsRange.htm)
		 Свойство PointsRange
		 возвращает диапазон таблицы с данными, из которых берутся наименования
		 точек диаграммы.


		 ![](../../Property_Image.gif)
		 [PointsSimple](IPrxChart.PointsSimple.htm)
		 Свойство PointsSimple
		 определяет порядок формирования значений для наименования точек
		 диаграммы.


		 ![](../../Property_Image.gif)
		 [SerieAction](IPrxChart.SerieAction.htm)
		 Свойство SerieAction
		 определяет макрос для обработки событий рядов диаграммы.


		 ![](../../Property_Image.gif)
		 [Series](IPrxChart.Series.htm)
		 Свойство Series определяет
		 адрес диапазона, из которого будут браться наименования рядов
		 диаграммы.


		 ![](../../Property_Image.gif)
		 [SeriesInRows](IPrxChart.SeriesInRows.htm)
		 Свойство SeriesInRows
		 определяет способ интерпретации числовых рядов в области данных:
		 расположение рядов в строках или столбцах.


		 ![](../../Property_Image.gif)
		 [SeriesRange](IPrxChart.SeriesRange.htm)
		 Свойство SeriesRange
		 возвращает диапазон таблицы, из которого берутся наименования
		 рядов диаграммы.


		 ![](../../Property_Image.gif)
		 [SeriesSimple](IPrxChart.SeriesSimple.htm)
		 Свойство SeriesSimple
		 определяет порядок формирования значений для наименования рядов
		 диаграммы.


		 ![](../../Property_Image.gif)
		 [SeriesFormatted](IPrxChart.SeriesFormatted.htm)
		 Свойство SeriesFormatted
		 определяет, использовать ли форматированный текст ячеек для наименований
		 рядов диаграммы.


		 ![](../../Property_Image.gif)
		 [Sheet](IPrxChart.Sheet.htm)
		 Свойство Sheet определяет
		 лист регламентного отчета, на котором находятся исходные данные
		 для построения диаграммы.


		 ![](../../Property_Image.gif)
		 [Slice](IPrxChart.Slice.htm)
		 Свойство Slice определяет
		 срез, который будет использоваться в качестве источника данных
		 для диаграммы.


		 ![](../../Property_Image.gif)
		 [SourceType](IPrxChart.SourceType.htm)
		 Свойство SourceType
		 определяет тип источника диаграммы.


		 ![](../../Property_Image.gif)
		 [UndoRedo](IPrxChart.UndoRedo.htm)
		 Свойство UndoRedo определяет
		 параметры стека изменений (отмены/повтора) диаграммы регламентного
		 отчета.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](IPrxChart.BeginUpdate.htm)
		 Метод BeginUpdate отключает
		 обновление диаграммы.


		 ![](../../Sub_Image.gif)
		 [DoSerieClick](IPrxChart.DoSerieClick.htm)
		 Метод DoSerieClick
		 генерирует событие щелчка кнопки мыши на ряде диаграммы.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](IPrxChart.EndUpdate.htm)
		 Метод EndUpdate
		 возобновляет обновление диаграммы.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
