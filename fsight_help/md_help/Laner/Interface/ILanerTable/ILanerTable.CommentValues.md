# ILanerTable.CommentValues

ILanerTable.CommentValues
-


# ILanerTable.CommentValues


## Синтаксис


CommentValues(Row: Integer; Column: Integer): Array;


## Параметры


Row. Индекс строки;


Column. Индекс столбца.


## Описание


Свойство CommentValues
 возвращает идентификаторы атрибутов, отвечающие за формирование комментариев
 для наблюдения в указанной ячейке.


## Комментарии


Для получения идентификаторов, отвечающих за формирование префиксов
 и суффиксов, используйте свойства [ILanerTable.PrefixValues](ILanerTable.PrefixValues.htm)
 и [ILanerTable.SuffixValues](ILanerTable.SuffixValues.htm).


## Пример


Для выполнения примера предполагается наличие рабочей книги с идентификатором
 WORKBOOK_PREFIX. В данной рабочей книге должны использоваться атрибуты
 для формирования комментариев, префиксов и суффиксов для наблюдений.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Table: ILanerTable;

	    i: Integer;

	    Attr: Array Of Variant;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    EaxAn := mb.ItemById("WORKBOOK_PREFIX").Bind As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем таблицу рабочей книги

	    Table := Laner.Execute;

	    // Выводим значение комментария

	    Attr := Table.CommentValues(0, 0);

	    For i := 0 To Attr.Length - 1 Do

	        Debug.WriteLine("Комментарий: " + Attr[i]);

	    End For;

	    // Выводим значение префикса

	    Attr := Table.PrefixValues(0, 0);

	    For i := 0 To Attr.Length - 1 Do

	        Debug.WriteLine("Префикс: " + Attr[i]);

	    End For;

	    // Выводим значение суффикса

	    Attr := Table.SuffixValues(0, 0);

	    For i := 0 To Attr.Length - 1 Do

	        Debug.WriteLine("Суффикс: " + Attr[i]);

	    End For;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены идентификаторы
 атрибутов, отвечающих за формирование комментариев, префиксов и суффиксов
 для наблюдений в первой ячейке рабочей книги.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
