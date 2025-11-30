# IChart.LoadFromJSON

IChart.LoadFromJSON
-


# IChart.LoadFromJSON


## Синтаксис


LoadFromJSON(JSON: String);


## Параметры


JSON. Строка, из которой происходит загрузка JSON-разметки.


## Описание


Метод LoadFromJSON загружает JSON-разметку из строковой переменной.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», двух компонентов ChartBox, двух UiChart, являющимися источником данных («UiChart1» у «ChartBox1» и «UiChart2» у «ChartBox2»). Для выполнения примера добавьте ссылки на системные сборки «Chart».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    str: String;

Begin

    str := ChartBox1.Source.GetChart.SaveToJSON;

    uiChart2.Chart.LoadFromJSON(str);

End Sub Button1OnClick;


Измените настройки оформления первой диаграммы. После нажатия кнопки
 «Button1» произойдет загрузка
 настроек из диаграммы, которая отображается в ChartBox1.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
