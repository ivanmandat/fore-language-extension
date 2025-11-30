# IChartLabel.ResetChildrenInheritance

IChartLabel.ResetChildrenInheritance
-


# IChartLabel.ResetChildrenInheritance


## Синтаксис


ResetChildrenInheritance(Value: [ChartLabelPropertyInheritance](../../Enums/ChartLabelPropertyInheritance.htm));


## Описание


Метод ResetChildrenInheritance
 сбрасывает настройки всех подписей диаграммы.


## Комментарии


После исключения пересечений подписей диаграммы, которые перемещались
 с помощью метода [IChartSeries.AutoplaceLabels](../IChartSeries/IChartSeries.AutoplaceLabels.htm),
 меняются настройки положения. Метод ResetChildrenInheritance
 используется для возврата настроек положения по умолчанию для всех
 подписей диаграммы.


## Пример


Для выполнения примера предполагается наличие на форме компонента Button с идентификатором Button1,
 регламентного отчёта с идентификатором REPORT, а так же наличия на нем
 диаграммы с подписями.


Добавьте ссылки на системные сборки: Chart, Drawing, Report и Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Rep: IPrxReport;

    Chart: IChart;

    Tab: ITabSheet;

    CLabel: IChartLabel;

Begin

    MB := Metabaseclass.Active;

    Rep := MB.ItemById("REPORT").Edit As IPrxReport;

    Tab := (rep.ActiveSheet As IPrxTable).TabSheet;

    Chart := Tab.Objects.Item(0) As IChart;

    CLabel := Chart.Series.DefaultSerie.DefaultLabel;

    Tab.BeginUpdate;

    CLabel.ResetChildrenInheritance(ChartLabelPropertyInheritance.Position);

    Tab.EndUpdate;

End Sub Button1OnClick;


В результате выполнения примера, после нажатия кнопки у диаграммы будут
 сброшены настройки положения для всех подписей.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
