# ITabCellChangeEventArgs.Value

ITabCellChangeEventArgs.Value
-


# ITabCellChangeEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value возвращает измененное
 значение ячейки.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnCellChange](../../Class/TabSheetBox/TabSheetBox.OnCellChange.htm).


	Sub TabSheetBox1OnCellChange(Sender: Object; Args: ITabCellChangeEventArgs);

	Var

	    v, v1: Variant;

	Begin

	    v:=Args.TabSheet.Source.GetTabSheet.CellValue(Args.Row, Args.Column);

	    v1:=Args.Value;

	End Sub TabSheetBox1OnCellChange;


После выполнения события в переменной «v»
 будет содержаться новое значение измененной ячейки.


См. также:


[ITabCellChangeEventArgs](ITabCellChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
