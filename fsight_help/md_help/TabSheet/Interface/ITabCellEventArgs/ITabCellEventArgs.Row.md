# ITabCellEventArgs.Row

ITabCellEventArgs.Row
-


# ITabCellEventArgs.Row


## Синтаксис


Row: Integer;


## Описание


Свойство Row возвращает номер
 строки, в которой находится ячейка таблицы, сгенерировавшая событие OnCellClick, OnHyperlinkClick
 или OnCellPictureClick.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1».
 «UiTabSheet1» является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnCellClick](../../Class/TabSheetBox/TabSheetBox.OnCellClick.htm).


	Sub TabSheetBox1OnCellClick(Sender: Object; Args: ITabCellEventArgs);

	Var

	    i,j: Integer;

	Begin

	    i := Args.Row;

	    j := Args.Column;

	End Sub TabSheetBox1OnCellClick;


После выполнения события в переменной «i» будет содержаться номер строки,
 а в «j» - номер столбца ячейки, по которой осуществлен щелчок мышкой.


См. также:


[ITabCellEventArgs](ITabCellEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
