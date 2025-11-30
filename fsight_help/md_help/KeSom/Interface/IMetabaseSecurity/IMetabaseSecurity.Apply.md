# IMetabaseSecurity.Apply

IMetabaseSecurity.Apply
-


# IMetabaseSecurity.Apply


## Синтаксис


Apply: [MetabaseSecurityApplyInformation](../../Enums/MetabaseSecurityApplyInformation.htm);


## Описание


Метод Apply применяет политику
 безопасности и возвращает информацию о произведенном обновлении.


## Комментарии


Если метод возвращает MetabaseSecurityApplyInformation.NoSysGrants,
 то изменения вступят в силу после обновления пользователей. Под применением
 политики безопасности понимается сохранение всех изменений, содержащихся
 в настройках менеджера безопасности.


## Пример


Использование метода приведено в примерах для [IMetabaseUser.MaxLogonSessions](../IMetabaseUser/IMetabaseUser.MaxLogonSessions.htm),
 [IMetabaseSecurity.CurrentDomainSubjectAddState](IMetabaseSecurity.CurrentDomainSubjectAddState.htm),
 [ISecurityCategory.AddLevel](../ISecurityCategory/ISecurityCategory.AddLevel.htm),


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)
 | [IMetabaseSecurity.Revert](IMetabaseSecurity.Revert.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
