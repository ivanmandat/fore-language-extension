# IMetabaseGroup.Role

IMetabaseGroup.Role
-


# IMetabaseGroup.Role


## Синтаксис


Role: String;


## Описание


Свойство Role определяет роль
 СУБД Oracle, которая сопоставлена данной группе пользователей.


## Комментарии


Свойство актуально только для доменных
 групп пользователей. При добавлении доменной группы в менеджер
 безопасности репозитория в качестве значения свойства Role
 указывается наименование группы. При необходимости его можно изменить.


Значение свойства Role используется,
 если вход в репозиторий осуществляется с использованием доменной авторизации
 и используются уровни безопасности. При подключении доменного пользователя,
 который отсутствует в менеджере безопасности репозитория, осуществляется
 проверка вхождения пользователя в доменные группы, которые подключены
 в менеджере безопасности. Если пользователь входит в какую-либо доменную
 группу, то проверяется соответствие роли, заданной для группы тем ролям,
 которые созданы на сервере СУБД. Если на сервере имеется указанная роль,
 то осуществляется подключение пользователя в соответствии с заданным для
 группы уровнем безопасности. Иначе выдается соответствующее сообщение
 об ошибке.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Search: ISecuritySubjectsSearch;

    Subjects: ISecuritySubjects;

    Subject: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Найдем доменную группу пользователей по параметрам

    Search := MS.NewSubjectsSearch;

    Search.NameCriteria := "DOMAIN_GROUP";

    Search.AreaIncludeDB := False;

    Search.AreaIncludeNT := True;

    Search.SubjectCriteria(SecuritySubjectType.Group) := True;

    Search.ExecuteSearch;

    Subjects := Search.Subjects; // найденные группы пользователей

    If Subjects.Count > 0 Then

        // Установим параметры добавления доменной группы

        MS.CurrentDomainSubjectAddState(SecuritySubjectType.Group) :=

        DomainSubjectAddState.MakeExternalOn

        Or DomainSubjectAddState.ManageDBGrantsOff;

        // Добавим доменную группу

        Subject := MS.AddNTSubject(Subjects.Item(0));

        (Subject As IMetabaseGroup).Role := "GUEST";

        // Сохраним изменения

        MS.Apply;

    End If;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера среди доменных субъектов безопасности будет
 осуществляться поиск группы «DOMAIN_GROUP». Если группа найдена, то она
 будет добавлена в список групп менеджера безопасности репозитория. Для
 группы будет определена роль «GUEST».


См. также:


[IMetabaseGroup](IMetabaseGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
