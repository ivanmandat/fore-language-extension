# IPrxBulkSettings.SelectionSet

IPrxBulkSettings.SelectionSet
-


# IPrxBulkSettings.SelectionSet


## Синтаксис


SelectionSet: [IPrxBulkSelectionSet](../IPrxBulkSelectionSet/IPrxBulkSelectionSet.htm);


## Описание


Свойство SelectionSet определяет
 допустимую отметку, в соответствии с которой будут созданы варианты регламентного
 отчета для выполнения пакетной операции.


## Комментарии


Отметка строится из измерений срезов, для работы с которыми созданы
 элементы управления. Элементы управления должны быть общие для листов,
 участвующих в пакетной операции. Количество отчетов, для которых будет
 выполнена операция, равно декартовому произведению отмеченных элементов
 в измерениях.


## Пример


Пример использования приведен в описании метода [IPrxReport.GetBulkSelectionSet](../IPrxReport/IPrxReport.GetBulkSelectionSet.htm).


См. также:


[IPrxBulkSettings](IPrxBulkSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
