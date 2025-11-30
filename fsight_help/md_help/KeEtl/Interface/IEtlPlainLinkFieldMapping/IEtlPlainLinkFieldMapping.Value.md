# IEtlPlainLinkFieldMapping.Value

IEtlPlainLinkFieldMapping.Value
-


# IEtlPlainLinkFieldMapping.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 константы, если тип связи между полями приёмника и источника - Constant.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    Input: IEtlPlainInput;

	    Field: IEtlPlainField;

	    FieMapp: IEtlPlainLinkFieldMapping;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Link := EtlTask.Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    Output := Link.SourceObjectOutput;

	    Field := Input.Fields.Item(2);

	    FieMapp := Link.Link(Field);

	    FieMapp.Type := 1 As EtlPlainLinkFieldMappingType;

	    FieMapp.Value := "Pole_3";

	    Object.Save;

	End Sub UserProc;


После выполнения примера третьему полю входа приёмника будет соответствовать
 константа «Pole_3».


См. также:


[IEtlPlainLinkFieldMapping](IEtlPlainLinkFieldMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
