# Chart: компонент

Chart: компонент
-


# Chart


## Описание


Компонент Chart предназначен
 для работы с диаграммой, построенной на основе элемента Canvas.


## Комментарии


Компонент Chart реализован классом
 [Chart](../../Classes/Chart/Chart/Chart.htm).


Компонент предназначен для представления данных на диаграмме. Эти данные
 отображаются в виде [рядов](../../Classes/Chart/ChartCanvasSerie/ChartCanvasSerie.htm)
 с набором [точек](../../Classes/Chart/ChartPoint/ChartPoint.htm).
 Для разных типов диаграмм задаются специфические настройки рядов и точек,
 выделенные в отдельные классы. Так ряды данных диаграммы с областями реализуются
 классом [ChartAreaSerie](../../Classes/Chart/ChartAreaSerie/ChartAreaSerie.htm),
 а точки - классом [ChartAreaPoint](../../Classes/Chart/ChartAreaPoint/ChartAreaPoint.htm).
 Для гистограммы - классами [ChartColumnSerie](../../Classes/Chart/ChartColumnSerie/ChartColumnSerie.htm)
 и [ChartColumnPoint](../../Classes/Chart/ChartColumnPoint/ChartColumnPoint.htm)
 соответственно, для круговой диаграммы - [ChartPieSerie](../../Classes/Chart/ChartPieSerie/ChartPieSerie.htm)
 и [ChartPiePoint](../../Classes/Chart/ChartPiePoint/ChartPiePoint.htm).
 Ряд данных сглаженной диаграммы представлен классом [ChartSplineSerie](../../Classes/Chart/ChartSplineSerie/ChartSplineSerie.htm).


При построении диаграммы может быть применена как [прямоугольная](../../Classes/Chart/ChartCanvasAxis/ChartCanvasAxis.htm)
 система координат, так и полярная. Последняя - реализована классами [ChartPolarXAxis](../../Classes/Chart/ChartPolarXAxis/ChartPolarXAxis.htm)
 и [ChartPolarYAxis](../../Classes/Chart/ChartPolarYAxis/ChartPolarYAxis.htm).


## Пример


Компонент Chart может иметь
 следующий вид:


![](ChartLine.png)


[Пример создания гистограммы](Chart_Example.htm)


[Пример создания гистограммы с накоплением](ChartPoint.htm)


[Пример создания диаграммы с областями](ChartArea_Example.htm)


[Пример создания круговой диаграммы](ChartPie.htm)


[Пример создания линейной диаграммы](ChartLine.htm)


[Пример создания сглаженной диаграммы](ChartSplineSerie.htm)


