# IChart.Caption

IChart.Caption
-


# IChart.Caption


## Синтаксис


Caption: [IChartCaption](../IChartCaption/IChartCaption.htm);


## Описание


Свойство Caption определяет параметры заголовка диаграммы.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса ICharCaption.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


			Sub Caption;

Var

    Chart: IChart;

Begin

    Chart.Caption.FontColor := New GxColor.CreateARGB(255, 255, 0, 0);

End Sub Caption;


После выполнения примера цвет шрифта заголовка будет изменен на красный.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
