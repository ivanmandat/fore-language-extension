# IMetabaseCustomObject.CheckAndAudit

IMetabaseCustomObject.CheckAndAudit
-


# IMetabaseCustomObject.CheckAndAudit


## Синтаксис


CheckAndAudit(OperationKey: Integer; Comment: String):
 Decimal;


## Параметры


OperationKey. Ключ операции
 пользовательского класса, возможность выполнения которой необходимо проверить.


Comment. Комментарий, который
 заносится в протокол доступа.


## Описание


Метод CheckAndAudit проверяет
 права доступа текущего пользователя на указанную операцию пользовательского
 класса и заносит запись в протокол доступа с указанным комментарием.


## Комментарии


Если у текущего пользователя отсутствуют права на указанную операцию,
 то в протокол доступа будет занесена запись с неуспешным результатом и
 будет сгенерирована исключительная ситуация.


Метод возвращает уникальный ключ записи, который вместе с записью заносится
 в протокол доступа.


Метод используется для проверки прав доступа на операции пользовательского
 класса, описываемые интерфейсом [IMetabaseCustomClassOperation](../IMetabaseCustomClassOperation/IMetabaseCustomClassOperation.htm).
 Для проверки прав доступа на основные и дополнительные операции используйте
 метод [IMetabaseObjectDescriptor.CheckAndAudit](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.CheckAndAudit.htm).


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

	    Key := CustObj.CheckAndAudit(

	            Operation.Key,

	            "Проверка прав на выполнение операции: " + Operation.Name);

	End Sub UserProc;


После выполнения примера для указанного объекта будет осуществлена проверка
 возможности выполнения первой операции пользовательского класса. Соответствующая
 запись будет добавлена в протокол доступа.


См. также:


[IMetabaseCustomObject](IMetabaseCustomObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
