# IChart.LoadFromXml

IChart.LoadFromXml
-


# IChart.LoadFromXml


## Синтаксис


LoadFromXml(Xml: String);


## Параметры


Xml. Строка, из которой происходит загрузка Xml-разметки.


## Описание


Метод LoadFromXml загружает Xml-разметку из строковой переменной.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox, UiChart и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    chart: IChart;

Begin

    chart := ChartBox2.Source.GetChart;

    chart.LoadFromXml(ChartBox1.Source.GetChart.SaveToXml);

End Sub Button1OnClick;


После нажатия кнопки «Button1» произойдет загрузка настроек из диаграммы, которая отображается в ChartBox1.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
