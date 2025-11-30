# IMetabasePolicy.PrivilegeName

IMetabasePolicy.PrivilegeName
-


# IMetabasePolicy.PrivilegeName


## Синтаксис


PrivilegeName(Index: Integer): String;


## Параметры


Index. Индекс
 привилегии.


## Описание


Свойство PrivilegeName возвращает
 наименование привилегии по индексу.


## Комментарии


Доступное количество привилегий возвращает свойство [PrivilegeCount](IMetabasePolicy.PrivilegeCount.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Policy: IMetabasePolicy;

    i, c: Integer;

Begin

    Mb := MetabaseClass.Active;

    Policy := Mb.Security.Policy;

    // Доступное количество привилегий

    c := Policy.PrivilegeCount;

    // Наименования привилегий

    For i := 0 To c - 1 Do

        Debug.WriteLine(Policy.PrivilegeName(i));

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки
 будут выведены наименования привилегий, доступных в менеджере безопасности.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
