# ILanerTable.ReleaseCellValue

ILanerTable.ReleaseCellValue
-


# ILanerTable.ReleaseCellValue


## Синтаксис


ReleaseCellValue(Row: Integer; Column: Integer);


## Параметры


Row. Индекс строки;


Column. Индекс столбца.


## Описание


Метод ReleaseCellValue копирует
 вычисленное значение указанной ячейки в исходный ряд.


## Комментарии


После выполнения метода будет сброшена подсветка для ячеек, в которых
 текущее (отображаемое) значение отличается от того, что вычислено по формуле.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Drawing, Express, ExtCtrls, Forms,
 Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    LanTable: ILanerTable;

	    Sheet: ITabSheet;

	    Range: ITabRange;

	    lcol, trow, rcol, brow, i, j, hHeight, hWidth: Integer;

	    HeaderSize: IGxSize;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Eax.BeginUpdate;

	    LanTable := Eax.Laner.Execute;

	    Sheet := Eax.Grid.TabSheet;

	    Range := Sheet.View.Selection.Range;

	    lcol := Range.Left;

	    trow := Range.Top;

	    rcol := Range.Right;

	    brow := Range.Bottom;

	    HeaderSize := Eax.Grid.HeaderSize;

	    hHeight := HeaderSize.Height;

	    hWidth := HeaderSize.Width;

	    For i := trow To brow Do

	        For j := lcol To rcol Do

	            LanTable.ReleaseCellValue(i - hHeight, j - hWidth);

	        End For;

	    End For;

	    Eax.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера для ячеек рабочей книги будет выполнено копирование
 вычисленных значений в исходные ряды.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
