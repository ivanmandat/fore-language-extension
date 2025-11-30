# ITabSheet.CellValue

ITabSheet.CellValue
-


# ITabSheet.CellValue


## Синтаксис


CellValue(Row: Integer; Column: Integer): Variant;


## Параметры


Row. Номер строки;


Column. Номер столбца.


## Описание


Свойство CellValue устанавливает
 значение ячейки, координаты которой передаются в качестве входных параметров
 Row и Column.


## Комментарии


Допустимое значение параметра Row находится в диапазоне [0, [RowsCount](ITabSheet.RowsCount.htm)).


Допустимое значение параметра Column находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки Button с наименованием Button1, компонента TabSheetBox с
 наименованием TabSheetBox1 и компонента UiTabSheet с наименованием UiTabSheet1, являющегося источником данных для TabSheetBox1.


Пример является обработчиком события OnClick для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

Begin

    Tab := UiTabSheet1.TabSheet;

    Tab.CellValue(2, 3) := 10;

End Sub Button1OnClick;


После нажатия кнопки, ячейке с координатами «2,3» будет присвоено значение
 «10».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
