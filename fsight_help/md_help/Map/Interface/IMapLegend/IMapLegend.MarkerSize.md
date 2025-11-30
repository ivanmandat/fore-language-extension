# IMapLegend.MarkerSize

IMapLegend.MarkerSize
-


# IMapLegend.MarkerSize


## Синтаксис


MarkerSize: Double;


## Описание


Свойство MarkerSize определяет
 размер маркера легенды.


## Комментарии


Для определения типа маркера легенды используйте [IMapLegend.MarkerType](IMapLegend.MarkerType.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 ReportBox, UiReport с наименованиями Button1, ReportBox1 и UiReport1 соответственно.
 UiReport1 является источником данных для ReportBox1. Также необходимо
 наличие регламентного отчета, содержащего карту с включенной легендой,
 и который является источником данных для UiReport1.


Добавьте ссылки на системные сборки: Drawing, Map, Report, Tab.


	Sub UserProc;

	Var

	    regrep: IPrxReport;

	    sheet: IPrxSheet;

	    table: IPrxTable;

	    objects: ITabObjects;

	    map: IMap;

	    legend: IMapLegend;

	    pad: IGxRectF;

	Begin

	    // Получим регламентный отчет

	    regrep := UiReport1.Report;

	    // Получим карту из регламентного отчета

	    sheet := regrep.Activesheet;

	    table := sheet As IPrxTable;

	    objects := table.TabSheet.Objects;

	    map := objects.Item(0).Extension As IMap;

	    // Получим легенду карты

	    legend := map.View.Legend;

	    // Отключим автоматические внутренние отступы легенды на карте

	    legend.AutoPadding := False;

	    // Создадим и установим внутренние отступы легенды

	    pad := New GxRectF.Create(1, 1, 1, 1);

	    legend.Padding := pad;

	    // Зададим расположение элементов по строкам

	    legend.ElementPlacement := MapLegendElementPlacement.CustomRows;

	    // Зададим количество строк легенды

	    legend.RowCount := 4;

	    // Отключим автоматические внутренние отступы между значками и подписями элементов

	    legend.SymbolSpaceAuto := False;

	    // Установим внутренний отступ между значками и подписями элементов

	    legend.SymbolSpace := 2;

	    // Отключим автоматический внутренний отступ между столбцами

	    legend.ColumnSpaceAuto := False;

	    // Зададим внутренний отступ между столбцами

	    legend.ColumnSpace := 5;

	    // Отключим автоматический внутренний отступ между строками

	    legend.RowSpaceAuto := False;

	    // Зададим внутренний отступ между строками

	    legend.RowSpace := 2;

	    // Зададим выравнивание элементов по правому краю

	    legend.ElementsHorizontalAlign := MapHorizontalAlignment.Right;

	    // Зададим размер значка

	    legend.MarkerSize := 10;

	    // Обновим карту

	    map.Refresh;

	End Sub UserProc;


После выполнения примера в легенде увеличатся размер значка и внутренние
 отступы между элементами легенды, элементы выравниваются по правому краю.


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
