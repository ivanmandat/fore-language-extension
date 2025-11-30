# IMetabaseCustomObject.CheckAndAuditOperation

IMetabaseCustomObject.CheckAndAuditOperation
-


# IMetabaseCustomObject.CheckAndAuditOperation


## Синтаксис


CheckAndAuditOperationLabel(OperationKey: Integer;
 Comment: String; State: [MetabaseObjectAuditOperationState](../../Enums/MetabaseObjectAuditOperationState.htm)):
 Decimal;


## Параметры


OperationKey. Ключ операции
 пользовательского класса, возможность выполнения которой необходимо проверить.


Comment. Комментарий, который
 заносится в протокол доступа.


State. Вариант аудита операции.


## Описание


Метод CheckAndAuditOperation
 проверяет права доступа текущего пользователя на указанную операцию пользовательского
 класса и протоколирует результат проверки в соответствии с выбранным вариантом
 аудита.


## Комментарии


Если у текущего пользователя отсутствуют права хотя бы на одну из проверяемых
 операций или выбран вариант аудита, запрещающий выполнение операции ([ForceDeny](../../Enums/MetabaseObjectAuditOperationState.htm),
 [ForceDenyAndAudit](../../Enums/MetabaseObjectAuditOperationState.htm)),
 то будет сгенерирована исключительная ситуация. В зависимости от имеющихся
 настроек аудита схемы и выбранного варианта аудита проверяемой операции
 (State) в протокол доступа может
 быть добавлена запись с неуспешным результатом.


Метод возвращает уникальный ключ записи, который вместе с записью заносится
 в протокол доступа.


Метод используется для проверки прав доступа на операции пользовательского
 класса, описываемые интерфейсом [IMetabaseCustomClassOperation](../IMetabaseCustomClassOperation/IMetabaseCustomClassOperation.htm).
 Для проверки прав доступа на основные и дополнительные операции используйте
 метод [IMetabaseObjectDescriptor.CheckAndAuditOperation](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditOperation.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM». Для пользовательского
 класса должна быть создана операция с идентификатором «CLS1OP1».


			Sub UserProc;

Var

    MB: IMetabase;

    CustObj: IMetabaseCustomObject;

    Operation: IMetabaseCustomClassOperation;

    Key: Decimal;

Begin

    MB := MetabaseClass.Active;

    CustObj := MB.ItemById("OBJ_CUSTOM").Bind As IMetabaseCustomObject;

    Operation := CustObj.CustomClass.Operations.FindById("CLS1OP1");

    Try

        Key := CustObj.CheckAndAuditOperation(Operation.Key,

            "Проверка прав на выполнение операции: " + Operation.Name,

            MetabaseObjectAuditOperationState.ForceDeny);

    Except

        On E: Exception Do

        WinApplication.InformationBox(E.message);

    End Try;

End Sub UserProc;


После выполнения примера будет сгенерирована исключительная ситуация
 (недостаточно прав для выполнения операции пользовательского класса).
 В протокол доступа будет добавлена запись с неуспешным результатом, если
 в настройках аудита схемы включен аудит для типа проверяемого объекта.


См. также:


[IMetabaseCustomObject](IMetabaseCustomObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
