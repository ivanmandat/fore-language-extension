# IMetabasePolicy.SupportUserPrivateFolder

IMetabasePolicy.SupportUserPrivateFolder
-


# IMetabasePolicy.SupportUserPrivateFolder


## Синтаксис


SupportUserPrivateFolder: Boolean;


## Описание


Свойство SupportUserPrivateFolder
 определяет использование механизма [личных папок](Admin.chm::/03_Admin/Users/Admin_UserFolder.htm)
 пользователей.


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

    // Включим использование механизма личных папок пользователей

    Policy.SupportUserPrivateFolder := True;

    // Выведем в
 консоль идентификатор папки, содержащей личные папки пользователей

    Debug.WriteLine(Policy.UserPrivateFolderRoot.Id);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет включено использование механизма личных
 папок пользователей. В консоль будет выведен идентификатор папки, содержащей
 личные папки пользователей.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
