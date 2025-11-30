# IMetabaseUser.ShortName

IMetabaseUser.ShortName
-


# IMetabaseUser.ShortName


## Синтаксис


ShortName: String;


## Описание


Свойство ShortName определяет
 короткий идентификатор доменного пользователя Oracle.


## Комментарии


Идентификатор имеет вид: UYYYYMMDDhhmmsslllrrrrrrrrrr.
 Где: U - префикс, YYYY - год, MM - месяц, DD - день, hh - часы, mm - минуты,
 ss - секунды, lll - миллисекунды, rrrrrrrrrr - случайное число.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MBSec: IMetabaseSecurity;

    SubSearch: ISecuritySubjectsSearch;

    Subjects: ISecuritySubjects;

    Subject, AddedSubject: ISecuritySubject;

    Date: String;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MBSec := MB.Security;

    // Зададим объект для поиска доменных пользователей

    SubSearch := MBSec.NewSubjectsSearch;

    SubSearch.NameCriteria := "FS\BS*";

    SubSearch.AreaIncludeDB := False;

    SubSearch.AreaIncludeNT := True;

    SubSearch.SubjectCriteria(SecuritySubjectType.User) := True;

    SubSearch.ExecuteSearch;

    // Получим найденных пользователей

    Subjects := SubSearch.Subjects;

    // Получим текущую дату

    Date := DateTime.Now.ToString;

    // Добавим пользователя

    For Each Subject In Subjects Do

        AddedSubject := MBSec.AddNTSubject(Subject);

        // Присвоим короткое имя из переменной Date и случайное число

        (AddedSubject As IMetabaseUser).ShortName := Date + "1234567891";

    End For;

    // Сохраним изменения

    MBSec.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет осуществлен поиск всех доменных пользователей,
 наименование которых удовлетворяет маске «FS\BS*». Найденные пользователи
 будут добавлены в список пользователей репозитория, которым будет присвоено
 короткое имя.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
