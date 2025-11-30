# IEtlPlainInput.Link

IEtlPlainInput.Link
-


# IEtlPlainInput.Link


## Синтаксис


Link: [IEtlPlainLink](../IEtlPlainLink/IEtlPlainLink.htm);


## Описание


Свойство Link возвращает ссылку
 на объект-связку между объектами ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Consumer: IEtlPlainDataConsumer;

	    Link: IEtlPlainLink;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Consumer := EtlTask.Item(1) As IEtlPlainDataConsumer;

	    Link := Consumer.PlainInput.Link;

	End Sub UserProc;


После выполнения примера в переменной «Link» будет содержаться объект-связка
 объекта-приёмника задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainInput](IEtlPlainInput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
