# IEtlTask.FindById

IEtlTask.FindById
-


# IEtlTask.FindById


## Синтаксис


FindById(Id: String): [IEtlObject](../IEtlObject/IEtlObject.htm);


## Параметры


Id. Идентификатор
 объекта задачи.


## Описание


Метод FindById осуществляет
 поиск и возвращает объект задачи ETL.


## Пример


	Sub UserSub(Input: IEtlPlainRecordSets; Output: IEtlPlainRecordSets);

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ETLObj: IEtlObject;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ETLObj := EtlTask.FindById("i_excel");

	    s := ETLObj.Name;

	End Sub UserSub;


После выполнения примера в переменной «s» будет содержаться наименование
 объекта задачи ETL с идентификатором «i_excel». Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
