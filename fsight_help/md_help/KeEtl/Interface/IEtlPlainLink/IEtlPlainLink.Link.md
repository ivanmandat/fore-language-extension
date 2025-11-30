# IEtlPlainLink.Link

IEtlPlainLink.Link
-


# IEtlPlainLink.Link


## Синтаксис


Link(D: [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm)):
 [IEtlPlainLinkFieldMapping](../IEtlPlainLinkFieldMapping/IEtlPlainLinkFieldMapping.htm);


## Параметры


D. Поле
 выхода источника данных.


## Описание


Свойство Link возвращает привязку
 полей приёмника к полям источника либо подставляемое значение в зависимости
 от типа привязки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    Field: IEtlPlainField;

	    FileMapp: IEtlPlainLinkFieldMapping;

	    Type: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Links := EtlTask.Links;

	    Link := Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    Field := Input.Fields.Item(0);

	    FileMapp := Link.Link(Field);

	    Type := FileMapp.Type;

	End Sub UserProc;


После выполнения примера в переменной «Type» будет содержаться тип привязки
 первого поля первой связи объектов задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainLink](IEtlPlainLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
