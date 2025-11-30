# IProcedure.Kind

IProcedure.Kind
-


# IProcedure.Kind


## Синтаксис


Kind: [ProcedureKind](../../Enums/ProcedureKind.htm);


## Описание


Свойство Kind позволяет определить тип создаваемого объекта: функция или процедура.


## Пример


Для выполнения примера предполагается наличие БД репозитория с идентификатором «BD». На сервере имеется таблица с физическим именем "Table_1".


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Proc: IProcedure;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_PROCEDURE;

    CrInfo.Id := "New_Func_1";

    CrInfo.Name := "New_Func_1";

    CrInfo.Parent := MB.Root;

    Proc := MB.CreateObject(CrInfo).Edit As IProcedure;

    Proc.Database := Mb.ItemById("BD").Bind As IDatabase;

    Proc.Kind := ProcedureKind.Function_;

    Proc.Text("ORCL") :=

        "Return number" + #13 + #10 +

        "As Param number;" + #13 + #10 +

        "Begin" + #13 + #10 +

        "Select Count(*) Into Param From Table_1;" + #13 + #10 +

        "Return Param;" + #13 + #10 +

        "End;";

    Proc.NativeName := "New_Func_1";

    (Proc As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана новая функция. При выполнении данной функции в качестве значения будет возвращаться количество записей, содержащихся в таблице "Table_1".


См.также:


[IProcedure](IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
