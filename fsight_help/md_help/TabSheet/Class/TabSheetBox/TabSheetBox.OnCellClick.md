# TabSheetBox.OnCellClick

TabSheetBox.OnCellClick
-


# TabSheetBox.OnCellClick


## Синтаксис


Sub TabSheetBoxOnCellClick(Sender:
 Object; Args: [ITabCellEventArgs](../../Interface/ITabCellEventArgs/ITabCellEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnCellClick;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой было произведено изменение.


## Описание


Событие OnCellClick возникает
 при нажатии на ячейку таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnCellClick
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnCellClick(Sender: Object; Args: ITabCellEventArgs);

	Var

	    i,j: Integer;

	Begin

	    i:=Args.Row;

	    j:=Args.Column;

	End Sub TabSheetBox1OnCellClick;


После выполнения события, в переменной «i» будет содержаться номер строки,
 а в «j» - номер столбца ячейки, по которой был произведен щелчок.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
