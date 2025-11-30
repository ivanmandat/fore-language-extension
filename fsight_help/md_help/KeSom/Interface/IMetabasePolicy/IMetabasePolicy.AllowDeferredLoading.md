# IMetabasePolicy.AllowDeferredLoading

IMetabasePolicy.AllowDeferredLoading
-


# IMetabasePolicy.AllowDeferredLoading


## Синтаксис


AllowDeferredLoading: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство AllowDeferredLoading
 определяет признак отложенной загрузки дескрипторов при подключении к
 репозиторию.


## Комментарии


По умолчанию свойство имеет значение Undefined, при этом признак отложенной
 загрузки дескрипторов будет взят из свойства [DeferredLoading](../IMetabaseLinkBase/IMetabaseLinkBase.DeferredLoading.htm),
 которое задано в [описании
 репозитория](../IMetabaseDefinition/IMetabaseDefinition.htm).


Если AllowDeferredLoading имеет значение OffOption, то все подключения
 к репозиторию происходят без отложенной загрузки дескрипторов. Значение
 свойства [DeferredLoading](../IMetabaseLinkBase/IMetabaseLinkBase.DeferredLoading.htm)
 игнорируется.


Если AllowDeferredLoading имеет значение OnOption, то все подключения
 к репозиторию происходят c отложенной загрузкой дескрипторов. Значение
 свойства [DeferredLoading](../IMetabaseLinkBase/IMetabaseLinkBase.DeferredLoading.htm)
 игнорируется.


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

    // Установим подключение к репозиторию без отложенной загрузки дескрипторов

    Policy.AllowDeferredLoading := TriState.OffOption;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера все подключения к репозиторию будут происходить
 без отложенной загрузки дескрипторов.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
