# IDatasetBatchUpdate.Commit

IDatasetBatchUpdate.Commit
-


# IDatasetBatchUpdate.Commit


## Синтаксис


Commit: Boolean;


## Описание


Метод Commit применяет обновление
 (сохраняет значение записей из буфера в источник данных).


## Комментарии


При обновлении записи происходит поиск существующей записи в источнике
 данных по значениям ключевых полей. Искомые значения берутся из буфера.
 Если запись не найдена, то в источник данных будет добавлена новая запись.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «SOURSE». В таблице имеется три целочисленных поля.


Добавьте ссылки на системные сборки Metabase, Db.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dsi: IDatasetInstance;

	    Fields: IDatasetInstanceFields;

	    Dbu: IDatasetBatchUpdate;

	    Vals: Array[0..2] Of Variant;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dsi := MB.ItemById("SOURSE").Open(Null) As IDatasetInstance;

	    Fields := Dsi.Fields;

	    Dbu := Dsi.CreateBatchUpdate;

	    Dbu.BatchCommand := DatasetBatchCommand.Update;

	    Dbu.KeyFieldNames := Fields.Item(0).Id;

	    Dbu.FailPolicy := DatasetFailPolicy.CommitByRow;

	    Dbu.BeginUpdate;

	    While Not Dsi.Eof Do

	        i := Fields.Item(0).Value As Integer;

	        If i > 100 Then

	            Vals[0] := i;

	            Vals[1] := Fields.Item(1).Value;

	            Vals[2] := (i - (Fields.Item(1).Value As Integer)) * 100;

	            Dbu.AddRecord(Vals);

	        End If;

	        Dsi.Next;

	    End While;

	    Dbu.Commit;

	    Dsi.Close

	End Sub UserProc;


После выполнения примера в таблице будут обновлены записи, значения
 первого поля которых, больше 100. При обновлении будет изменено значение
 третьего поля с учетом значений предыдущих двух полей.


См. также:


[IDatasetBatchUpdate](IDatasetBatchUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
