# IMetabaseCustomObject.CheckAndAuditOperationLabel

IMetabaseCustomObject.CheckAndAuditOperationLabel
-


# IMetabaseCustomObject.CheckAndAuditOperationLabel


## Синтаксис


CheckAndAuditOperationLabel(OperationKey: Integer;
 Comment: String; State: [MetabaseObjectAuditOperationState](../../Enums/MetabaseObjectAuditOperationState.htm);
 Var Label: [ISecurityDocumentLabel](../ISecurityDocumentLabel/ISecurityDocumentLabel.htm)):
 Decimal;


## Параметры


OperationKey. Ключ операции
 пользовательского класса, возможность выполнения которой необходимо проверить.


Comment. Комментарий, который
 заносится в протокол доступа.


State. Вариант аудита операции.


Label. Переменная,
 в которую будут помещены параметры метки безопасности.


## Описание


Метод CheckAndAuditOperationLabel
 проверяет права доступа текущего пользователя на указанную операцию и
 протоколирует результат проверки в соответствии с выбранным вариантом
 аудита, а также вычисляет параметры метки безопасности, используемой при
 печати и экспорте объектов репозитория.


## Комментарии


Метка безопасности вычисляется при включенном мандатном доступе к объектам.


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
 метод [IMetabaseObjectDescriptor.CheckAndAuditOperationLabel](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAuditOperationLabel.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM». Для пользовательского
 класса должна быть создана операция с идентификатором «CLS1OP1».


			Sub UserProc;

Var

    MB: IMetabase;

    CustObj: IMetabaseCustomObject;

    Operation: IMetabaseCustomClassOperation;

    Label: ISecurityDocumentLabel;

    Key: Decimal;

Begin

    MB := MetabaseClass.Active;

    CustObj := MB.ItemById("OBJ_CUSTOM").Bind As IMetabaseCustomObject;

    Operation := CustObj.CustomClass.Operations.FindById("CLS1OP1");

    Try

        Key := CustObj.CheckAndAuditOperationLabel(Operation.Key,

            "Проверка прав на выполнение операции: " + Operation.Name,

            MetabaseObjectAuditOperationState.ForceAudit,

            Label);

    Except

        On E: Exception Do

        WinApplication.InformationBox(E.message);

    End Try;

    If Label.IsON Then

        Debug.WriteLine(Label.Label);

        Debug.WriteLine(Label.LabelDescription);

        Debug.WriteLine(Label.TreatSectionAsDocument);

        Debug.WriteLine(Label.User.Name);

    End If;

End Sub UserProc;


После выполнения примера будет осуществлена проверка наличия прав у
 текущего пользователя на выполнение указанной операции пользовательского
 класса. В протокол доступа будет добавлена запись о возможности выполнения
 операции. Если в репозитории включен мандатный контроль доступа и для
 объекта выставлен уровень доступа, для которого включена маркировка объектов
 при экспорте и печати, то в переменной «Label» будут содержаться параметры
 метки безопасности, используемой для маркировки. Данные параметры будут
 выведены в консоль среды разработки.


См. также:


[IMetabaseCustomObject](IMetabaseCustomObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