[Пример создания точечной диаграммы](ChartScatter.htm)


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Chart](dhtmlChart.chm::/Classes/Chart/Chart/Constructor_Chart.htm)
		 Конструктор Chart создает
		 экземпляр класса Chart.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoRotateMarker](dhtmlChart.chm::/Classes/Chart/Chart/Chart.AutoRotateMarker.htm)
		 Свойство AutoRotateMarker
		 определяет, установлен ли автоматический поворот [маркеров](UiDiagrams.chm::/Tuning_format/Format_line/Markers_Setup.htm)
		 на диаграмме.


		 ![](../../Property_Image.gif)
		 [BackgroundColor](dhtmlChart.chm::/Classes/Chart/Chart/Chart.BackgroundColor.htm)
		 Свойство BackgroundColor
		 определяет цвет фона диаграммы.


		 ![](../../Property_Image.gif)
		 [BorderColor](dhtmlChart.chm::/Classes/Chart/Chart/Chart.BorderColor.htm)
		 Свойство BorderColor
		 определяет цвет границы диаграммы.


		 ![](../../Property_Image.gif)
		 [BorderEnabled](dhtmlChart.chm::/Classes/Chart/Chart/Chart.BorderEnabled.htm)
		 Свойство BorderEnabled
		 определяет отображение границы диаграммы.


		 ![](../../Property_Image.gif)
		 [BorderStyle](dhtmlChart.chm::/Classes/Chart/Chart/Chart.BorderStyle.htm)
		 Свойство BorderStyle
		 определяет стиль линии границы диаграммы.


		 ![](../../Property_Image.gif)
		 [BorderWidth](dhtmlChart.chm::/Classes/Chart/Chart/Chart.BorderWidth.htm)
		 Свойство BorderWidth
		 определяет толщину границы диаграммы.


		 ![](../../Property_Image.gif)
		 [Center](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Center.htm)
		 Свойство Center определяет
		 центр диаграммы.


		 ![](../../Property_Image.gif)
		 [CircleSize](dhtmlChart.chm::/Classes/Chart/Chart/Chart.CircleSize.htm)
		 Свойство CircleSize
		 определяет размер внешней границы [круговой
		 диаграммы](UiDiagrams.chm::/Type_diagrams/UiDiagrams_round.htm).


		 ![](../../Property_Image.gif)
		 [CircleSizeInPercent](dhtmlChart.chm::/Classes/Chart/Chart/Chart.CircleSizeInPercent.htm)
		 Свойство CircleSizeInPercent
		 определяет способ задания размера внешней границы [круговой
		 диаграммы](UiDiagrams.chm::/Type_diagrams/UiDiagrams_round.htm).


		 ![](../../Property_Image.gif)
		 [CustomData](dhtmlChart.chm::/Classes/Chart/Chart/Chart.CustomData.htm)
		 Свойство CustomData
		 определяет данные пользователя.


		 ![](../../Property_Image.gif)
		 [Deep](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Deep.htm)
		 Свойство Deep определяет
		 длину оси Z при отображении [объёмного
		 вида диаграммы](UiDiagrams.chm::/Params_diagram/Setup_3DView.htm).


		 ![](../../Property_Image.gif)
		 [Draggable](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Draggable.htm)
		 Свойство Draggable определяет
		 признак того, допускается ли перетаскивание диаграммы.


		 ![](../../Property_Image.gif)
		 [EditMode](dhtmlChart.chm::/Classes/Chart/Chart/Chart.EditMode.htm)
		 Свойство EditMode определяет
		 объект, предназначенный для редактирования диаграммы.


		 ![](../../Property_Image.gif)
		 [ExcludeInvisibleSeries](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ExcludeInvisibleSeries.htm)
		 Свойство ExcludeInvisibleSeries
		 определяет признак необходимости исключения невидимых рядов
		 данных диаграммы из расчетов.


		 ![](../../Property_Image.gif)
		 [InnerCircleSize](dhtmlChart.chm::/Classes/Chart/Chart/Chart.InnerCircleSize.htm)
		 Свойство InnerCircleSize
		 определяет размер отступа внутренней границы от центра [круговой
		 диаграммы](UiDiagrams.chm::/Type_diagrams/UiDiagrams_round.htm).


		 ![](../../Property_Image.gif)
		 [InnerCircleSizeInPercent](dhtmlChart.chm::/Classes/Chart/Chart/Chart.InnerCircleSizeInPercent.htm)
		 Свойство InnerCircleSizeInPercent
		 определяет способ задания размера отступа внутренней границы от
		 центра [круговой
		 диаграммы](UiDiagrams.chm::/Type_diagrams/UiDiagrams_round.htm).


		 ![](../../Property_Image.gif)
		 [Inverted](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Inverted.htm)
		 Свойство Inverted определяет
		 признак того, является ли диаграмма инвертированной.


		 ![](../../Property_Image.gif)
		 [Is3D](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Is3D.htm)
		 Свойство Is3D определяет
		 отображение диаграммы в [объёмном
		 виде](UiDiagrams.chm::/Params_diagram/Setup_3DView.htm).


		 ![](../../Property_Image.gif)
		 [IsManhattan](dhtmlChart.chm::/Classes/Chart/Chart/Chart.IsManhattan.htm)
		 Свойство IsManhattan
		 устанавливает тип диаграммы - [объёмная
		 гистограмма с группами](UiDiagrams.chm::/Type_diagrams/3DHistogram_with_Groups.htm).


		 ![](../../Property_Image.gif)
		 [IsMixed](dhtmlChart.chm::/Classes/Chart/Chart/Chart.IsMixed.htm)
		 Свойство IsMixed определяет
		 признак того, является ли диаграмма диаграммой [смешанного
		 типа](UiDiagrams.chm::/Type_diagrams/UiDiagrams_mixed_diagram.htm).


		 ![](../../Property_Image.gif)
		 [LabelsLayer](dhtmlChart.chm::/Classes/Chart/Chart/Chart.LabelsLayer.htm)
		 Свойство LabelsLayer определяет
		 элемент, представляющий слой отрисовки подписей диаграммы.


		 ![](../../Property_Image.gif)
		 [Legend](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Legend.htm)
		 Свойство Legend определяет
		 легенду диаграммы.


		 ![](../../Property_Image.gif)
		 [LegendFormatter](dhtmlChart.chm::/Classes/Chart/Chart/Chart.LegendFormatter.htm)
		 Свойство LegendFormatter определяет
		 форматирование подписей легенды диаграммы.


		 ![](../../Property_Image.gif)
		 [MarkersEnabled](dhtmlChart.chm::/Classes/Chart/Chart/Chart.MarkersEnabled.htm)
		 Свойство MarkersEnabled
		 определяет признак отображения маркеров у рядов данных диаграммы.


		 ![](../../Property_Image.gif)
		 [MarkersSymbol](dhtmlChart.chm::/Classes/Chart/Chart/Chart.MarkersSymbol.htm)
		 Свойство MarkersSymbol
		 определяет форму маркера для рядов данных диаграммы.


		 ![](../../Property_Image.gif)
		 [Options](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Options.htm)
		 Свойство Options определяет
		 настройки диаграммы через [веб-сервис](ppsomservice.chm::/intro/pp7service_using.htm).


		 ![](../../Property_Image.gif)
		 [PaddingBottom](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PaddingBottom.htm)
		 Свойство PaddingBottom
		 определяет нижний отступ диаграммы.


		 ![](../../Property_Image.gif)
		 [PaddingLeft](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PaddingLeft.htm)
		 Свойство PaddingLeft
		 определяет левый отступ диаграммы.


		 ![](../../Property_Image.gif)
		 [PaddingRight](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PaddingRight.htm)
		 Свойство PaddingRight
		 определяет правый отступ диаграммы.


		 ![](../../Property_Image.gif)
		 [PaddingTop](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PaddingTop.htm)
		 Свойство PaddingTop
		 определяет верхний отступ диаграммы.


		 ![](../../Property_Image.gif)
		 [PlotArea](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PlotArea.htm)
		 Свойство PlotArea определяет
		 область отрисовки диаграммы.


		 ![](../../Property_Image.gif)
		 [Polar](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Polar.htm)
		 Свойство Polar определяет
		 признак того, использует ли диаграмма полярную систему координат.


		 ![](../../Property_Image.gif)
		 [Rotation](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Rotation.htm)
		 Свойство Rotation определяет
		 угол поворота [круговой
		 диаграммы](UiDiagrams.chm::/Type_diagrams/UiDiagrams_round.htm).


		 ![](../../Property_Image.gif)
		 [Scroller](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Scroller.htm)
		 Свойство Scroller определяет
		 элемент прокрутки диаграммы.


		 ![](../../Property_Image.gif)
		 [Selection](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Selection.htm)
		 Свойство Selection
		 определяет объект, содержащий информацию о выделенных элементах
		 рядов диаграммы.


		 ![](../../Property_Image.gif)
		 [Series](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Series.htm)
		 Свойство Series определяет
		 массив рядов данных диаграммы.


		 ![](../../Property_Image.gif)
		 [Stacking](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Stacking.htm)
		 Свойство Stacking определяет
		 тип накопления на диаграмме.


		 ![](../../Property_Image.gif)
		 [Subtitle](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Subtitle.htm)
		 Свойство Subtitle определяет
		 параметры дополнительного заголовка диаграммы.


		 ![](../../Property_Image.gif)
		 [Title](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Title.htm)
		 Свойство Title определяет
		 параметры заголовка диаграммы.


		 ![](../../Property_Image.gif)
		 [ToolTip](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ToolTip.htm)
		 Свойство ToolTip определяет
		 параметры всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [ToolTipDataFormat](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ToolTipDataFormat.htm)
		 Свойство ToolTipDataFormat
		 определяет формат данных всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [ToolTipDelay](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ToolTipDelay.htm)
		 Свойство ToolTipDelay
		 определяет задержку перед отображением всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [ToolTipFollowPointer](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ToolTipFollowPointer.htm)
		 Свойство ToolTipFollowPointer
		 определяет поведение всплывающей подсказки при перемещении курсора
		 мыши.


		 ![](../../Property_Image.gif)
		 [ToolTipFormatter](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ToolTipFormatter.htm)
		 Свойство ToolTipFormatter
		 определяет текстовую маску всплывающей подсказки.


		 ![](../../Property_Image.gif)
		 [Type](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Type.htm)
		 Свойство Type определяет
		 тип диаграммы.


		 ![](../../Property_Image.gif)
		 [UseIndicatorColorForToolTipBorder](dhtmlChart.chm::/Classes/Chart/Chart/Chart.UseIndicatorColorForToolTipBorder.htm)
		 Свойство UseIndicatorColorForToolTipBorder
		 определяет окрашивание границы всплывающей подсказки в цвет ряда.


		 ![](../../Property_Image.gif)
		 [UseMarkersThinning](dhtmlChart.chm::/Classes/Chart/Chart/Chart.UseMarkersThinning.htm)
		 Свойство UseMarkersThinning
		 определяет признак скрытия маркеров при условии, если хотя бы
		 некоторые из них перекрывают друг друга.


		 ![](../../Property_Image.gif)
		 [UseSelectOnRightClick](dhtmlChart.chm::/Classes/Chart/Chart/Chart.UseSelectOnRightClick.htm)
		 Свойство UseSelectOnRightClick
		 определяет признак того, будет ли на диаграмме применяться
		 выделение по правому щелчку мыши.


		 ![](../../Property_Image.gif)
		 [UseSoftPadding](dhtmlChart.chm::/Classes/Chart/Chart/Chart.UseSoftPadding.htm)
		 Свойство UseSoftPadding
		 определяет признак использования альтернативного расчета отступов
		 диаграммы.


		 ![](../../Property_Image.gif)
		 [UseZeroSubstitution](dhtmlChart.chm::/Classes/Chart/Chart/Chart.UseZeroSubstitution.htm)
		 Свойство UseZeroSubstitution
		 определяет признак того, что пустые значения в рядах данных заменяются
		 нулями.


		 ![](../../Property_Image.gif)
		 [XAxis](dhtmlChart.chm::/Classes/Chart/Chart/Chart.XAxis.htm)
		 Свойство XAxis определяет
		 ось категорий диаграммы.


		 ![](../../Property_Image.gif)
		 [YAxis](dhtmlChart.chm::/Classes/Chart/Chart/Chart.YAxis.htm)
		 Свойство YAxis определяет
		 ось значений диаграммы.


		 ![](../../Property_Image.gif)
		 [YSAxis](dhtmlChart.chm::/Classes/Chart/Chart/Chart.YSAxis.htm)
		 Свойство YSAxis определяет
		 дополнительную ось значений диаграммы.


		 ![](../../Property_Image.gif)
		 [ZAxis](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ZAxis.htm)
		 Свойство ZAxis определяет
		 ось глубины диаграммы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addSerie](dhtmlChart.chm::/Classes/Chart/Chart/Chart.addSerie.htm)
		 Метод addSerie добавляет
		 новый ряд данных на диаграмму.


		 ![](../../Sub_Image.gif)
		 [beginUpdate](dhtmlChart.chm::/Classes/Chart/Chart/Chart.beginUpdate.htm)
		 Метод beginUpdate отключает
		 перерисовку диаграммы до тех пор, пока не будет вызван метод [endUpdate](dhtmlChart.chm::/Classes/Chart/Chart/Chart.endUpdate.htm).


		 ![](../../Sub_Image.gif)
		 [destroy](dhtmlChart.chm::/Classes/Chart/Chart/Chart.destroy.htm)
		 Метод destroy удаляет
		 диаграмму.


		 ![](../../Sub_Image.gif)
		 [endUpdate](dhtmlChart.chm::/Classes/Chart/Chart/Chart.endUpdate.htm)
		 Метод endUpdate включает
		 перерисовку диаграммы и обновляет её.


		 ![](../../Sub_Image.gif)
		 [getChartBounds](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getChartBounds.htm)
		 Метод getChartBounds
		 возвращает прямоугольную область контейнера, в котором расположена
		 диаграмма.


		 ![](../../Sub_Image.gif)
		 [getColumnSeriesCount](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getColumnSeriesCount.htm)
		 Метод getColumnSeriesCount
		 возвращает количество рядов данных диаграммы в виде столбцов.


		 ![](../../Sub_Image.gif)
		 [getForecastRange](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getForecastRange.htm)
		 Метод getForecastRange возвращает
		 для диаграммы максимальный прогноз назад и вперед.


		 ![](../../Sub_Image.gif)
		 [getFreeArea](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getFreeArea.htm)
		 Метод getFreeArea возвращает
		 [область
		 построения диаграммы](UiDiagrams.chm::/Tuning_format/uidiagrams_tuning_construction_area_digramm.htm).


		 ![](../../Sub_Image.gif)
		 [getIsCartesianChart](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getIsCartesianChart.htm)
		 Метод getIsCartesianChart
		 возвращает признак того, использует ли диаграмма декартову
		 систему координат.


		 ![](../../Sub_Image.gif)
		 [getIsResizing](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getIsResizing.htm)
		 Метод getIsResizing
		 возвращает признак того, изменяются ли в данный момент размеры
		 диаграммы.


		 ![](../../Sub_Image.gif)
		 [getPaddings](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getPaddings.htm)
		 Метод getPaddings возвращает объект,
		 содержащий отступы диаграммы.


		 ![](../../Sub_Image.gif)
		 [getPaddingWasApplied](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getPaddingWasApplied.htm)
		 Метод getPaddingWasApplied
		 возвращает объект, содержащий признаки применения отступов диаграммы.


		 ![](../../Sub_Image.gif)
		 [getPieSeriesCount](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getPieSeriesCount.htm)
		 Метод getPieSeriesCount возвращает
		 количество рядов данных [круговой
		 диаграммы](UiDiagrams.chm::/Type_diagrams/UiDiagrams_round.htm).


		 ![](../../Sub_Image.gif)
		 [getPlotBorders](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getPlotBorders.htm)
		 Метод getPlotBorders возвращает
		 объект с размерами и отступами диаграммы.


		 ![](../../Sub_Image.gif)
		 [getSerie](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getSerie.htm)
		 Метод getSerie возвращает
		 ряд данных диаграммы по индексу.


		 ![](../../Sub_Image.gif)
		 [getSerieByDataIndex](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getSerieByDataIndex.htm)
		 Метод getSerieByDataIndex
		 возвращает ряд данных диаграммы по индексу.


		 ![](../../Sub_Image.gif)
		 [getSeriesByStackId](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getSeriesByStackId.htm)
		 Метод getSeriesByStackId возвращает
		 массив рядов данных по уникальному идентификатору накоплений диаграммы.


		 ![](../../Sub_Image.gif)
		 [getSeriesStacks](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getSeriesStacks.htm)
		 Метод getSeriesStacks пересчитывает
		 все накопления диаграммы для дальнейших расчетов.


		 ![](../../Sub_Image.gif)
		 [getSeriesTypes](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getSeriesTypes.htm)
		 Метод getSeriesTypes
		 возвращает массив типов рядов диаграммы.


		 ![](../../Sub_Image.gif)
		 [getStackExtrems](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getStackExtrems.htm)
		 Метод getStackExtrems возвращает
		 рассчитанные значения накоплений диаграммы.


		 ![](../../Sub_Image.gif)
		 [getStackGroups](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getStackGroups.htm)
		 Метод getStackGroups возвращает
		 массив уникальных идентификаторов накоплений диаграммы.


		 ![](../../Sub_Image.gif)
		 [getStats](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getStats.htm)
		 Метод getStats возвращает
		 статистические характеристики диаграммы.


		 ![](../../Sub_Image.gif)
		 [getZoom](dhtmlChart.chm::/Classes/Chart/Chart/Chart.getZoom.htm)
		 Метод getZoom возвращает
		 параметры масштабирования диаграммы.


		 ![](../../Sub_Image.gif)
		 [hoverItems](dhtmlChart.chm::/Classes/Chart/Chart/Chart.hoverItems.htm)
		 Метод hoverItems устанавливает
		 подсветку указанных рядов диаграммы.


		 ![](../../Sub_Image.gif)
		 [isWidthDataSupported](dhtmlChart.chm::/Classes/Chart/Chart/Chart.isWidthDataSupported.htm)
		 Метод isWidthDataSupported
		 определяет признак того, используется ли[
		 показатель ширины/угла](dhtmlChart.chm::/Classes/Chart/ChartColumnSerie/ChartColumnSerie.WidthData.htm).


		 ![](../../Sub_Image.gif)
		 [redraw](dhtmlChart.chm::/Classes/Chart/Chart/Chart.redraw.htm)
		 Метод redraw перерисовывает
		 диаграмму.


		 ![](../../Sub_Image.gif)
		 [redrawSeries](dhtmlChart.chm::/Classes/Chart/Chart/Chart.redrawSeries.htm)
		 Метод redrawSeries
		 перерисовывает ряды данных диаграммы.


		 ![](../../Sub_Image.gif)
		 [removeAllSeries](dhtmlChart.chm::/Classes/Chart/Chart/Chart.removeAllSeries.htm)
		 Метод removeAllSeries
		 удаляет все ряды данных диаграммы.


		 ![](../../Sub_Image.gif)
		 [removeSerie](dhtmlChart.chm::/Classes/Chart/Chart/Chart.removeSerie.htm)
		 Метод removeSerie удаляет
		 указанный ряд данных диаграммы.


		 ![](../../Sub_Image.gif)
		 [resize](dhtmlChart.chm::/Classes/Chart/Chart/Chart.resize.htm)
		 Метод resize изменяет
		 размеры диаграммы.


		 ![](../../Sub_Image.gif)
		 [selectItems](dhtmlChart.chm::/Classes/Chart/Chart/Chart.selectItems.htm)
		 Метод selectItems выделяет
		 указанные ряды диаграммы.


		 ![](../../Sub_Image.gif)
		 [setHeight](dhtmlChart.chm::/Classes/Chart/Chart/Chart.setHeight.htm)
		 Метод setHeight
		 устанавливает высоту диаграммы.


		 ![](../../Sub_Image.gif)
		 [setHoverPoint](dhtmlChart.chm::/Classes/Chart/Chart/Chart.setHoverPoint.htm)
		 Метод setHoverPoint
		 устанавливает выделение точки на диаграмме.


		 ![](../../Sub_Image.gif)
		 [setInteractivity](dhtmlChart.chm::/Classes/Chart/Chart/Chart.setInteractivity.htm)
		 Метод setInteractivity
		 определяет использование интерактивности диаграммы.


		 ![](../../Sub_Image.gif)
		 [setWidth](dhtmlChart.chm::/Classes/Chart/Chart/Chart.setWidth.htm)
		 Метод setWidth
		 устанавливает ширину диаграммы.


		 ![](../../Sub_Image.gif)
		 [updateLegendHighlightMode](dhtmlChart.chm::/Classes/Chart/Chart/Chart.updateLegendHighlightMode.htm)
		 Метод updateLegendHighlightMode
		 обновляет режим выделения в легенде при включении или выключении
		 редактирования диаграммы.


