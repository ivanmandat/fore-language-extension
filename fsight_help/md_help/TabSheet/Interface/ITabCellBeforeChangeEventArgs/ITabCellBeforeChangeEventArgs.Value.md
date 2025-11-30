# ITabCellBeforeChangeEventArgs.Value

ITabCellBeforeChangeEventArgs.Value
-


# ITabCellBeforeChangeEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value
 определяет измененное значение, которое будет содержаться в ячейке после
 отработки события.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnBeforeCellChange](../../Class/TabSheetBox/TabSheetBox.OnBeforeCellChange.htm).


	Sub TabSheetBox1OnBeforeCellChange(Sender: Object; Args: ITabCellBeforeChangeEventArgs);

	Var

	    New_val, Old_val: Variant;

	Begin

	    Old_val := Args.TabSheet.Source.GetTabSheet.CellValue(Args.Row, Args.Column);

	    New_val := Args.Value;

	End Sub TabSheetBox1OnBeforeCellChange;


После выполнения события в переменной «Old_val»
 будет содержаться старое значение ячейки, а в переменной «New_val»
 - значение, которое будет занесено в ячейку после обработки события.


См. также:


[ITabCellBeforeChangeEventArgs](ITabCellBeforeChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
