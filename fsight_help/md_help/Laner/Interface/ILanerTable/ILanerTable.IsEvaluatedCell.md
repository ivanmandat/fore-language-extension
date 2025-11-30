# ILanerTable.IsEvaluatedCell

ILanerTable.IsEvaluatedCell
-


# ILanerTable.IsEvaluatedCell


## Синтаксис


IsEvaluatedCell(Row: Integer; Column: Integer):
 Boolean;


## Параметры


Row.
 Индекс строки;


Column.
 Индекс столбца.


## Описание


Свойство IsEvaluatedCell возвращает
 признак того, что данная ячейка является вычисляемой.


## Комментарии


Допустимые значения:


	- True. Вычисляемая ячейка;


	- False. Простая ячейка.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Table: ILanerTable;

	    i, j: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Table := Laner.Execute;

	    For i := 0 To Table.RowCount - 1 Do

	        For j := 0 To Table.ColumnCount - 1 Do

	            If Table.IsEvaluatedCell(i, j) Then

	                Debug.WriteLine("Ячейка ("+i.ToString+", "+j.ToString+") вычисляемая");

	            End If;

	        End For;

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены вычисляемые ячейки.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
