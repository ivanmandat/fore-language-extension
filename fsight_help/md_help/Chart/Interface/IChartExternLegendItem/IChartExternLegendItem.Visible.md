# IChartExternLegendItem.Visible

IChartExternLegendItem.Visible
-


# IChartExternLegendItem.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 признак отображения элемента легенды диаграмм.


## Комментарии


По умолчанию свойство имеет значение True
 и элемент отображается во внешней легенде. При значении False
 элемент будет скрыт.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма и внешняя легенда. К отчету добавлен
 модуль, из которого с помощью гиперссылки вызывается процедура UserProc.
 В инспекторе сборок модуля должны быть указаны ссылки на системные сборки
 Chart, Report, Tab.


			Sub UserProc;

Var

    ChartExLegend: IChartExternLegend;

    Elements: IChartExternLegendItems;

    Element: IChartExternLegendItem;

    i: Integer;

Begin

    ChartExLegend := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1).Extension As IChartExternLegend;

    Elements := ChartExLegend.InternalItems;

    For i := 0 To Elements.Count-1 Do

        Element := Elements.Item(i);

        If Element.Visible=False Then

            Element.Visible := True;

        End If;

    End For;

End Sub UserProc;


Если в легенде диаграмм были скрытые элементы, то они будут отображены.


См. также:


[IChartExternLegendItem](IChartExternLegendItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
