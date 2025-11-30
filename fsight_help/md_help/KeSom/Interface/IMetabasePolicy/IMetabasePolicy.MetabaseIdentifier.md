# IMetabasePolicy.MetabaseIdentifier

IMetabasePolicy.MetabaseIdentifier
-


# IMetabasePolicy.MetabaseIdentifier


## Синтаксис


MetabaseIdentifier: String;


## Описание


Свойство MetabaseIdentifier
 определяет идентификатор репозитория.


## Комментарии


Данный идентификатор репозитория используется при контроле версии объектов
 при обновлении и будет учитываться в [свойствах объекта](UiNav.chm::/03_Objects/UiNav_Obj_BasicProp.htm).


Для получения подробной информации о контроле версий объектов при обновлении
 обратитесь к статье «[Общие
 настройки политики](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm#version_control)».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub Main;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Зададим наименование репозитория

    If Policy.MetabaseIdentifier = "" Then

        Policy.MetabaseIdentifier := "REPOSITORY";

    Else

        Debug.WriteLine(Policy.MetabaseIdentifier);

    End If;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub Main;


В результате выполнения примера будет задан идентификатор репозитория.


См. также:


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
