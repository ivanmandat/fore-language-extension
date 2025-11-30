# IMetabaseUsersUpdate.Callback

IMetabaseUsersUpdate.Callback
-


# IMetabaseUsersUpdate.Callback


## Синтаксис


Callback: [IMetabaseUsersUpdateCallback](../IMetabaseUsersUpdateCallback/IMetabaseUsersUpdateCallback.htm);


## Описание


Свойство Callback определяет
 объект, осуществляющий обработку ошибок, которые могут возникнуть при
 обновлении пользователей.


## Комментарии


В качестве значения свойства необходимо указать экземпляр пользовательского
 класса, реализующего свойства и методы интерфейса [IMetabaseUsersUpdateCallback](../IMetabaseUsersUpdateCallback/IMetabaseUsersUpdateCallback.htm).


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержатся
 пользователи.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Sec: IMetabaseSecurity;

    Users: IMetabaseUsers;

    User: IMetabaseUser;

    UsUpdate: IMetabaseUsersUpdate;

    UpdateCallback: IMetabaseUsersUpdateCallback;

    Results: IMetabaseUsersUpdateErrors;

    Error: IMetabaseUsersUpdateError;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    Sec := MB.Security;

    Users := Sec.Users;

    // Создадим обновление

    UsUpdate := Sec.CreateUsersUpdate;

    For Each User In Users Do

        UsUpdate.Add(User);

    End For;

    UpdateCallback := New UserUpdateClb.Create;

    UpdateCallback.CallbackResult := MetabaseUsersUpdateCallbackResult.SilentContinue;

    UsUpdate.Callback := UpdateCallback;

    // Обновим всех пользователей

    Sec.UpdateUsers(UsUpdate);

    Results := UsUpdate.Errors;

    // Зададим файл для выгрузки ошибок при обновлении

    If Results.Count <> 0 Then

        Results.SaveToFile("c:\UpdateUsersResult.txt", True);

    End If;

    For Each Error In Results Do

        If Error.Type = MetabaseUsersUpdateErrorType.Error Then

            Debug.WriteLine("Ошибка: " + Error.Message + ". Доп. информация: " + Error.DetailText);

        Else

            Debug.WriteLine("Предупреждение: " + Error.Message + ". Доп. информация: " + Error.DetailText);

        End If;

    End For;

    // Сохраним изменения

    Sec.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


Class UserUpdateClb: Object, IMetabaseUsersUpdateCallback

    _ClbResult: MetabaseUsersUpdateCallbackResult;


    Sub Process(Subject: ISecuritySubject);

    Begin

        Debug.WriteLine("Обновление пользователя: " + Subject.Name);

    End Sub Process;


    Function RequestAction(Error: IMetabaseUsersUpdateError): MetabaseUsersUpdateCallbackResult;

    Begin

        Select Case Error.Type

            Case MetabaseUsersUpdateErrorType.Warning:

                Debug.WriteLine("Предупреждение: " + Error.Message);

            Case MetabaseUsersUpdateErrorType.Error:

                Debug.WriteLine("Ошибка: " + Error.Message);

        End Select;

        Return _ClbResult;

    End Function RequestAction;


    Function get_CallbackResult: MetabaseUsersUpdateCallbackResult;

    Begin

        Return _ClbResult;

    End Function get_CallbackResult;


    Sub set_CallbackResult(Result: MetabaseUsersUpdateCallbackResult);

    Begin

        _ClbResult := Result;

    End Sub set_CallbackResult;

End Class UserUpdateClb;


После выполнения примера осуществляется обновление всех пользователей,
 созданных в менеджере безопасности репозитория. Для отслеживания процесса
 обновления создается объект пользовательского класса «UserUpdateClb».
 При возникновении каких-либо ошибок процесс обновления будет продолжен.
 После завершения, если во время обновления возникли ошибки/предупреждения,
 то информация о них будет выведена в консоль среды разработки, а также
 сохранена в файл.


См. также:


[IMetabaseUsersUpdate](IMetabaseUsersUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
