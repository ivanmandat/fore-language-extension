# ITabSheet.AdjustCellAddress

ITabSheet.AdjustCellAddress
-


# ITabSheet.AdjustCellAddress


## Синтаксис


AdjustCellAddress(Address: String; SourceCell: [ITabRange](../ITabRange/ITabRange.htm); DestinationCell:
 [ITabRange](../ITabRange/ITabRange.htm)): String;


## Параметры


Address — адрес ячейки, который
 необходимо скорректировать.


SourceCell — ячейка, которая
 является базовой при корректировке.


DestinationCell — ячейка, относительно
 адреса которой, происходит коррекция.


## Описание


Метод AdjustCellAddress осуществляет
 корректировку относительного адреса ячейки.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.Cell(0, 0).Value := 10;

	    Tab.Cell(0, 1).Value := 20;

	    Tab.Cell(0, 2).Value := 30;

	    Tab.Cell(1, 0).Formula := "=A0";

	    Tab.Cell(1, 1).Formula := Tab.AdjustCellAddress("a0", Tab.Cell(1, 0), Tab.Cell(1, 1));

	End Sub Button1OnClick;


После выполнения примера для ячейки "А1" будет записана формула,
 устанавливающая значение такое же, как в ячейке “А0". После этого
 данная формула будет скорректирована для ячейки "В1".


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
