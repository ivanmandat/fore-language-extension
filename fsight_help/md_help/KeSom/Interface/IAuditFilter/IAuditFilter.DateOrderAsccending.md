# IAuditFilter.DateOrderAsccending

IAuditFilter.DateOrderAsccending
-


# IAuditFilter.DateOrderAsccending


## Синтаксис


DateOrderAsccending: Boolean;


## Описание


Свойство DateOrderAsccending
 определяет порядок сортировки по дате.


## Комментарии


Если свойству установлено значение True,
 то осуществляется сортировка по возрастанию даты, иначе False
 - по убыванию.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    AF: IAuditFilter;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    AF := Al.Filter;

    // Зададим сортировку протокола доступа по возрастанию даты

    AF.DateOrderAsccending := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлена сортировка протокола доступа
 по возрастанию даты.


См. также:


[IAuditFilter](IAuditFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
