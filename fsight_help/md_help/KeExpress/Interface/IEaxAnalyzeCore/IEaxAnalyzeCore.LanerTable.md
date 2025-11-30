# IEaxAnalyzeCore.LanerTable

IEaxAnalyzeCore.LanerTable
-


# IEaxAnalyzeCore.LanerTable


## Синтаксис


LanerTable: [ILanerTable](Laner.chm::/Interface/ILanerTable/ILanerTable.htm);


## Описание


Свойство LanerTable возвращает
 таблицу данных из рабочей книги базы данных временных рядов.


## Комментарии


Для получения рабочей книги используйте свойство [IEaxAnalyzeCore.Laner](IEaxAnalyzeCore.Laner.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK, содержащей ряды данных.


Добавьте ссылки на системные сборки: Express, Laner, MathFin, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    LanerTbl: ILanerTable;

	    i, j: Integer;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    // Получаем таблицу рабочей книги

	    LanerTbl := EaxAn.LanerTable;

	    // Переводим таблицу в режим редактирования

	    If Not LanerTbl.IsEditing Then

	        LanerTbl.Edit;

	    End If;

	    // Заполняем таблицу случайными числами

	    For i := 0 To LanerTbl.RowCount - 1 Do

	        For j := 0 To LanerTbl.ColumnCount - 1 Do

	            If LanerTbl.IsEditableCell(i, j) Then

	                LanerTbl.Cell(i, j) := Math.RandBetween(0, 100);

	            End If;

	        End For;

	    End For;

	    // Выходим из режима редактирования с сохранением данных

	    LanerTbl.Post;

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера данные в рабочей книге будут заменены
 случайными числами.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
