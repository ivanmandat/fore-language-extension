# TabSheetBox.OnCellPictureClick

TabSheetBox.OnCellPictureClick
-


# TabSheetBox.OnCellPictureClick


## Синтаксис


Sub TabSheetBoxOnCellPictureClick(Sender:
 Object; Args: [ITabCellEventArgs](../../Interface/ITabCellEventArgs/ITabCellEventArgs.htm));


Begin


//набор операторов


End Sub TabSheetBoxOnCellPictureClick;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой произошло событие.


## Описание


Событие OnCellPictureClick возникает
 при нажатии на картинку в ячейке таблицы. Данное событие обрабатывается
 только в том случае, если свойство [ITabCellStyle.EnablePictureEvents](../../Interface/ITabCellStyle/ITabCellStyle.EnablePictureEvents.htm)
 имеет значение [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm).


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnCellClick
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnCellClick(Sender: Object; Args: ITabCellEventArgs);

	Var

	    i,j: Integer;

	Begin

	    i:= Args.Row;

	    j:= Args.Column;

	End Sub TabSheetBox1OnCellClick;


После выполнения события, в переменной «i» будет содержаться номер строки,
 а в «j» - номер столбца ячейки, в которой произошло событие.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
