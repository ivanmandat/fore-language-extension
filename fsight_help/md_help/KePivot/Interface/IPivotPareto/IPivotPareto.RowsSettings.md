# IPivotPareto.RowsSettings

IPivotPareto.RowsSettings
-


# IPivotPareto.RowsSettings


## Синтаксис


RowsSettings: [IPivotParetoSettings](../IPivotParetoSettings/IPivotParetoSettings.htm);


## Описание


Свойство RowsSettings возвращает
 параметры анализа 80/20, установленные по строкам.


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

    RowsSetting: IPivotParetoSettings;

Begin

    Eax := UiErAnalyzer1.Instance As IEaxAnalyzer;

    Pivot := Eax.Pivot;

    Pareto := Pivot.Pareto;

    //По строкам

    RowsSetting := Pareto.RowsSettings;

    RowsSetting.ElementIndex := 0;

    RowsSetting.Enabled := True;

End Sub Button1OnClick;


При нажатии на кнопку по данным первой строки будет применен анализ
 80/20. При анализе будут отобраны минимальные значения, сумма которых
 не больше «100».


См. также:


[IPivotPareto](IPivotPareto.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
