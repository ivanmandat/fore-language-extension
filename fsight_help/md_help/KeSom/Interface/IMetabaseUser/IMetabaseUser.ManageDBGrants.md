# IMetabaseUser.ManageDBGrants

IMetabaseUser.ManageDBGrants
-


# IMetabaseUser.ManageDBGrants


## Синтаксис


ManageDBGrants: Boolean;


## Описание


Свойство ManageDBGrants определяет,
 будут ли текущему пользователю раздаваться права на уровне СУБД.


## Комментарии


Данное свойство доступно для изменения только при создании нового пользователя
 в репозитории.


Если свойству установить значение True,
 то после создания пользователя в репозитории и изменении его привилегий
 либо раздаче прав на объекты репозитория, соответствующие гранты пользователю
 будут даны на сервере БД.


Если свойству установить значение False,
 то после создания пользователя в репозитории и изменении его привилегий,
 либо раздаче прав на объекты репозитория, соответствующие гранты пользователю
 на сервере БД раздаваться не будут. Данный вариант актуален, если создаваемый
 пользователь является подключаемым с сервера и уже имеет какие-либо гранты
 на объекты платформы.


## Пример


Для выполнения примера предполагается наличие домена «GROUP», в котором
 содержится пользователь «TESTER». Пользователь создан на сервере БД и
 имеет определенные гранты на объекты текущего репозитория.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MBSec: IMetabaseSecurity;

    SubSearch: ISecuritySubjectsSearch;

    Subjects: ISecuritySubjects;

    Subject: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MBSec := MB.Security;

    // Установим параметры добавления доменных пользователей

    MB.CurrentDomainSubjectAddState(SecuritySubjectType.User) :=

        DomainSubjectAddState.MakeExternalOff

        Or DomainSubjectAddState.ManageDBGrantsOn

        Or DomainSubjectAddState.Keep;

    // Зададим объект для поиска доменных пользователей

    SubSearch := MBSec.NewSubjectsSearch;

    SubSearch.NameCriteria := "GROUP\TESTER";

    SubSearch.AreaIncludeDB := False;

    SubSearch.AreaIncludeNT := True;

    SubSearch.SubjectCriteria(SecuritySubjectType.User) := True;

    SubSearch.ExecuteSearch;

    // Изменим параметры найденного пользователя

    Subjects := SubSearch.Subjects;

    Debug.WriteLine(Subjects.Count);

    If Subjects.Count > 0 Then

        Subject := Subjects.Item(0);

        Subject := MBSec.AddNTSubject(Subject);

        // Изменение параметров добавленного доменного пользователя

        // Данные параметры не соответствуют тем параметрам, которые

        // были установлены в свойстве CurrentDomainSubjectAddState

        (Subject As IMetabaseUser).External := True;

        (Subject As IMetabaseUser).ManageDBGrants := False;

        // Сохраним изменения

        MBSec.Apply;

        // Освободим лицензию

        Lic := Null;

     End If;

End Sub UserProc;


При выполнении примера будет осуществлен поиск доменного пользователя
 «GROUP\TESTER». Если пользователь найден, то он будет добавлен в список
 пользователей репозитория. При добавлении для пользователя будет установлен
 признак подключаемого с сервера. При раздаче привилегий и прав на объекты
 репозитория соответствующие гранты пользователю в базе репозитория раздаваться
 не будут.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
