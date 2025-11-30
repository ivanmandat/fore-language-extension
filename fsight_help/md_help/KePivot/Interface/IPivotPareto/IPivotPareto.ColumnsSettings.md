# IPivotPareto.ColumnsSettings

IPivotPareto.ColumnsSettings
-


# IPivotPareto.ColumnsSettings


## Синтаксис


ColumnsSettings: [IPivotParetoSettings](../IPivotParetoSettings/IPivotParetoSettings.htm);


## Описание


Свойство ColumnsSettings возвращает
 параметры анализа 80/20, установленные по столбцам.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и компонента TabSheetBox,
 используемого для отображения данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    Pivot: IPivot;

    Pareto: IPivotPareto;

    ColumnsSetting: IPivotParetoSettings;

Begin

    Eax := UiErAnalyzer1.Instance As IEaxAnalyzer;

    Pivot := Eax.Pivot;

    Pareto := Pivot.Pareto;

    //По столбцам

    ColumnsSetting := Pareto.ColumnsSettings;

    ColumnsSetting.ElementIndex := 0;

    ColumnsSetting.Enabled := True;

End Sub Button1OnClick;


При нажатии на кнопку по данным первого столбца будет применен анализ
 80/20. При анализе будут отобраны 30% максимальных значений.


См. также:


[IPivotPareto](IPivotPareto.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
