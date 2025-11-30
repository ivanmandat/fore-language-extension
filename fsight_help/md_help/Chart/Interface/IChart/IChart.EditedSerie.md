# IChart.EditedSerie

IChart.EditedSerie
-


# IChart.EditedSerie


## Синтаксис


EditedSerie: Integer;


## Описание


Свойство EditedSerie определяет
 индекс ряда в режимах [редактирования](uidiagrams.chm::/Edit_DataSeries.htm):
 «по точкам» и «рисование».


## Комментарии


Данные режимы устанавливаются свойством [IChart.InteractiveMode](IChart.InteractiveMode.htm).


Свойство EditedSerie принимает
 значение «-1», в случае если неверно
 задан режим или не выбран ряд.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма. К отчету добавлен модуль, с помощью
 которого по гиперссылке вызывается процедура GetS. Подключите системные
 сборки: Chart, Report, Tab.


			Sub GetS;

Var

    Chart : IChart;

Begin

    Chart := PrxReport.ActiveReport.ActiveSheet.Table.Objects.Item(0).Extension As IChart;

    Chart.InteractiveMode := ChartInteractiveMode.EditByPoint;

    Chart.EditedSerie := 0;

End Sub GetS;


Будет установлен режим редактирования диаграммы «по
 точкам», и выбран для редактирования ряд с индексом «0».


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
