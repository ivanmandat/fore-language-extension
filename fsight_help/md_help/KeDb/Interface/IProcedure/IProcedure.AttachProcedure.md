# IProcedure.AttachProcedure

IProcedure.AttachProcedure
-


# IProcedure.AttachProcedure


## Синтаксис


AttachProcedure(ProcedureName: String; [MakeExternal: Boolean = False]; [Connection: [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm) = Null]);


## Параметры


ProcedureName. Физическое имя процедуры в базе данных, в соответствии с текстом которой, осуществляется обновление текста текущей процедуры;


MakeExternal. Параметр, определяющий признак присоединенной процедуры. Если в качестве значения параметра передается False, то происходит обновление структура процедуры, если True, то для процедуры будет установлен признак прикрепленной;


Connection. Необязательный параметр, позволяющий напрямую указать соединение с базой данных.


## Описание


Метод AttachProcedure обновляет информацию о структуре процедуры в репозитории, в соответствии со структурой процедуры на сервере БД. Также метод используется при создании присоединенной процедуры.


## Пример


Для выполнения примера предполагается наличие в репозитории процедуры с идентификатором «Proc_1».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Pro: IProcedure;

Begin

    Mb := MetabaseClass.Active;

    MObj := Mb.ItemById("Proc_1").Edit;

    Pro := MObj As IProcedure;

    Pro.AttachProcedure("Proc_1");

    Pro.Refresh;

End Sub UserProc;


После выполнения примера будет осуществлено обновление текста процедуры "Proc_1" из базы данных.


См.также:


[IProcedure](IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
