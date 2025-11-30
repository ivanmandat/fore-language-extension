# IEtlPlainOutput.Description

IEtlPlainOutput.Description
-


# IEtlPlainOutput.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 описание (примечание) выхода текущего объекта.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(0);

	    Output := Link.SourceObjectOutput;

	    s := Output.Description;

	End Sub UserProc;


После выполнения примера в переменной "s" будет содержаться
 описание выхода объекта-источника первой связи задачи ETL. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainOutput](IEtlPlainOutput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
