# IMetabaseAuditPolicy.LogRecordCountThreshold

IMetabaseAuditPolicy.LogRecordCountThreshold
-


# IMetabaseAuditPolicy.LogRecordCountThreshold


## Синтаксис


LogRecordCountThreshold(State: Integer): Integer;


## Параметры


State. Порог, для которого
 необходимо определить предельное количество записей.


## Описание


Свойство LogRecordCountThreshold
 для указанного порога определяет количество записей протокола доступа,
 при достижении которого пользователю будет выводиться предупреждающее
 сообщение.


## Комментарии


В качестве значения параметра State
 допустимы значения «1» и «2».


В настройках политики безопасности можно определить два [пороговых
 значения](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm#threshold_values) количества записей в протоколе доступа, при
 превышении которых пользователю будет выдано сообщение о необходимости
 очистки протокола доступа.


Второе пороговое значения должно быть больше чем первое.


При подключении к менеджеру безопасности если достигнуто одно из пороговых
 значений, то пользователю будет выведено информационное сообщение о необходимости
 очистки протокола доступа.


Для снятия пороговых значений необходимо в данном свойстве установить
 значение «0».


Примечание.
 При установки пороговых значений осуществляется проверка, чтобы значение
 второго порога было больше значения первого порога. Для избежания ошибок
 во время данного сравнения рекомендуется второе пороговое значение устанавливать
 раньше чем первое.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AuditPolicy: IMetabaseAuditPolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Установим пороговые значения объема протокола доступа

    AuditPolicy := MS.Policy.AuditPolicy;

    AuditPolicy.LogRecordCountThreshold(2) := 20000;

    AuditPolicy.LogRecordCountThreshold(1) := 10000;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будут установлены первое и второе пороговое
 значения объема протокола доступа.


См. также:


[IMetabaseAuditPolicy](IMetabaseAuditPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
