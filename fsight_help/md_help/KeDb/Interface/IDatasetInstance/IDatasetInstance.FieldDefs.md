# IDatasetInstance.FieldDefs

IDatasetInstance.FieldDefs
-


# IDatasetInstance.FieldDefs


## Синтаксис


FieldDefs: [IDatasetModelFields](../IDatasetModelFields/IDatasetModelFields.htm);


## Описание


Свойство FieldDefs возвращает
 структуру всех полей источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    ModelFields: IDatasetModelFields;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DSInst:=MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    ModelFields:=DSInst.FieldDefs;

	    i:=ModelFields.Count;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 полей источника данных с идентификатором «Table_1».


См. также:


[IDatasetInstance](IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
