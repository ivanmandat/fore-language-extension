# IVZIntervalsLegend.CellPadding

IVZIntervalsLegend.CellPadding
-


# IVZIntervalsLegend.CellPadding


## Синтаксис


CellPadding: [IGxRectF](moddrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


## Описание


Свойство CellPadding определяет
 область легенды визуализатора, в которой будут находиться пункты.


## Комментарии


Для определения горизонтального и вертикального отступов элементов внутри
 легенды с интервалами используйте [IVZIntervalsLegend.CellSpacing](IVZIntervalsLegend.CellSpacing.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие формы, содержащей
 компоненты:


	- ReportBox с идентификатором
	 «ReportBox1»;


	- UiReport с идентификатором
	 «UiReport1», который является источником данных для «ReportBox1».


Дополнительно необходимо наличие:


	- регламентного отчета, который содержит таблицу. Одно из измерений
	 таблицы имеет тип метрики «Цвет фона».
	 Регламентный отчет является источником данных для «UiReport1»;


	- графического изображения Marker.png в корне диска C.


Добавьте ссылки на системные сборки: Drawing, Express, Tab, Visualizators.


	Sub UserProc;

	Var

	    Report: IPrxReport;

	    TS: ITabSheet;

	    Grid: IEaxGrid;

	    Pos, CellPadPos: IGxRectF;

	    Visualizer: IPrxVisualizerLegend;

	    i: Integer;

	    VZLegend: IVZIntervalsLegend;

	    VZLegendBase: IVZLegendBase;

	    Color: IGxColor;

	    Pen: IGxPenBase;

	    LegItem: IVZLegendItem;

	    ResourceImage: IVZResourceImage;

	Begin

	    // Получим регламентный отчёт

	    Report := UiReport1.Report;

	    // Получим активный лист отчёта

	    TS := (Report.ActiveSheet As IPrxTable) As ITabSheet;

	    // Вставим в отчёт легенду таблицы

	    Pos := New GxRectF.Create(0, 0, 0, 0);

	    Pos.Left := TS.View.Selection.Range.Location.X;

	    Pos.Top := TS.View.Selection.Range.Location.Y;

	    Pos.Width := TS.View.Selection.Range.Width;

	    Pos.Height := TS.View.Selection.Range.Height;

	    TS.Objects.Add("PrxVisualizerLegend", Pos);

	    Visualizer := TS.Objects.Item(TS.Objects.Count - 1).Extension As IPrxVisualizerLegend;

	    Grid := Report.DataArea.Views.Item(0) As IEaxGrid;

	    i := Grid.Legends.Add(Grid.IndicatorLegendAssignment(EaxGridIndicatorType.BackgroundColor));

	    Visualizer.SetEaxObjectLegend(Grid, EaxGridIndicatorType.BackgroundColor);

	    // Получим легенду таблицы, имеющую интервалы

	    VZLegend := Visualizer.PlacedControl As IVZIntervalsLegend;

	    VZLegendBase := VZLegend As IVZLegendBase;

	    // Создадим линии для верхнего и нижнего колонтитулов

	    Color := New GxColor.CreateRGB(120, 0, 120);

	    Pen := New GxPen.CreateSolid(Color, 5);

	    VZLegendBase.HeaderLine := Pen;

	    VZLegendBase.Footer := VZLegendBase.Header;

	    VZLegendBase.FooterLine := Pen;

	    // Изменим расположение объектов внутри подсказки и цвет заливки

	    CellPadPos := New GxRectF.Create(20, 100, 100, 0);

	    VZLegend.CellPadding := CellPadPos;

	    VZLegend.ColorApplying := LegendColorApplying.Background;

	    VZLegend.Style.Background := New GxSolidBrush.Create(GxColor.FromName("Yellow"));

	    // Создадим коллекцию пунктов легенды и добавим в неё первый пункт

	    VZLegend.Items := New VZLegendItems.Create;

	    LegItem := New VZLegendItem.Create;

	    LegItem.Text := "TEXT";

	    LegItem.Color := GxColor.FromName("Blue");

	    VZLegend.Items.Add(LegItem);

	    // Установим выравнивание пункта по левому краю

	    VZLegend.HorizontalCellsAligment := LegendItemsHorizontalAlignment.Right;

	    // Создадим маркер легенды и применим его для пункта легенды

	    VZLegend.Marker := New VZIntervalsLegendMarker.Create;

	    ResourceImage := New VZResourceImage.Create;

	    ResourceImage.Bitmap := New GxBitmap.CreateFromFile("C:\Marker.png");

	    VZLegend.Marker.Image := ResourceImage;

	    VZLegend.Marker.Mask := ResourceImage;

	    VZLegend.Marker.Marker := VisualizatorSizeMarkerShape.Custom;

	    // Обновим визуализатор

	    Visualizer.Update;

	End Sub UserProc;


После выполнения примера в выбранном пользователем диапазоне ячеек таблицы
 будет создана легенда карты. Легенда будет иметь желтый фон, один пункт
 с выравниванием по правому краю, маркер пункта синего цвета. Маркер будет
 импортирован из файла.


См. также:


[IVZIntervalsLegend](IVZIntervalsLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
