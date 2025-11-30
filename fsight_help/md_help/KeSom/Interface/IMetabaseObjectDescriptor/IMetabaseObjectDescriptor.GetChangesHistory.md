# IMetabaseObjectDescriptor.GetChangesHistory

IMetabaseObjectDescriptor.GetChangesHistory
-


# IMetabaseObjectDescriptor.GetChangesHistory


## Синтаксис


		GetChangesHistory(Start: DateTime; End_:
		 DateTime): [IAuditOperations](../IAuditOperations/IAuditOperations.htm);


## Параметры


Start. Начальная дата;


End. Конечная дата.


## Описание


Метод GetChangesHistory возвращает
 коллекцию записей протокола доступа, которые содержат информацию о действиях,
 произведенных над объектами в заданном промежутке времени.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Obj_1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		    Operations: IAuditOperations;

		    Start, End_: DateTime;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := MB.ItemById("Obj_1");

		    End_ := DateTime.Now;

		    Start := DateTime.AddDays(End_, -10);

		    Operations := MDesc.GetChangesHistory(Start, End_);

		    While Not Operations.Eof Do

		        Debug.WriteLine(Operations.Name + " " + Operations.Logon.UserName);

		        Operations.Next;

		    End While;

		End Sub UserProc;


При выполнение примера будут получены записи протокола доступа, содержащие
 список действий над указанным объектом за последние десять дней. Наименование
 действий и пользователей, которые их произвели, будут выведены в консоль
 среды разработки.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
