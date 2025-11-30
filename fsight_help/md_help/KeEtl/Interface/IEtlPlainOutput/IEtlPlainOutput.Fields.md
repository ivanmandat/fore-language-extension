# IEtlPlainOutput.Fields

IEtlPlainOutput.Fields
-


# IEtlPlainOutput.Fields


## Синтаксис


Fields: [IEtlPlainFields](../IEtlPlainFields/IEtlPlainFields.htm);


## Описание


Свойство Fields возвращает объект,
 содержащий список полей выхода текущего объекта.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    Fields: IEtlPlainFields;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(7);

	    Output := Link.SourceObjectOutput;

	    Fields := Output.Fields;

	    i := Fields.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 полей выхода текущего объекта. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlPlainOutput](IEtlPlainOutput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
