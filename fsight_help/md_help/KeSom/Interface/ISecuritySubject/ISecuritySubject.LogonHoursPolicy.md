# ISecuritySubject.LogonHoursPolicy

ISecuritySubject.LogonHoursPolicy
-


# ISecuritySubject.LogonHoursPolicy


## Синтаксис


LogonHoursPolicy: [ILogonHoursPolicy](../ILogonHoursPolicy/ILogonHoursPolicy.htm);


## Описание


Свойство LogonHoursPolicy возвращает
 настройки доступа субъекта безопасности к платформе по времени.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MP: IMetabasePolicy;

    User: ISecuritySubject;

    LogonHP: ILogonHoursPolicy;

    LH: ILogonHours;

    d1, d2, d3, d4: DateTime;

    i: Integer;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MP := MS.Policy;

    // Получим параметры пользователя

    User := MS.ResolveName("USER");

    // Добавим расписание для разрешения доступа

    LogonHP := User.LogonHoursPolicy;

    d1 := DateTime.ComposeTimeOfDay(0, 0, 0, 0);

    d2 := DateTime.ComposeTimeOfDay(9, 0, 0, 0);

    d3 := DateTime.ComposeTimeOfDay(18, 0, 0, 0);

    d4 := DateTime.ComposeTimeOfDay(23, 59, 0, 0);

    For i := 1 To 5 Do

        LH := LogonHP.WeekDayHours(i As CalendarDayOfWeek);

        LH.SetPeriodAccess(d1, d2, False);

        LH.SetPeriodAccess(d2, d3, True);

        LH.SetPeriodAccess(d3, d4, False);

        LogonHP.WeekDayHours(i As CalendarDayOfWeek) := LH;

    End For;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будут изменены параметры доступа по дням недели
 для пользователя USER. Доступ под этим пользователем будет возможен с
 понедельника по пятницу с 9 до 18 часов и в выходные дни.


См. также:


[ISecuritySubject](ISecuritySubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
