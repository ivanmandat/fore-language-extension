# ITabSheet.Cell

ITabSheet.Cell
-


# ITabSheet.Cell


## Синтаксис


Cell(Row: Integer; Column: Integer): [ITabRange](../ITabRange/ITabRange.htm);


## Параметры


Row. Номер строки;


Column. Номер столбца.


## Описание


Свойство Cell возвращает ячейку,
 координаты которой передаются в качестве входных параметров Row
 и Column.


## Комментарии


Допустимое значение параметра Row находится в диапазоне [0, [RowsCount](ITabSheet.RowsCount.htm)).
 Допустимое значение параметра Column находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1»,
 компонента UiTabSheet с идентификатором
 «UiTabSheet1» и компонента TabSheetBox.


Пример представляет собой обработчик события «OnClick» для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.Cell(0, 0).Value := 10;

	    Tab.Cell(0, 1).Value := 20;

	End Sub Button1OnClick;


После нажатия кнопки, в таблице ячейкам с координатами «0,0» и «0,1»
 будут присвоены значения «10» и «20» соответственно.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
