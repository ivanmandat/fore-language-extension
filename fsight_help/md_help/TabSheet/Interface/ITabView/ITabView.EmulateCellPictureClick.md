# ITabView.EmulateCellPictureClick

ITabView.EmulateCellPictureClick
-


# ITabView.EmulateCellPictureClick


## Синтаксис


EmulateCellPictureClick(Row: Integer; Column: Integer);


## Параметры


Row. Строка, в которой находится
 гиперссылка. Допустимое значение параметра находится в диапазоне [0, [RowsCount](../ITabSheet/ITabSheet.RowsCount.htm));


Column. Столбец, в котором
 находится гиперссылка. Допустимое значение параметра находится в диапазоне
 [0, [ColumnsCount](../ITabSheet/ITabSheet.ColumnsCount.htm)).


## Описание


Метод EmulateCellPictureClick
 осуществляет эмуляцию щелчка по изображению, расположенному в указанной
 ячейке.


## Комментарии


При выполнении метода для компонента, с таблицей которого осуществляется
 работа, генерируется событие OnCellPictureClick.
 Описание события для различных компонентов представлено в следующих подразделах:


	- [LanerBox.OnCellPictureClick](KeExpress.chm::/Class/LanerBox/LanerBox.OnCellPictureClick.htm);


	- [ReportBox.OnCellPictureClick](KeReport.chm::/Class/ReportBox/ReportBox.OnCellPictureClick.htm);


	- [TabSheetBox.OnCellPictureClick](../../Class/TabSheetBox/TabSheetBox.OnCellPictureClick.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо источника данных для «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    TView: ITabView;

Begin

    TSheet := TabSheetBox1.Source.GetTabSheet;

    TView := TSheet.View;

    TView.EmulateCellPictureClick(0, 0);

End Sub Button1OnClick;


При нажатии на кнопку будет эмулирован щелчок по изображению в ячейке
 «A0».


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
