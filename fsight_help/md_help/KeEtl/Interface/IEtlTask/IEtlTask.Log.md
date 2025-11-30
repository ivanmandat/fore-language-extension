# IEtlTask.Log

IEtlTask.Log
-


# IEtlTask.Log


## Синтаксис


Log: [ILog](KeDb.chm::/Interface/ILog/ILog.htm);


## Описание


Свойство Log определяет журнал,
 в который записываются все системные сообщения, фиксирующих ход выполнения
 задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Log: ILog;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Log := EtlTask.Log;

	End Sub UserProc;


После выполнения примера в переменной «Log» будет содержаться журнал
 задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
