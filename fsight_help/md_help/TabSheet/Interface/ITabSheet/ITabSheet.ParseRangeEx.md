# ITabSheet.ParseRangeEx

ITabSheet.ParseRangeEx
-


# ITabSheet.ParseRangeEx


## Синтаксис


ParseRangeEx(Address: String, Base: [ITabRange](../ITabRange/ITabRange.htm)):
 [ITabRange](../ITabRange/ITabRange.htm);


## Параметры


Address — адрес диапазона таблицы.


Base — диапазон таблицы, в
 котором находится искомый диапазон.


## Описание


Метод ParseRangeEx получает
 диапазон ячеек, адрес которого передается в качестве входного параметра
 Address, а область, в которой
 находится искомый диапазон - параметром Base.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    UiTabSheet1.TabSheet.ParseRangeEx("C1:D2", UiTabSheet1.TabSheet.Cells(0, 0, 3, 3)).Value:= 3;

	End Sub Button1OnClick;


После выполнения примера в ячейках диапазона "C1:D2" установится
 значение 3.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
