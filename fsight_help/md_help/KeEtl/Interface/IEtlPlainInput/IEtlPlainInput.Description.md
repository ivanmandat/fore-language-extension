# IEtlPlainInput.Description

IEtlPlainInput.Description
-


# IEtlPlainInput.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 описание (примечание) входа текущего объекта.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(0);

	    Input := Link.DestinationObjectInput;

	    s := Input.Description;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться описание
 входа объекта-приёмника первой связи задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainInput](IEtlPlainInput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
