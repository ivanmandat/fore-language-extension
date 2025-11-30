# IDatasetInstance.Next

IDatasetInstance.Next
-


# IDatasetInstance.Next


## Синтаксис


Next;


## Описание


Метод Next осуществляет переход
 на следующую запись в источнике данных.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «T_Data», в таблице имеется поле с идентификатором «Value».
 Добавьте ссылки на системные сборки Db и Metabase.


	Sub UserSample;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Fields: IDatasetInstanceFields;

	    Field: IDatasetInstanceField;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("T_Data").Open(Null) As IDatasetInstance;

	    Fields := DSInst.Fields;

	    Field := Fields.FindById("Value");

	    While Not DSInst.Eof Do

	        i := i + 1;

	        Debug.WriteLine("Номер: " + i.ToString + "; Значение: " + Field.Value);

	        DSInst.Next;

	    End While;

	    DSInst.Close;

	End Sub UserSample;


После выполнения примера в переменной «i» будет содержаться количество
 записей источника данных. Номера записей и значения поля «Value» будут
 выведены в консоль среды разработки.


См. также:


[IDatasetInstance](IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
