# IProcedure.DropProcedure

IProcedure.DropProcedure
-


# IProcedure.DropProcedure


## Синтаксис


DropProcedure([Options: Integer = 0]);


## Параметры


Options. Зарезервированный параметр.


## Описание


Метод DropProcedure осуществляет удаление из базы данных на сервере процедуры, на которую ссылается данная процедура репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории процедуры с идентификатором «Proc_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Proc: IProcedure;

Begin

    MB := MetabaseClass.Active;

    Proc := MB.ItemById("Proc_1").Bind As IProcedure;

    Proc.DropProcedure;

End Sub UserProc;


После выполнения примера из базы данных на сервере будет удалена процедура, на которую ссылается процедура репозитория «New_Proc_1».


См.также:


[IProcedure](IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
