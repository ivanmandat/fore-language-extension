# ITabHyperlink.Assign

ITabHyperlink.Assign
-


# ITabHyperlink.Assign


## Синтаксис


Assign(Value: [ITabHyperlink](ITabHyperlink.htm));


## Параметры


Value. Гиперссылка,
 параметры которой необходимо установить текущей гиперссылке.


## Описание


Метод Assign заполняет параметры
 текущей гиперссылки параметрами другой гиперссылки, указанной в качестве
 входного параметра Value.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.Cell(1, 1).Style.Hyperlink.Assign(UiTabSheet1.TabSheet.Cell(0,0).Style.Hyperlink);

	End Sub Button1OnClick;


После выполнения примера параметры гиперссылки в ячейке (1,1) станут
 аналогичны параметрам гиперссылки в ячейке (0,0).


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
