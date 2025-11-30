# ITabSheet.ParseCell

ITabSheet.ParseCell
-


# ITabSheet.ParseCell


## Синтаксис


ParseCell(Address: String): [ITabRange](../ITabRange/ITabRange.htm);


## Параметры


Address — адрес
 ячейки таблицы.


## Описание


Метод ParseCell получает ячейку,
 адрес которой передается в качестве входного параметра Address.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.ParseCell("A1").Value := 100;

	End Sub Button1OnClick;


После выполнения примера для ячейки "А1" будет установлено
 значение "100".


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
