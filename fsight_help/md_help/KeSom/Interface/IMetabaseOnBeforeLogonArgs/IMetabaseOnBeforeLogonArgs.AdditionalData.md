# IMetabaseOnBeforeLogonArgs.AdditionalData

IMetabaseOnBeforeLogonArgs.AdditionalData
-


# IMetabaseOnBeforeLogonArgs.AdditionalData


## Синтаксис


AdditionalData: [IDictionary](ModCollections.chm::/Interface/IDictionary/IDictionary.htm);


## Описание


Свойство AdditionalData возвращает
 дополнительные данные, которые могут использоваться при подключении к
 репозиторию.


## Комментарии


В текущей реализации дополнительные данные будут присутствовать, если
 настроена аутентификация с использованием протокола OAuth 2.0. Более подробно
 об использование данного протокола читайте в статье «[Настройка
 аутентификации через внешние сервисы](Setup.chm::/UiWebSetup/Authentication/login_settings_using_external_services.htm)». Среди дополнительных
 данных будет присутствовать элемент с ключом TOKEN, содержащий токен авторизации,
 и элемент с ключом DATA, содержащий информацию о пользователе в JSON-формате.


## Пример


Указанный пример демонстрирует класс, который может использоваться для
 обработки события подключения к репозиторию из веб-сервиса. Если при подключении
 будут присутствовать дополнительные данные, то они будут выведены в консоль
 среды разработки.


Добавьте ссылки на системные сборки: Collection, Metabase.


			Public Class CustomEvents: ForeMetabaseCustomEvents

    Public Sub OnBeforeLogon(Args: IMetabaseOnBeforeLogonArgs);

    Var

        Doc: IJsonDocument;

        Key, Value: String;

        DataDict: IDictionary;

    Begin

        Args.Handled := False;

        Args.AllowLogon := True;

        Args.ResultMetabase := Args.Metabase;

        // Просмотр дополнительных данных

        DataDict := Args.AdditionalData;

        For Each Key In DataDict.Keys Do

            Value := DataDict.Item(Key);

            If Key = "DATA" Then

                // Получаем JSON и выполняем необходимые действия с ним

                Doc := New JsonDocument.Create;

                Doc.ReadFromString(Value);

                Value := Doc.WriteToString(JsonformatOptions.UnIndented);

            End If;

            Debug.WriteLine("Key: " + Key + ". Value: " + Value);

        End For;

    End Sub OnBeforeLogon;

End Class CustomEvents;


См. также:


[IMetabaseOnBeforeLogonArgs](IMetabaseOnBeforeLogonArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
