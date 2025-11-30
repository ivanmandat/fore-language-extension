# IChart.UseSignatureHint

IChart.UseSignatureHint
-


# IChart.UseSignatureHint


## Синтаксис


UseSignatureHint: Boolean;


## Описание


Свойство UseSignatureHint определяет,
 выводить ли подписи данных на диаграмме в виде всплывающих подсказок.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1»,
 компонентов ChartBox и UiChart,
 являющихся источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

Begin

    Chart:= UiChart1.Chart;

    Chart.UseSignatureHint:= True;

    Chart.HintStringFormat:= "%Percent";

End Sub Button1OnClick;


После нажатия кнопки «Button1» на диаграмме будут отображаться всплывающие
 подсказки для рядов данных в формате - доли в процентах.


См. также:


[Chart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
