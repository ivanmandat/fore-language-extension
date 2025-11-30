# TabSheetBox.OnHyperlinkClick

TabSheetBox.OnHyperlinkClick
-


# TabSheetBox.OnHyperlinkClick


## Синтаксис


Sub TabSheetBoxOnHyperlinkClick(Sender:
 Object; Args: [ITabHyperlinkClickEventArgs](../../Interface/ITabHyperlinkClickEventArgs/ITabHyperlinkClickEventArgs.htm));


Begin


//набор операторов


End Sub TabSheetBoxOnHyperlinkClick;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой произошло событие.


## Описание


Событие OnHyperlinkClick возникает
 при нажатии на гиперссылку в ячейке таблицы.


## Комментарии


Если в ячейке с изображением настроена гиперссылка, то при щелчке по
 изображению сначала будет отрабатывать событие OnHyperlinkClick, а затем
 [OnCellPictureClick](TabSheetBox.OnCellPictureClick.htm).


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnHyperlinkClick
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnHyperlinkClick(Sender: Object; Args: ITabCellEventArgs);

	Var

	    i,j: Integer;

	Begin

	    i:=Args.Row;

	    j:=Args.Column;

	End Sub TabSheetBox1OnCellClick;


После выполнения события, в переменной «i» будет содержаться номер строки,
 а в «j» - номер столбца ячейки, в которой произошло событие.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
