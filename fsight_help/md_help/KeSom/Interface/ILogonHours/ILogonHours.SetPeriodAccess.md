# ILogonHours.SetPeriodAccess

ILogonHours.SetPeriodAccess
-


# ILogonHours.SetPeriodAccess


## Синтаксис


SetPeriodAccess(Begin_: DateTime; End_: DateTime;
 Grant: Boolean);


## Параметры


Begin_. Начальное время временного
 промежутка;


End_. Конечное время временного
 промежутка;


Grant. Параметр, определяющий
 возможность доступа в указанном временном промежутке.


## Описание


Метод SetPeriodAccess устанавливает
 параметры доступа пользователя для указанного промежутка времени.


## Комментарии


Если в качестве значения параметра Grant
 передается значение True, то доступ
 в данном временном промежутке будет разрешен. Если в качестве значения
 передается False, то доступ будет
 запрещен.


Временной промежуток формируется путем указания в параметрах Begin_
 и End_ начального и конечного
 времени соответственно. Параметр Grant
 определяет возможность доступа в данном временном промежутке.


В методе SetPeriodAccess промежуток времени задается с точностью до
 секунд, в поле миллисекунд должно быть указано значение «0».


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

    LogonHP := MP.LogonHoursPolicy(User);

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

    LH := LogonHP.WeekDayHours(CalendarDayOfWeek.Saturday); // суббота

    LH.SetPeriodAccess(d1, d4, False);

    LogonHP.WeekDayHours(CalendarDayOfWeek.Saturday) := LH;

    LH := LogonHP.WeekDayHours(CalendarDayOfWeek.Sunday);
 // воскресенье

    LH.SetPeriodAccess(d1, d4, False);

    LogonHP.WeekDayHours(CalendarDayOfWeek.Sunday) := LH;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будут изменены параметры доступа по дням недели
 для пользователя USER. Доступ под этим пользователем будет возможен с
 понедельника по пятницу с 9 до 18 часов.


См. также:


[ILogonHours](ILogonHours.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
