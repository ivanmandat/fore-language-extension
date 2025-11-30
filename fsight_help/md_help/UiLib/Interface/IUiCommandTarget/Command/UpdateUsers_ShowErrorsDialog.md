# UpdateUsers_ShowErrorsDialog

UpdateUsers_ShowErrorsDialog
-


# Команда UpdateUsers_ShowErrorsDialog


## Назначение


Открытие окна с ошибками обновления пользователей.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значения:


		 Параметр
		 Описание


		 [IMetabaseUsersUpdateErrors](KeSom.chm::/Interface/IMetabaseUsersUpdateErrors/IMetabaseUsersUpdateErrors.htm)
		 Информация об ошибках, которые могли произойти при обновлении
		 пользователей. Данную информацию можно получить в свойстве [IMetabaseUsersUpdate.Errors](KeSom.chm::/Interface/IMetabaseUsersUpdate/IMetabaseUsersUpdate.Errors.htm).


## Особенности применения


Команда доступна для использования после обновления пользователей. Обновление
 пользователей происходит при выполнении метода [IMetabaseSecurity.UpdateUsers](KeSom.chm::/Interface/IMetabaseSecurity/IMetabaseSecurity.UpdateUsers.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Metabase, Ui.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MBSec: IMetabaseSecurity;

		    Users: IMetabaseUsers;

		    User: IMetabaseUser;

		    UserUpdate: IMetabaseUsersUpdate;

		    Result: IMetabaseUsersUpdateErrors;

		    Target: IUiCommandTarget;

		    Context: IUiCommandExecutionContext;

		    Lic: Object;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим лицензию для возможности работы с менеджером безопасности

		    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

		    MBSec := MB.Security;

		    Users := MBSec.Users;

		    UserUpdate := MBSec.CreateUsersUpdate;

		    UserUpdate.Callback := New UsersUpdateCallback.Create;

		    For Each User In Users Do

		        UserUpdate.Add(User);

		    End For;

		    // Обновим всех пользователей, добавленных в менеджере безопасности

		    MBSec.UpdateUsers(UserUpdate);

		    // Получим список ошибок, которые могли возникнуть при обновлении

		    Result := UserUpdate.Errors;

		    Target := WinApplication.Instance.GetPluginTarget("Adm");

		    Context := Target.CreateExecutionContext;

		    Context.Data := Result;

		    Target.Execute("UpdateUsers_ShowErrorsDialog", Context);

		    // Освободим лицензию

		    Lic := Null;

		End Sub Main;


		Class UsersUpdateCallback: Object, IMetabaseUsersUpdateCallback

		    UpdateResult: MetabaseUsersUpdateCallbackResult;


		    Function RequestAction(ErrorInfo: IMetabaseUsersUpdateError): MetabaseUsersUpdateCallbackResult;

		    Begin

		        Return MetabaseUsersUpdateCallbackResult.SilentContinue;

		    End Function RequestAction;


		    Sub Process(Subject: ISecuritySubject);

		    Begin

		        Debug.WriteLine("Обновление пользователя: " + Subject.Name);

		    End Sub Process;


		    Function get_CallbackResult: MetabaseUsersUpdateCallbackResult;

		    Begin

		        Return UpdateResult;

		    End Function get_CallbackResult;


		    Sub set_CallbackResult(Value: MetabaseUsersUpdateCallbackResult);

		    Begin

		        UpdateResult := Value;

		    End Sub set_CallbackResult;

		End Class UsersUpdateCallback;


После выполнения примера будет осуществлено обновление всех пользователей,
 добавленных в менеджере безопасности текущего репозитория. Если во время
 обновления какого-либо пользователя возникают ошибки, то обновление все
 равно будет продолжено. После обновления всех пользователей будет выведено
 окно с информацией обо всех возникших ошибках.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
