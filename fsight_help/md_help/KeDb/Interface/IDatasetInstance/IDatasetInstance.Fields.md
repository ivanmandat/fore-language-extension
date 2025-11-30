# IDatasetInstance.Fields

IDatasetInstance.Fields
-


# IDatasetInstance.Fields


## Синтаксис


Fields: [IDatasetInstanceFields](../IDatasetInstanceFields/IDatasetInstanceFields.htm);


## Описание


Свойство Fields возвращает коллекцию
 значений полей текущей записи источника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Fields: IDatasetInstanceFields;

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Fields := DSInst.Fields;

	    v:=Fields.Item(0).Value;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в переменной «v» будет содержаться значение
 первого поля первой записи источника данных. Идентификатор источника данных
 - "Table_1".


См. также:


[IDatasetInstance](IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
