# IMetabasePolicy.CreateDeferredSubjects

IMetabasePolicy.CreateDeferredSubjects
-


# IMetabasePolicy.CreateDeferredSubjects


## Синтаксис


CreateDeferredSubjects: Boolean;


## Описание


Свойство CreateDeferredSubjects
 определяет признак создания пользователей с отложенной загрузкой.


## Комментарии


По умолчанию свойство принимает значение False.


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

    // Разрешим создание пользователей с отложенной загрузкой

    Policy.CreateDeferredSubjects := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет разрешено создание пользователей с отложенной
 загрузкой.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
