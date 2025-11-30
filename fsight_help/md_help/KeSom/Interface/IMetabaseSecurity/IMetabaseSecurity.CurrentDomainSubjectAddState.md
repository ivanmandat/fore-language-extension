# IMetabaseSecurity.CurrentDomainSubjectAddState

IMetabaseSecurity.CurrentDomainSubjectAddState
-


# IMetabaseSecurity.CurrentDomainSubjectAddState


## Синтаксис


CurrentDomainSubjectAddState(Type: [SecuritySubjectType](../../Enums/SecuritySubjectType.htm)):
 [DomainSubjectAddState](../../Enums/DomainSubjectAddState.htm);


## Параметры


Type. Тип субъектов безопасности,
 для которых необходимо определить параметры добавления.


## Описание


Свойство CurrentDomainSubjectAddState
 определяет настройки добавления доменных субъектов безопасности.


## Комментарии


Заданные настройки в свойстве CurrentDomainSubjectAddState
 будут применяться для всех добавляемых пользователей. Данное свойство
 является аналогом свойства [IMetabase.CurrentDomainSubjectAddState](../IMetabase/IMetabase.CurrentDomainSubjectAddState.htm).


## Пример


Для выполнения примера предполагается наличие домена «GROUP1», в котором
 содержатся пользователи с сочетанием «TEST*» в наименовании. Соответствующие
 пользователи также созданы на сервере БД и имеют определенные гранты на
 объекты текущего репозитория.


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

    // Получим объект для поиска пользователей

    SubSearch := MBSec.NewSubjectsSearch;

    SubSearch.NameCriteria := "GROUP1\TEST*";

    // Установим поиск только доменных пользователей

    SubSearch.AreaIncludeDB := False;

    SubSearch.AreaIncludeNT := True;

    SubSearch.SubjectCriteria(SecuritySubjectType.User) := True;

    SubSearch.ExecuteSearch;

    // Получим пользователей

    Subjects := SubSearch.Subjects;

    If Subjects.Count > 0 Then

        // Установим параметры добавления доменных пользователей

        MBSec.CurrentDomainSubjectAddState(SecuritySubjectType.User) :=

            DomainSubjectAddState.MakeExternalOn

            Or DomainSubjectAddState.ManageDBGrantsOff

            Or DomainSubjectAddState.Keep;

        // Добавим всех найденных пользователей

        For Each Subject In Subjects Do

             MBSec.AddNTSubject(Subject);

        End For;

        // Сохраним изменения

        MBSec.Apply;

        // Освободим лицензию

        Lic := Null;

     End If;

End Sub UserProc;


После выполнения примера будет осуществлен поиск всех доменных пользователей,
 наименование которых удовлетворяет маске «GROUP1\TEST*». Найденные пользователи
 будут добавлены в список пользователей репозитория. Для пользователей
 будет установлен признак подключаемых с сервера. При раздаче привилегий
 и прав на объекты репозитория соответствующие гранты в базе репозитория
 раздаваться не будут.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
