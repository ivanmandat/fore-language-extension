# IChartBox.Chart

IChartBox.Chart
-


# IChartBox.Chart


## Синтаксис


Chart: [IChart](../IChart/IChart.htm);


## Описание


Свойство Chart определяет диаграмму,
 отображаемую в компоненте [ChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ChartBox.htm).


## Комментарии


Если для компонента установлено свойство [Source](IChartBox.Source.htm),
 то используя данное свойство можно получить параметры диаграммы подключенного
 источника данных.


Если в свойстве Chart установить
 диаграмму, отличную от диаграммы источника [Source](IChartBox.Source.htm),
 то свойство [Source](IChartBox.Source.htm) будет сброшено.
 В качестве значения данного свойства должна передаваться диаграмма, реализуемая
 интерфейсом [IChart](../IChart/IChart.htm). Диаграмма может
 быть получена из регламентного или экспресс-отчета, либо создана динамически.


Компонент ChartBox в данном
 свойстве не хранит ссылку на отображаемую диаграмму. Ссылка должна храниться
 отдельно в коде. Источник диаграммы должен быть открыт.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента [ChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ChartBox.htm)
 с наименованием «ChartBox1». Также в репозитории должен существовать регламентный
 отчет с диаграммой, расположенной на первом листе. Идентификатор отчета
 «REP_OSN».


			Class TestForm: Form

    ChartBox1: ChartBox;

    Button1: Button;

    Chart: IChart;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        Report: IPrxReport;

        Sheet: ITabSheet;

    Begin

        MB := MetabaseClass.Active;

        Report := MB.ItemById("REP_OSN").Open(Null) As IPrxReport;

        Sheet := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

        Chart := Sheet.Objects.Item(0).Extension As IChart;

        ChartBox1.Chart := Chart;

    End Sub Button1OnClick;


End Class TestForm;


При нажатии на кнопку в компоненте «ChartBox1» будет отображена диаграмма,
 созданная на первом листе регламентного отчета.


См. также:


[IChartBox](IChartBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
