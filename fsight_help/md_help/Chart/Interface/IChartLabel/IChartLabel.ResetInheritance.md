# IChartLabel.ResetInheritance

IChartLabel.ResetInheritance
-


# IChartLabel.ResetInheritance


## Синтаксис


ResetInheritance(Value: [ChartLabelPropertyInheritance](../../Enums/ChartLabelPropertyInheritance.htm));


## Описание


Метод ResetInheritance сбрасывает
 настройки конкретной подписи диаграммы.


## Комментарии


После исключения пересечений подписей диаграммы, которые перемещались
 с помощью метода [IChartSeries.AutoplaceLabels](../IChartSeries/IChartSeries.AutoplaceLabels.htm),
 меняются настройки положения. Метод ResetInheritance
 используется для возврата настроек положения по умолчанию для конкретной
 подписи диаграммы.


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

    Series: IChartSeries;

    CLabel: IChartLabel;

Begin

    MB := Metabaseclass.Active;

    Rep := MB.ItemById("REPORT").Edit As IPrxReport;

    Tab := (Rep.ActiveSheet As IPrxTable).TabSheet;

    Chart := Tab.Objects.Item(0) As IChart;

    Series := Chart.Series;

    CLabel := Series.Item(0).Label(0);

    Tab.BeginUpdate;

    CLabel.ResetInheritance(ChartLabelPropertyInheritance.Position);

    Tab.EndUpdate;

End Sub Button1OnClick;


В результате выполнения примера, после нажатия кнопки у диаграммы будут
 сброшены настройки положения для конкретной подписи.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
