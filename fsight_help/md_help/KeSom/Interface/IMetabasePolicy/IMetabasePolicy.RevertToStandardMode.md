# IMetabasePolicy.RevertToStandardMode

IMetabasePolicy.RevertToStandardMode
-


# IMetabasePolicy.RevertToStandardMode


## Синтаксис


RevertToStandardMode;


## Описание


Метод RevertToStandardMode отключает
 режим распределения ролей между администратором информационной безопасности
 и прикладным администратором.


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

    // Отключим режим
 распределения ролей между администраторами

    Policy.RevertToStandardMode;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера режим распределения ролей между администратором
 информационной безопасности и прикладным администратором будет отключен.
 Все функции будет выполнять прикладной администратор.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
