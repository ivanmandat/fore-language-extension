# IEtlPlainLinkFieldMapping.Type

IEtlPlainLinkFieldMapping.Type
-


# IEtlPlainLinkFieldMapping.Type


## Синтаксис


Type: [EtlPlainLinkFieldMappingType](../../Enums/EtlPlainLinkFieldMappingType.htm);


## Описание


Свойство Type определяет тип
 связи поля источника данных задачи ETL.


## Комментарии


Для определения поля источника данных используйте свойство [IEtlPlainLinkFieldMapping.Field](IEtlPlainLinkFieldMapping.Field.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL.


Добавьте ссылки на системные сборки: Etl и Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    FileMapp: IEtlPlainLinkFieldMapping;

	    Type: Integer;

	    Field: IEtlPlainField;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    // Получим связь между источником данных и приёмником

	    Links := EtlTask.Links;

	    Link := Links.Item(0);

	    // Получим поле выхода

	    Output := Link.SourceObjectOutput;

	    Field := Output.Fields.Item(0);

	    FileMapp := Link.Link(Field);

	    // Получим тип связи поля источника данных

	    Type := FileMapp.Type;

	    Debug.WriteLine("Тип связи: " + Type.ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено сообщение
 о типе связи поля источника данных задачи ETL.


См. также:


[IEtlPlainLinkFieldMapping](IEtlPlainLinkFieldMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