## События


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [Deselected](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Deselected.htm)
		 Событие Deselected наступает
		 при снятии выделения с элементов рядов диаграммы.


		 ![](../../Event_Image.gif)
		 [ItemsHovered](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ItemsHovered.htm)
		 Событие ItemsHovered
		 наступает при наведении курсора на ряд диаграммы.


		 ![](../../Event_Image.gif)
		 [ItemsSelected](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ItemsSelected.htm)
		 Событие ItemsSelected
		 наступает при выделении ряда диаграммы.


		 ![](../../Event_Image.gif)
		 [ItemsVisibilityChanged](dhtmlChart.chm::/Classes/Chart/Chart/Chart.ItemsVisibilityChanged.htm)
		 Событие ItemsVisibilityChanged
		 наступает при изменении видимости ряда данных диаграммы.


		 ![](../../Event_Image.gif)
		 [PointMouseOut](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PointMouseOut.htm)
		 Событие PointMouseOut
		 наступает после покидания курсором мыши точки ряда данных диаграммы.


		 ![](../../Event_Image.gif)
		 [PointMouseOver](dhtmlChart.chm::/Classes/Chart/Chart/Chart.PointMouseOver.htm)
		 Событие PointMouseOver
		 наступает после наведения курсором мыши на точку ряда данных диаграммы.


		 ![](../../Event_Image.gif)
		 [Rendered](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Rendered.htm)
		 Событие Rendered наступает
		 при отрисовке диаграммы.


		 ![](../../Event_Image.gif)
		 [Scroll](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Scroll.htm)
		 Событие Scroll наступает
		 во время прокрутки оси X диаграммы.


		 ![](../../Event_Image.gif)
		 [Selected](dhtmlChart.chm::/Classes/Chart/Chart/Chart.Selected.htm)
		 Событие Selected наступает
		 при выделении элемента ряда диаграммы.


См. также:


[DHTML-компоненты](DHTML.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
