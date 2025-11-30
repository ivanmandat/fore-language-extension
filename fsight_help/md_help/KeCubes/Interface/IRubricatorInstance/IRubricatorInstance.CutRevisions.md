# IRubricatorInstance.CutRevisions

IRubricatorInstance.CutRevisions
-


# IRubricatorInstance.CutRevisions


## Синтаксис


CutRevisions(FromRevision: Integer;


ToRevision: Integer;


SaveLabels: Boolean;


[RemoveDeleted: Boolean
 = False]);


## Параметры


FromRevision. Ключ первой ревизии
 в сжимаемом диапазоне. Если параметр принимает значение «-1», то сжатие
 выполняется от первой ревизии в БД временных рядов;


ToRevision. Ключ последней
 ревизии в сжимаемом диапазоне;


SaveLabels. Признак сохранения
 меток, попадающих в указанный диапазон ревизий. Если значение параметра
 True, то диапазон сжимаемых ревизий
 будет разделен на части, оканчивающиеся меткой. В каждой части будет произведено
 сжатие ревизий, все метки будут сохранены. Если False,
 то сжимаются все ревизии в указанном диапазоне независимо от наличия меток,
 метки не сохраняются;


RemoveDeleted. Определяет,
 сохранять ли данные удаленных временных рядов. False
 - значение по умолчанию. Сохранять данные, если временные ряды были удалены;
 True - данные удаленных временных
 рядов не будут сохранены. Значение True
 можно указывать только, если FromRevision
 = -1 и ToRevision = последняя
 ревизия. Необязательный параметр.


## Описание


Метод CutRevisions сжимает указанный
 диапазон ревизий.


## Комментарии


Сжатие ревизий может понадобиться, если база данных временных рядов
 уже не является актуальной, но должна быть сохранена и нет необходимости
 хранить данные по всем ревизиям.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rub: IRubricator;

	    RubI: IRubricatorInstance;

	    LastRevKey: Integer;

	    RevLookup: IMetaDictionaryLookup;

	    Current: IMetaDictionaryData;

	Begin

	    Mb := MetabaseClass.Active;

	    Rub := Mb.ItemById("TSDB").Bind As IRubricator;

	    RubI := (Rub As IMetabaseObject).Open(Null) As IRubricatorInstance;

	    RevLookup := RubI.Revisions.CreateLookup("KEY");

	    RevLookup.Open(DictionaryCursorOptions.None);

	    LastRevKey := -1;

	    While Not RevLookup.Eof Do

	        Current := RevLookup.Current;

	        If LastRevKey < Current.Record.Key Then

	            LastRevKey := Current.Record.Key;

	        End If;

	        RevLookup.Next;

	    End While;

	    RevLookup.Close;

	    RubI.CutRevisions(-1, LastRevKey, False, True);

	End Sub UserProc;


После выполнения примера все ревизии будут сжаты без сохранения данных
 удаленных временных рядов и меток.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
