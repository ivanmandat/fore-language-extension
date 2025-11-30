# IProcedure.UpdateProcedure

IProcedure.UpdateProcedure
-


# IProcedure.UpdateProcedure


## Синтаксис


UpdateProcedure([Options: Integer = 0]);


## Параметры


Options. Зарезервированный параметр.


## Описание


Метод UpdateProcedure осуществляет обновление структуры процедуры на сервере БД в соответствии со структурой текущей процедуры.


## Комментарии


Данный метод является аналогом метода [AlterProcedure](IProcedure.AlterProcedure.htm). При работе метода UpdateProcedure в качестве структуры процедуры, которую необходимо обновить, берется структура текущей процедуры в репозитории.


## Пример


Для выполнения примера предполагается наличие в репозитории процедуры с идентификатором «Proc_1». На сервере имеется таблица с физическим именем "Table_1".


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Proc: IProcedure;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("Proc_1").Edit;

    Proc := MObj As IProcedure;

    Proc.Text("ORCL") :=

        "As" + #13 + #10 +

        "Begin" + #13 + #10 +

        "For i In 1..10 Loop" + #13 + #10 +

        "insert into Table_1(field, field1) Values(i, i);" + #13 + #10 +

        "End Loop;" + #13 + #10 +

        "End;";

    Proc.Text("MSSQL") :=

        "As" + #13 + #10 +

        "Begin" + #13 + #10 +

        "Declare @i int" + #13 + #10 +

        "set @i = 0;" + #13 + #10 +

        "While (@i<10)" + #13 + #10 +

        "Begin" + #13 + #10 +

        "insert into Table_1(field, field1) Values(@i,@i);" + #13 + #10 +

        "set @i=@i+1;" + #13 + #10 +

        "End;" + #13 + #10 +

        "End;";

    Proc.UpdateProcedure;

    Proc.Refresh;

End Sub UserProc;


После выполнения примера будет изменен текст процедуры в репозитории, в соответствии с этими изменениями будет обновлен текст процедуры в базе данных. Для обновления указан текст процедуры в синтаксисе СУБД Oracle и MSSQL.


См.также:


[IProcedure](IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
