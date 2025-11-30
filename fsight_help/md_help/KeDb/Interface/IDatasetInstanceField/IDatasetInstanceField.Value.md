# IDatasetInstanceField.Value

IDatasetInstanceField.Value
-


# IDatasetInstanceField.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 поля источника данных.


## Комментарии


Значение, указываемое в данном свойстве, должно иметь такой же тип данных,
 какой установлен для поля. Если поле имеет пользовательский тип, то в
 качестве значения указывается ссылка на поток данных. Более подробно работа
 с полями пользовательского типа описана в базе знаний в статье «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    Fields: IDatasetInstanceFields;

	    v, v1: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    Cache.Edit;

	    Fields := Cache.Fields;

	    Fields.Item(0).Value := 100;

	    v := Fields.Item(0).Value;

	    v1 := Fields.Item(0).OldValue;

	    Cache.Cancel;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в кеше источника данных будет изменено значение
 первого поля, в переменной «v» будет содержаться новое значение, а в "v1"
 - старое значение поля. После этого все изменения будут отменены.


См. также:


[IDatasetInstanceField](IDatasetInstanceField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
