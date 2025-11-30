# IDatasetModel.Fields

IDatasetModel.Fields
-


# IDatasetModel.Fields


## Синтаксис


Fields: [IDatasetModelFields](../IDatasetModelFields/IDatasetModelFields.htm);


## Описание


Свойство Fields возвращает объект,
 содержащий коллекцию полей источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Fields: IDatasetModelFields;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    DSModel:=DSInst.Dataset;

	    Fields:=DSModel.Fields;

	    i:=Fields.Count;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 полей источника данных. Идентификатор источника данных - «Table_1».


См. также:


[IDatasetModel](IDatasetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
