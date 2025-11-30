# IChart.SecondaryGapWidthCoef

IChart.SecondaryGapWidthCoef
-


# IChart.SecondaryGapWidthCoef


## Синтаксис


SecondaryGapWidthCoef: Double;


## Описание


Свойство SecondaryGapWidthCoef
 определяет ширину зазора столбцов, построенных по дополнительной оси.


## Комментарии


Диапазон допустимых значений: [0, 5].


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REG_REP_SSA».
 Отчет содержит только диаграмму с двумя рядами данных, построенных по
 дополнительной оси.


Добавьте ссылки на системные сборки: Chart, Metabase, Report, Tab.


			Sub UserProc;

    Var

        MB: IMetabase;

        Report: IPrxReport;

        Tab: ITabSheet;

        Chart: IChart;

    Begin

        // Получаем доступ к репозиторию

        MB := MetabaseClass.Active;

        // Получаем доступ к регламентному отчету

        Report := MB.ItemById("REG_REP_SSA").Edit As IPrxReport;

        // Получаем таблицу регламентного отчета

        Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

        // Получаем диаграмму

        Chart := Tab.Objects.Item(0).Extension As IChart;

        // Определяем отображается ли дополнительная ось

        Chart.SeparateSecondaryAxis := True;

        // Изменяем ширину зазора и перекрытие столбцов по дополнительной оси

        Chart.SecondaryGapWidthCoef := 2.0;

        Chart.SecondaryOverlapCoef := -1.0;

        (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения
 примера в регламентном отчете будут изменены ширина зазора между
 столбцами и величина перекрытия столбцов, построенных по дополнительной
 оси. В окно консоли будет выведено исходное значение ширины зазора и величины
 перекрытия.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
