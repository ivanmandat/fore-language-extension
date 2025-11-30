# IMetabasePolicy.EnforceApplicationRole

IMetabasePolicy.EnforceApplicationRole
-


# IMetabasePolicy.EnforceApplicationRole


## Синтаксис


EnforceApplicationRole: Boolean;


## Описание


Свойство EnforceApplicationRole
 определяет использование роли приложения в политике безопасности.


## Комментарии


По умолчанию свойство принимает значение False.
 Если свойство принимает значение True,
 то в политике безопасности используется роль приложения. В таком случае
 доступ к базе данных репозитория можно получить только из «Форсайт. Аналитическая платформа».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Разрешим использование роли приложения

    Policy.EnforceApplicationRole := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера доступ к базе данных
 репозитория можно будет получить только из «Форсайт. Аналитическая платформа».


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
