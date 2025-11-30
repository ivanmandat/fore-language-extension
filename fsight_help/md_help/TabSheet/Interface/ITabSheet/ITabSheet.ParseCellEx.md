# ITabSheet.ParseCellEx

ITabSheet.ParseCellEx
-


# ITabSheet.ParseCellEx


## Синтаксис


ParseCellEx(Address: String; Base: [ITabRange](../ITabRange/ITabRange.htm)):
 [ITabRange](../ITabRange/ITabRange.htm);


## Параметры


Address — адрес ячейки таблицы.


Base — диапазон таблицы, в
 котором находится искомая ячейка.


## Описание


Метод ParseCellEx осуществляет
 поиск и возвращает ячейку, адрес которой передается в качестве входного
 параметра Address, а область,
 в которой находится искомая ячейка - параметром Base.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.ParseCellex("C1",UiTabSheet1.TabSheet.Cells(0,0,3,3)).Value:=99;

	End Sub Button1OnClick;


После выполнения примера для ячейки "С1" будет установлено
 значение "99".


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
