# IEtlPlainLinkFieldMapping.Field

IEtlPlainLinkFieldMapping.Field
-


# IEtlPlainLinkFieldMapping.Field


## Синтаксис


Field: [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm);


## Описание


Свойство Field определяет поле
 источника данных, если тип связи между полями приёмника и источника -
 Field.


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

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Link := EtlTask.Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    Output := Link.SourceObjectOutput;

	    For i := 0 To Input.Fields.Count-1 Do

	        Field := Input.Fields.Item(i);

	        FieMapp := Link.Link(Field);

	        FieMapp.Type := 0 As EtlPlainLinkFieldMappingType;

	        FieMapp.Field := Output.Fields.Item(Input.Fields.Count-i-1);

	    End For;

	    Object.Save;

	End Sub UserProc;


После выполнения примера между полям выхода источника и входа приёмника
 будет установлена взаимообратная связь т.е. первому полю приёмника будет
 соответствовать последнее поле источника, второму полю приёмника - предпоследнее
 поле источника и т.д.


См. также:


[IEtlPlainLinkFieldMapping](IEtlPlainLinkFieldMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
