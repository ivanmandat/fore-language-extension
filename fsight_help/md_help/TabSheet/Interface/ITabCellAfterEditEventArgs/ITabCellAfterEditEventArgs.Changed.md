# ITabCellAfterEditEventArgs.Changed

ITabCellAfterEditEventArgs.Changed
-


# ITabCellAfterEditEventArgs.Changed


## Синтаксис


Changed: Boolean;


## Описание


Свойство Changed возвращает
 True, если в результате редактирования
 значения в ячейке данные были изменены.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnAfterEdit](../../Class/TabSheetBox/TabSheetBox.OnAfterEdit.htm).


	Sub TabSheetBox1OnAfterEdit(Sender: Object; Args: ITabCellAfterEditEventArgs);

	Var

	    s: String;

	Begin

	    If Args.Changed Then

	        s :="Changed";

	    Else

	        s :="Don’t changed";

	    End If;

	End Sub TabSheetBox1OnAfterEdit;


После выполнения события в переменной «b»
 будет содержаться «Changed», если
 были изменены данные редактируемой ячейки.


См. также:


[ITabCellAfterEditEventArgs](ITabCellAfterEditEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
