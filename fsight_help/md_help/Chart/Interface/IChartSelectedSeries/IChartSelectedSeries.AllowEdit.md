# IChartSelectedSeries.AllowEdit

IChartSelectedSeries.AllowEdit
-


# IChartSelectedSeries.AllowEdit


## Синтаксис


AllowEdit: Boolean;


## Описание


Свойство AllowEdit определяет возможность редактирования значений ряда прямо на диаграмме. Если свойство имеет значение True, то значения ряда можно редактировать, при установке значения False редактирование значений рядов становится невозможным.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelectedSeries: IChartSelectedSeries;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.AllowEdit:= True;

End Sub Button1OnClick;


После нажатия кнопки «Button1» появится возможность редактирования значений ряда прямо на диаграмме.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
