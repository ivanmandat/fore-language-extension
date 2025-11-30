# IDatasetInstance.CreateBatchUpdate

IDatasetInstance.CreateBatchUpdate
-


# IDatasetInstance.CreateBatchUpdate


## Синтаксис


CreateBatchUpdate: [IDatasetBatchUpdate](../IDatasetBatchUpdate/IDatasetBatchUpdate.htm);


## Описание


Метод CreateBatchUpdate создает
 объект, осуществляющий обновление данных.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором "Table_1". В таблице имеется три целочисленных
 поля.


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

	    Dsi := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Fields := Dsi.Fields;

	    Dbu := Dsi.CreateBatchUpdate;

	    Dbu.BatchCommand := DatasetBatchCommand.Update;

	    Dbu.KeyFieldNames := Fields.Item(0).Id;

	    Dbu.BeginUpdate;

	    While Not Dsi.Eof Do

	        i := Fields.Item(0).Value As Integer;

	        If i > 100 Then

	            Vals[0] := i;

	            Vals[1] := Fields.Item(1).Value;

	            Vals[2] := (i + (Fields.Item(1).Value As Integer)) * 100;

	            Dbu.AddRecord(Vals);

	        End If;

	        Dsi.Next;

	    End While;

	    Dbu.Commit;

	    Dsi.Close;

	End Sub UserProc;


После выполнения примера в таблице будут обновлены записи, значения
 первого поля которых, больше 100. При обновлении будет изменено значение
 третьего поля с учетом значений предыдущих двух полей.


См. также:


[IDatasetInstance](IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
