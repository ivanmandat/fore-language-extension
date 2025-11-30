# ITabSheet.ParseRange

ITabSheet.ParseRange
-


# ITabSheet.ParseRange


## Синтаксис


ParseRange(Address: String): [ITabRange](../ITabRange/ITabRange.htm);


## Параметры


Address — адрес
 диапазона таблицы.


## Описание


Метод ParseRange получает диапазон
 ячеек, адрес которого передается в качестве входного параметра Address.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.ParseRange("C1:D2").Value := 10;

	End Sub Button1OnClick;


После выполнения примера в каждой ячейке диапазона "C1:D2"
 установится значение 10.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
