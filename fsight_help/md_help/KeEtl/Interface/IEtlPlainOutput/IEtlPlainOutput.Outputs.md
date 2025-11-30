# IEtlPlainOutput.Outputs

IEtlPlainOutput.Outputs
-


# IEtlPlainOutput.Outputs


## Синтаксис


Outputs: [IEtlPlainOutputs](../IEtlPlainOutputs/IEtlPlainOutputs.htm);


## Описание


Свойство Outputs возвращает
 объект, содержащий родительский список выходов.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    Outputs: IEtlPlainOutputs;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(0);

	    Output := Link.SourceObjectOutput;

	    Outputs := Output.Outputs;

	End Sub UserProc;


После выполнения примера в переменной «Outputs» будет содержаться список
 выходов источника данных первой связи задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainOutput](IEtlPlainOutput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
