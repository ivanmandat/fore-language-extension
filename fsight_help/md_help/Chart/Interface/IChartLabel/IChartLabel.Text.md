# IChartLabel.Text

IChartLabel.Text
-


# IChartLabel.Text


## Синтаксис


Text: String;


## Описание


Свойство Text возвращает текст
 подписи данных на диаграмме.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма. К отчету добавлен модуль, из
 которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab.


			Sub UserProc;

Var

    Chart: IChart;

Begin

    Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1).Extension As IChart;

    WinApplication.InformationBox(Chart.Series.Item(0).Label(0).Text);

End Sub UserProc;


После выполнения примера при нажатии на гиперссылку появится сообщение,
 содержащее текст первой подписи первого ряда данных на диаграмме.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
