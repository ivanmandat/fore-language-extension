# Извлечение данных

Извлечение данных
-


# Извлечение данных


Для работы с данными любого реляционного источника репозитория реализован
 интерфейс [IDatasetInstance](../Interface/IDatasetInstance/IDatasetInstance.htm).
 Выходной набор данных представляет собой массив строк. Каждая строка массива
 это отдельная запись в источнике данных, содержащая значения всех полей.
 Для получения выходного набора данных необходимо открыть соответствующий
 объект репозитория используя метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm),
 либо [IMetabaseObjectDescriptor.OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm)
 и привести его к интерфейсу [IDatasetInstance](../Interface/IDatasetInstance/IDatasetInstance.htm):


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    FieldsDefs: IDatasetModelFields;

	    FieldsDef: IDatasetModelField;

	    FieldsInst: IDatasetInstanceFields;

	    FieldInst: IDatasetInstanceField;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    //Список полей

	    FieldsDefs := DSInst.FieldDefs;

	    For Each FieldsDef In FieldsDefs Do

	        Debug.Write(FieldsDef.Id + " ");

	    End For;

	    Debug.WriteLine("");

	    //Значения всех записей

	    While Not DSInst.Eof Do

	        FieldsInst := DSInst.Fields;

	        For Each FieldInst In FieldsInst Do

	            Debug.Write(FieldInst.Value + " ");

	        End For;

	        Debug.WriteLine("");

	        DSInst.Next;

	    End While;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера будут получены данные таблицы «Table_1». Список
 полей и значений всех записей будут выведены в консоль среды разработки.


См. также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
