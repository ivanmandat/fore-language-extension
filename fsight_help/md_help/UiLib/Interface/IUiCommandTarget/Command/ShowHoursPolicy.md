# ShowHoursPolicy

ShowHoursPolicy
-


# Команда ShowHoursPolicy


## Назначение


Вызов стандартного диалога разграничения доступа пользователя в систему
 по времени.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseUser](KeSom.chm::/Interface/IMetabaseUser/IMetabaseUser.htm),

[ISecuritySubject](KeSom.chm::/Interface/ISecuritySubject/ISecuritySubject.htm)
		 Пользователь, для которого необходимо настроить разграничение
		 прав доступа по времени.


## Особенности применения


Отсутствуют


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылки на системные сборки: Metabase, Ui.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MbSec: IMetabaseSecurity;

		    User: ISecuritySubject;

		    Target: IUiCommandTarget;

		    Context: IUiCommandExecutionContext;

		    Lic: Object;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим лицензию для возможности работы с менеджером безопасности

		    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

		    MbSec := MB.Security;

		    User := MbSec.ResolveName("USER");

		    Target := WinApplication.Instance.GetPluginTarget("Adm");

		    Context := Target.CreateExecutionContext;

		    Context.Data := User;

		    Target.Execute("ShowHoursPolicy", Context);

		    // Сохраним изменения

		    MbSec.Apply;

		    // Освободим лицензию

		    Lic := Null;

		End Sub UserProc;


После выполнения примера будет отображен диалог разграничения доступа
 в систему по времени для пользователя USER.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
