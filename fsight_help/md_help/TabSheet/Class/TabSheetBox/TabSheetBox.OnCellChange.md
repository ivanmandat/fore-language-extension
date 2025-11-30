# TabSheetBox.OnCellChange

TabSheetBox.OnCellChange
-


# TabSheetBox.OnCellChange


## Синтаксис


Sub TabSheetBoxOnCellChange(Sender:
 Object; Args: [ITabCellChangeEventArgs](../TabCellChangeEventArgs/TabCellChangeEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnCellChange;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой было произведено изменение.


## Описание


Событие OnCellChange наступает,
 если было произведено изменение значения в ячейке таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnCellChange
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnCellChange(Sender: Object; Args: ITabCellChangeEventArgs);

	Var

	    v, v1: Variant;

	Begin

	    v:=Args.TabSheet.Source.GetTabSheet.CellValue(Args.Row, Args.Column);

	    v1:=Args.Value;

	End Sub TabSheetBox1OnCellChange;


После возникновения события, в переменной «v» будет содержаться новое
 значение измененной ячейки.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
