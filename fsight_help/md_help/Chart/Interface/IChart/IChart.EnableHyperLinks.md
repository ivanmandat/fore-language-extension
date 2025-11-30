# IChart.EnableHyperlinks

IChart.EnableHyperlinks
-


# IChart.EnableHyperlinks


## Синтаксис


EnableHyperlinks: Boolean;


## Описание


Свойство EnableHyperlinks определяет возможность отображения рядов данных на диаграмме в режиме гиперссылок.


## Комментарии


Свойство имеет следующие значения:


-
True. Поддерживается возможность работы рядов данных как гиперссылок;


-
False. Возможность работы рядов данных как гиперссылок не поддерживается.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    Chart.InteractiveMode := ChartInteractiveMode.Hyperlinks;

    Chart.EnableHyperlinks := True;

End Sub Button1OnClick;


После нажатия кнопки «Button1» ряды данных будут работать как гиперссылки.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
