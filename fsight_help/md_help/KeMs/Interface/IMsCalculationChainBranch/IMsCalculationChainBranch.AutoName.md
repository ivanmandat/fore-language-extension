# IMsCalculationChainBranch.AutoName

IMsCalculationChainBranch.AutoName
-


# IMsCalculationChainBranch.AutoName


## Синтаксис


		AutoName: Boolean;


## Описание


Свойство AutoName определяет
 признак автоматической генерации наименования для условия в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Комментарии


Допустимые значения:


	- True. Наименование генерируется
	 автоматически;


	- False. По умолчанию.
	 Наименование задаётся пользователем вручную. Используйте свойство
	 [IMsCalculationChainEntry.Name](../IMsCalculationChainEntry/IMsCalculationChainEntry.Name.htm).


Правила автоматической генерации наименований:


		 Тип условия
		 Наименование, генерируемое автоматически


		 Условие с параметром
		 «Ветвление по параметру {наименование параметра условия}».


		 Условие без параметра
		 «Ветвление {i}», где i - счетчик условий без параметра, ранее
		 созданных в цепочке расчета, наименование которых генерируется
		 автоматически.


## Пример


Использование свойства приведено в примере для [IMsBranchCondition.ConditionJoin](../IMsBranchCondition/IMsBranchCondition.ConditionJoin.htm).


См. также:


[IMsCalculationChainBranch](IMsCalculationChainBranch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
