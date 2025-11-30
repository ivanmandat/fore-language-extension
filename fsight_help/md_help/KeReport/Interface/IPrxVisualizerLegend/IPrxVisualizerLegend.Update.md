# IPrxVisualizerLegend.Update

IPrxVisualizerLegend.Update
-


# IPrxVisualizerLegend.Update


## Синтаксис


Update;


## Описание


Метод Update обновляет легенду
 визуализатора.


## Комментарии


Данный метод осуществляет выход из режима редактирования визуализатора
 без сохранения данных.


## Пример


Для выполнения примера в репозитории необходимо наличие формы, содержащей
 компоненты:


	- ReportBox с идентификатором
	 «ReportBox1»;


	- UiReport с идентификатором
	 «UiReport1», который является источником данных для «ReportBox1».


Необходимо наличие регламентного отчета, который содержит таблицу. Одно
 из измерений таблицы имеет тип метрики «Цвет
 фона». Регламентный отчет является источником данных для «UiReport1».


Добавьте ссылки на системные сборки: Drawing, Express, Tab, Visualizators.


			Sub UserProc;

Var

    Report: IPrxReport;

    TS: ITabSheet;

    Grid: IEaxGrid;

    Pos: IGxRectF;

    Visualizer: IPrxVisualizerLegend;

    i: Integer;

    VZLegend: IVZIntervalsLegend;

    VZLegendBase: IVZLegendBase;

Begin

    // Получим регламентный отчет

    Report := UiReport1.Report;

    // Получим активный лист отчета

    TS := (Report.ActiveSheet As IPrxTable) As ITabSheet;

    // Вставим в отчет легенду таблицы

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

    // Скопируем верхний
 колонтитул в нижний колонтитул

    VZLegendBase.Footer := VZLegendBase.Header;

    // Обновим визуализатор

    Visualizer.Update;

End Sub UserProc;


После выполнения примера в выбранном пользователем диапазоне ячеек таблицы
 будет создана легенда таблицы с верхним и нижним колонтитулом.


См. также:


[IPrxVisualizerLegend](IPrxVisualizerLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
