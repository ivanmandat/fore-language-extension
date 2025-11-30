# TabSheetBox.OnBeforeCellChange

TabSheetBox.OnBeforeCellChange
-


# TabSheetBox.OnBeforeCellChange


## Синтаксис


Sub TabSheetBoxOnBeforeCellChange(Sender:
 Object; Args: [ITabCellBeforeChangeEventArgs](../../Interface/ITabCellBeforeChangeEventArgs/ITabCellBeforeChangeEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnBeforeCellChange;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой произошло событие.


## Описание


Событие OnBeforeCellChange возникает
 перед изменением значения ячейки таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnBeforeCellChange
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnBeforeCellChange(Sender: Object; Args: ITabCellBeforeChangeEventArgs);

	Var

	    New_val, Old_val: Variant;

	Begin

	    Old_val := Args.TabSheet.Source.GetTabSheet.CellValue(Args.Row, Args.Column);

	    New_val := Args.Value;

	End Sub TabSheetBox1OnBeforeCellChange;


После выполнения события в переменной "Old_val" будет содержаться
 старое значение ячейки, а в переменной "New_val" - значение,
 которое будет занесено в ячейку после обработки события.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
