# IEtlPlainDataDeduplicate.Rule

IEtlPlainDataDeduplicate.Rule
-


# IEtlPlainDataDeduplicate.Rule


## Синтаксис


Rule: [ETLAgregateFormula](../../Enums/EtlAgregateFormula.htm);


## Описание


Свойство Rule определяет правило
 отбора вычисленных значений.


## Комментарии


При удалении дубликатов используются два правила:


	- Запись удовлетворяет условию.


	- Запись не удовлетворяет условию.


При установке свойству Rule
 значения [ETLAgregateFormula.Max](../../Enums/EtlAgregateFormula.htm)
 будет использоваться второе правило. При любых других значениях - первое.


## Пример


Пример использования приведен в подразделе «[Примеры](../../Samples/KeEtl_Sample.htm)»
 в примере по созданию преобразователя «[Удаление
 дубликатов](../../Samples/Deduplicate.htm)».


См. также:


[IEtlPlainDataDeduplicate](IEtlPlainDataDeduplicate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
