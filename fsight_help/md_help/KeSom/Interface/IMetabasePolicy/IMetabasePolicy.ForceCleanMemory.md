# IMetabasePolicy.ForceCleanMemory

IMetabasePolicy.ForceCleanMemory
-


# IMetabasePolicy.ForceCleanMemory


## Синтаксис


ForceCleanMemory: Boolean;


## Описание


Свойство ForceCleanMemory определяет
 перезапись нулями освобождаемой памяти.


## Комментарии


По умолчанию свойство принимает значение False,
 освобождаемая память не перезаписывается нулями.


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

    // Включим перезапись

    Policy.ForceCleanMemory := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера освобождаемая память
 будет перезаписываться нулями.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
