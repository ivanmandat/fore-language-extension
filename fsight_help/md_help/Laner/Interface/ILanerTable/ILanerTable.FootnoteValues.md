# ILanerTable.FootnoteValues

ILanerTable.FootnoteValues
-


# ILanerTable.FootnoteValues


## Синтаксис


FootnoteValues(Row: Integer; Column: Integer): Array;


## Параметры


Row. Индекс строки, в которой
 расположена ячейка с данными.


Column. Индекс столбца, в котором
 расположена ячейка с данными.


## Описание


Свойство FootnoteValues возвращает
 массив, содержащий значения сносок, сформированных для ячейки с указанными
 координатами.


## Комментарии


Для формирования сносок определите свойство [ILaner.ValueFootnoteAttributes](../ILaner/ILaner.ValueFootnoteAttributes.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором WORKBOOK. В рабочей книги созданы сноски для ячеек
 с данными.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    WbkObj: IMetabaseObject;

	    Laner: ILaner;

	    LanerTable: ILanerTable;

	    r, c: Integer;

	Begin

	    //Получаем рабочую книгу

	    MB := MetabaseClass.Active;

	    WbkObj := MB.ItemById("WORKBOOK").Bind;

	    Laner := (WbkObj As IEaxAnalyzer).Laner;

	    //Расчет рабочей книги

	    LanerTable := Laner.Execute;

	    //Просмотр значений сносок

	    For r := 0 To LanerTable.RowCount - 1 Do

	        For c := 0 To LanerTable.ColumnCount - 1 Do

	            Debug.WriteLine(LanerTable.FootnoteValues(r, c)[0])

	        End For;

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены первые
 сноски, добавленные для ячеек с данными.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
