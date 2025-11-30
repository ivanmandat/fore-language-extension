# IEtlPlainLink.FillDefault

IEtlPlainLink.FillDefault
-


# IEtlPlainLink.FillDefault


## Синтаксис


FillDefault;


## Описание


Метод FillDefault осуществляет
 привязку полей приёмника к полям источника по умолчанию.


## Комментарии


Структура полей приёмника дублируется из полей источника.


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

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Link := EtlTask.Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    Output := Link.SourceObjectOutput;

	    Link.FillDefault;

	    Object.Save;

	End Sub UserProc;


После выполнения примера по первой связи будет установлена привязка
 полей приёмника по умолчанию. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainLink](IEtlPlainLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
