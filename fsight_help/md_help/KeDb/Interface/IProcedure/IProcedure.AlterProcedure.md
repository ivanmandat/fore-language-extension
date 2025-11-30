# IProcedure.AlterProcedure

IProcedure.AlterProcedure
-


# IProcedure.AlterProcedure


## Синтаксис


AlterProcedure(OldProcedure: [IProcedure](IProcedure.htm); [Options: Integer = 0]);


## Параметры


OldProcedure. Процедура, структуру которой необходимо обновить в соответствии со структурой текущей процедуры;


Options. Зарезервированный параметр.


## Описание


Метод AlterProcedure осуществляет обновление структуры процедуры OldProcedure на сервере БД в соответствии со структурой текущей процедуры.


## Пример


Для выполнения примера предполагается наличие в репозитории процедуры с идентификатором «Proc_1».


			Sub UserProc;

Var

    Mb: IMetabase;

    MObj: IMetabaseObject;

    Proc: IProcedure;

Begin

    Mb := MetaBaseClass.Active;

    MObj := Mb.ItemById("Proc_1").Edit;

    Proc := MObj As IProcedure;

    Proc.Text("ORCL") :=

        "As" + #13 + #10 +

        "Begin" + #13 + #10 +

        "Insert Into Table_1 values(0,'Value 0');" + #13 + #10 +

        "Insert Into Table_1 values(1,'Value 1');" + #13 + #10 +

        "End;";

    Proc.AlterProcedure(Proc);

End Sub UserProc;


После выполнения примера будет изменен текст процедуры "Proc_1" на сервере БД без изменения текста процедуры в репозитории.


См.также:


[IProcedure](IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
