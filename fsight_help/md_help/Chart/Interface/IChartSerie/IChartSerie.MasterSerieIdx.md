# IChartSerie.MasterSerieIdx

IChartSerie.MasterSerieIdx
-


# IChartSerie.MasterSerieIdx


## Синтаксис


		MasterSerieIdx: Integer;


## Описание


Свойство MasterSerieIdx
 определяет индекс дополнительного ряда, который будет являться продолжением
 основного ряда.


## Комментарии


Значение по умолчанию: -1, основной ряд не продлевается. Если значение
 отлично от -1, то дополнительный ряд отображается как продолжение основного
 ряда.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REGULAR_REPORT_MSIDX». Данный отчет должен содержать
 только линейную диаграмму с пятью рядами.


Подключите системные сборки: Chart, Metabase, Report, Tab.


			Sub Userproc;

Var

    mb: IMetaBase;

    regrep: IPrxReport;

    chart: IChart;

    sheet: IPrxSheet;

    table: ITabSheet;

    objects: ITabObjects;

Begin

    // Открываем регламентный отчет для редактирования

    mb := MetabaseClass.Active;

    regrep := mb.ItemById("Regular_Report_MSIDX").Edit As IPrxReport;

    // Получаем диаграмму из регламентного отчета

    sheet := regrep.Activesheet;

    table := sheet.Table;

    objects := table.Objects;

    chart := objects.Item(0).Extension As IChart;

    // Для первого, третьего, пятого рядов продолжаем основной ряд

    chart.Series.Item(0).MasterSerieIdx := 1;

    chart.Series.Item(2).MasterSerieIdx := 3;

    chart.Series.Item(4).MasterSerieIdx := 5;

    // Сохраняем изменения

    (regrep As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера первый, третий и пятый ряды диаграммы
 соединятся со вторым, четвертым и шестым.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
