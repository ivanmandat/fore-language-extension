# IEtlPlainLink.SourceObjectOutput

IEtlPlainLink.SourceObjectOutput
-


# IEtlPlainLink.SourceObjectOutput


## Синтаксис


SourceObjectOutput: [IEtlPlainOutput](../IEtlPlainOutput/IEtlPlainOutput.htm);


## Описание


Свойство SourceObjectOutput
 определяет выход объекта, из которого поступает поток данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Links := EtlTask.Links;

	    Link := Links.Item(0);

	    Output := Link.SourceObjectOutput;

	    s := Output.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 выхода объекта, из которого поступает поток данных. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainLink](IEtlPlainLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
