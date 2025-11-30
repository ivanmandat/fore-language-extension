# IDatasetModelField.DefaultValue

IDatasetModelField.DefaultValue
-


# IDatasetModelField.DefaultValue


## Синтаксис


DefaultValue: Variant;


## Описание


Свойство DefaultValue возвращает
 значение по умолчанию для поля источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Fields: IDatasetModelFields;

	    Field: IDatasetModelField;

	    v: Variant;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    DSModel:=DSInst.Dataset;

	    Fields:=DSModel.Fields;

	    Field:=Fields.Item(0);

	    v:=Field.DefaultValue;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной v будет содержаться значение по
 умолчанию первого поля источника данных. Идентификатор источника данных
 - Table_1.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
