# ILanerTable.ColumnCount

ILanerTable.ColumnCount
-


# ILanerTable.ColumnCount


## Синтаксис


ColumnCount: Integer;


## Описание


Свойство ColumnCount возвращает
 количество столбцов в таблице.


## Комментарии


Для получения количества строк в таблице используйте свойство [ILanerTable.RowCount](ILanerTable.RowCount.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES.


Добавьте ссылки на системные сборки: Express, Laner, MathFin, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanerTbl: ILanerTable;

	    i, j: Integer;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    // Получаем объект для настройки рабочей книги

	    Laner := EaxAn.Laner;

	    // Получаем таблицу рабочей книги

	    LanerTbl := Laner.Execute;

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

	    If LanerTbl.RowCount > 4 Then

	        // Если в таблице больше 4-х строк, то отменяем изменения

	        Laner.Update;

	    Else

	        // Если в таблице меньше 4-х строк, то сохраняем изменения

	        LanerTbl.Post;

	    End If;

	    // Сохраняем изменения в рабочей книге

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера будут сгенерированы случайные значения
 для всех ячеек таблицы, доступных для редактирования. Если в таблице меньше
 четырех строк, то изменения в данных будут сохранены, если больше - изменения
 в данных будут отменены.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
