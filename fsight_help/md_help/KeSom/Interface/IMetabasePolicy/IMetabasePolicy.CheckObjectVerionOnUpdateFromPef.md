# IMetabasePolicy.CheckObjectVerionOnUpdateFromPef

IMetabasePolicy.CheckObjectVerionOnUpdateFromPef
-


# IMetabasePolicy.CheckObjectVerionOnUpdateFromPef


## Синтаксис


CheckObjectVerionOnUpdateFromPef: Boolean;


## Описание


Свойство CheckObjectVerionOnUpdateFromPef
 определяет признак проверки версии объектов при обновлении.


## Комментарии


Допустимые значения:


	- True. Проверка версии
	 объектов при обновлении включена;


	- False. По умолчанию.
	 Проверка версии объектов при обновлении выключена.


Для получения подробной информации о контроле версий объектов при обновлении
 обратитесь к статье «[Общие
 настройки политики](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm#version_control)».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

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

    // Включим проверку версии объектов при обновлении

    If Policy.CheckObjectVerionOnUpdateFromPef = False Then

        Policy.CheckObjectVerionOnUpdateFromPef := True;

    End If;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера будет включена проверка версии объектов
 при обновлении.


См. также:


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
