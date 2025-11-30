# IMetabasePolicy.PredefinedPrivilege

IMetabasePolicy.PredefinedPrivilege
-


# IMetabasePolicy.PredefinedPrivilege


## Синтаксис


PredefinedPrivilege(Predefined: [MetabasePolicyPredefinedPrivilege](../../Enums/MetabasePolicyPredefinedPrivilege.htm)):
 [IPrivilege](../IPrivilege/IPrivilege.htm);


## Описание


Свойство PredefinedPrivilege
 возвращает параметры указанной привилегии.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Priv: IPrivilege;

    User: ISecuritySubject;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Добавим обладателя привилегии

    Priv := Policy.PredefinedPrivilege(MetabasePolicyPredefinedPrivilege.ReadAnyObject);

    User := MS.ResolveName("USER") As ISecuritySubject;

    Priv.Grant(User);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера заданный пользователь
 USER станет обладателем привилегии «Право чтения и открытия всех объектов».


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
