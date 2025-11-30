# TabSheetBox.OnAfterEdit

TabSheetBox.OnAfterEdit
-


# TabSheetBox.OnAfterEdit


## Синтаксис


Sub TabSheetBoxOnAfterEdit(Sender:
 Object; Args: [ITabCellAfterEditEventArgs](../../Interface/ITabCellAfterEditEventArgs/ITabCellAfterEditEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnAfterEdit;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой произошло событие.


## Описание


Событие OnAfterEdit происходит
 после редактирования ячейки таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnAfterEdit
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnAfterEdit(Sender: Object; Args: ITabCellAfterEditEventArgs);

	Var

	    b: Boolean

	Begin

	    If Args.Changed Then

	        b:="Changed";

	    Else

	        b:="Don’t changed";

	    End If;

	End Sub TabSheetBox1OnAfterEdit;


После выполнения события в переменной «b» будет содержаться «Changed»,
 если были изменены данные редактируемой ячейки.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
