# IDatasetModelField.Size

IDatasetModelField.Size
-


# IDatasetModelField.Size


## Синтаксис


Size: Integer;


## Описание


Свойство Size возвращает общую
 длину поля источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Fields: IDatasetModelFields;

	    Field: IDatasetModelField;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    DSModel:=DSInst.Dataset;

	    Fields:=DSModel.Fields;

	    Field:=Fields.Item(0);

	    i:=Field.Size;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной i будет содержаться общая длина
 первого поля источника данных. Идентификатор источника данных - Table_1.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
