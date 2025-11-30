# ITabSheet.AdjustRangeAddress

ITabSheet.AdjustRangeAddress
-


# ITabSheet.AdjustRangeAddress


## Синтаксис


AdjustRangeAddress(Address: String, SourceCell:
 [ITabRange](../ITabRange/ITabRange.htm), DestinationCell: [ITabRange](../ITabRange/ITabRange.htm)): String;


## Параметры


Address — адрес диапазона ячеек,
 который необходимо скорректировать.


SourceCell — ячейка, которая
 является базовой при корректировке.


DestinationCell — ячейка, относительно
 адреса которой, происходит коррекция.


## Описание


Метод AdjustRangeAddress осуществляет
 корректировку относительного адреса диапазона ячеек при перемещении формулы.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.Cell(0, 0).Value := 10;

	    Tab.Cell(0, 1).Value := 20;

	    Tab.Cell(0, 2).Value := 30;

	    Tab.Cell(0, 3).Value := 40;

	    Tab.Cell(1, 0).Formula := "= Sum(a0: c0)";

	    Tab.Cell(1, 1).Formula := "= Sum(" + Tab.AdjustRangeAddress("A0:C0", Tab.Cell(1, 0), Tab.Cell(1, 1)) + ")";

	End Sub Button1OnClick;


После выполнения примера для ячейки "А1" будет установлена
 формула, суммирующая значение ячеек в диапазоне "A0:C0". После
 этого данный диапазон будет скорректирован для ячейки "В1".


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
