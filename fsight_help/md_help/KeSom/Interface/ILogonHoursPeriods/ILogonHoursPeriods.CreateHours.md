# ILogonHoursPeriods.CreateHours

ILogonHoursPeriods.CreateHours
-


# ILogonHoursPeriods.CreateHours


## Синтаксис


CreateHours: [ILogonHours](../ILogonHours/ILogonHours.htm);


## Описание


Метод CreateHours создает объект,
 используемый для настройки доступа по часам в течение дня.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь «USER».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MP: IMetabasePolicy;

    User: ISecuritySubject;

    LogonHP: ILogonHoursPolicy;

    LH: ILogonHours;

    LHP: ILogonHoursPeriods;

    d1, d2, d3, d4: DateTime;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MP := MS.Policy;

    // Получим параметры пользователя

    User := MS.ResolveName("USER");

    LogonHP := MP.LogonHoursPolicy(User);

    LHP := LogonHP.Periods;

    // Добавим период для разрешения доступа

    LH := LHP.CreateHours;

    d1 := DateTime.ComposeTimeOfDay(0, 0, 0, 0);

    d2 := DateTime.ComposeTimeOfDay(9, 0, 0, 0);

    d3 := DateTime.ComposeTimeOfDay(18, 0, 0, 0);

    d4 := DateTime.ComposeTimeOfDay(23, 59, 0, 0);

    LH.SetPeriodAccess(d1, d2, False);

    LH.SetPeriodAccess(d2, d3, True);

    LH.SetPeriodAccess(d3, d4, False);

    d1 := DateTime.Now;

    d2 := DateTime.AddDays(d1, 30);

    LHP.SetPeriodAccess(d1, d2, LH);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будут изменены параметры доступа в определенный
 период времени для пользователя «USER». Начиная с текущего дня, и в течение
 следующих 30 дней, доступ под этим пользователем будет возможен с 9 часов
 утра до 18 часов вечера.


См. также:


[ILogonHoursPeriods](ILogonHoursPeriods.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
