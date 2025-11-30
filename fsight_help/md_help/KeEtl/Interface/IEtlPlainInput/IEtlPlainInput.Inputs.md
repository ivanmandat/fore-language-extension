# IEtlPlainInput.Inputs

IEtlPlainInput.Inputs
-


# IEtlPlainInput.Inputs


## Синтаксис


Inputs: [IEtlPlainInputs](../IEtlPlainInputs/IEtlPlainInputs.htm);


## Описание


Свойство Inputs возвращает объект,
 содержащий родительский список входов.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    Inputs: IEtlPlainInputs;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(0);

	    Input := Link.DestinationObjectInput;

	    Inputs := Input.Inputs;

	End Sub UserProc;


После выполнения примера в переменной «Inputs» будет содержаться список
 входов приёмника данных первой связи задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainInput](IEtlPlainInput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
