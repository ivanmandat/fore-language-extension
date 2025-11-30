# ISecuritySubject.MemberOfO

ISecuritySubject.MemberOfO
-


# ISecuritySubject.MemberOfO


## Синтаксис


MemberOfO(Options: Integer): [IMetabaseGroups](../IMetabaseGroups/IMetabaseGroups.htm);


## Параметры


Options. Параметры получения
 списка групп.


## Описание


Метод MemberOfO возвращает коллекцию
 групп, в которую входит данный субъект безопасности с учетом заданных
 параметров получения групп.


## Комментарии


В качестве значения параметра Options
 укажите одно из значений перечисления [SecuritySubjectMemberOfO](../../Enums/SecuritySubjectMemberOfO.htm).


## Пример


Для выполнения примера предполагается, что в менеджере безопасности
 репозитория добавлен доменный пользователь «DOMAIN\TESTUSER».


			Sub UserProc;

Var

    MB: IMetabase;

    User: ISecuritySubject;

    Groups: IMetabaseGroups;

    Group: IMetabaseGroup;

Begin

    MB := MetabaseClass.Active;

    User := MB.Security.ResolveName("DOMAIN\TESTUSER");

    Groups := User.MemberOfO(SecuritySubjectMemberOfO.NoNTFetch);

    For Each Group In Groups Do

        Debug.WriteLine(Group.Name + " (" + (Group.IsNT ? "Доменная группа пользователей)" : "Группа пользователей, созданная в менеджере безопасности)"));

    End For;

End Sub UserProc;


При выполнении примера будет получен список групп, в которые включён
 указанный пользователь репозитория. Наименования и тип групп будут выведены
 в консоль среды разработки. Получение списка групп осуществляется без
 обращения к службе каталогов.


См. также:


[ISecuritySubject](ISecuritySubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
