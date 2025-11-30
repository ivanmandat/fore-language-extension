# IEtlPlainDataFilter.FilterIf

IEtlPlainDataFilter.FilterIf
-


# IEtlPlainDataFilter.FilterIf


## Синтаксис


FilterIf: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство FilterIf возвращает
 выражение, на основании которого отбираются записи.


## Комментарии


Выражение, указываемое в FilterIf,
 составляется из полей [входа](IEtlPlainDataFilter.PlainInput.htm)
 и должно возвращать логическое значение.


В зависимости от условия, заданного в свойстве [IEtlPlainDataFilter.KeepIfFulfillCondition](IEtlPlainDataFilter.KeepIfFulfillCondition.htm),
 через фильтр будут пропущены записи, удовлетворяющие выражению FilterIf
 или не удовлетворяющие ему.


По умолчанию [IEtlPlainDataFilter.KeepIfFulfillCondition](IEtlPlainDataFilter.KeepIfFulfillCondition.htm) = True, при этом пропускаются записи,
 удовлетворяющие выражению FilterIf.


## Пример


Пример использования приведен в подразделе «[Примеры](../../Samples/KeEtl_Sample.htm)»
 в примере по созданию преобразователя «[Фильтрация](../../Samples/Filter.htm)».


См. также:


[IEtlPlainDataFilter](IEtlPlainDataFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
