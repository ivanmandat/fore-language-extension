# IGxDocument.RangeName

IGxDocument.RangeName
-


# IGxDocument.RangeName


## Синтаксис


RangeName(RangeIndex: Integer): String;


## Параметры


RangeIndex. Индекс
 диапазона печати.


## Описание


Свойство RangeName возвращает
 наименование диапазона печати с указанным индексом.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Document: IGxDocument;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Document := MB.ItemById("REPORT").Bind As IGxDocument;

	    c := Document.RangeCount;

	    For i := 0 To c - 1 Do

	        Debug.WriteLine(Document.RangeName(i));

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименование
 всех диапазонов, доступных при печати отчёта.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
