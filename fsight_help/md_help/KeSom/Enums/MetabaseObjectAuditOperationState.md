# MetabaseObjectAuditOperationState

MetabaseObjectAuditOperationState
-


# MetabaseObjectAuditOperationState


## Описание


Перечисление MetabaseObjectAuditOperationState содержит варианты аудита операции.


## Комментарии


Используется следующими методами:


-
[IMetabaseObjectDescriptor.CheckAndAuditOperation](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditOperation.htm);


-
[IMetabaseObjectDescriptor.CheckAndAuditOperationLabel](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditOperationLabel.htm),


## Допустимые значения


 Значение
 Краткое описание


 0
 Default. По умолчанию, используются настройки аудита репозитория.


 1
 ForceDeny. Выполнение операции запрещено. Операция будет занесена в протокол с результатом неуспешно, если включен аудит для типа проверяемого объекта.


 2
 ForceAudit. Операция будет запротоколирована.


 3
 ForceDenyAndAudit. Выполнение операции запрещено. Операция будет занесена в протокол с результатом неуспешно.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
