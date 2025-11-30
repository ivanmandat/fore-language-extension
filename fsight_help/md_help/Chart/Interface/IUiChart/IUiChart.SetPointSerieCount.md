# IUiChart.SetPointSerieCount

IUiChart.SetPointSerieCount
-


# IUiChart.SetPointSerieCount


## Синтаксис


SetPointSerieCount(PointCount: Integer; SerieCount: Integer);


## Параметры


PointCount. Количество точек на графике.


SerieCount. Количество рядов на графике.


## Описание


Метод SetPointSerieCount позволяет задать количество рядов и точек на диаграмме.


## Пример


Для выполнения примера на форме расположите кнопку с наименованием «Button1», компонент UiChart с наименованием «UiChart1» и компонент ChartBox с наименованием «ChartBox1». Добавьте ссылку на системную сборку Chart.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Begin

    UiChart1.SetPointSerieCount(5, 2);

End Sub Button1OnClick;


После выполнения примера на диаграмме будет 5 точек и 2 ряда данных.


См. также:


[IUiChart](IUiChart.htm) | [IUiChart.PointCount](IUiChart.PointCount.htm) | [IUiChart.SerieCount](IUiChart.SerieCount.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
