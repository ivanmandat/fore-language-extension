# IMsProblemCalculation.SaveHistory

IMsProblemCalculation.SaveHistory
-


# IMsProblemCalculation.SaveHistory


## Синтаксис


SaveHistory: Boolean;


## Описание


Свойство SaveHistory определяет
 признак сохранения истории расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Допустимые значения:


	- True. История расчёта
	 сохраняется. При этом [IMsProblemCalculation.SaveHistoryMask](IMsProblemCalculation.SaveHistoryMask.htm)
	 примет значение [MsCalculationHistorySet.Full](../../Enums/MsCalculationHistorySet.htm).


	- False. По умолчанию.
	 История расчёта не сохраняется.


На значение данного свойства влияет свойство [IMsProblemCalculation.SaveHistoryMask](IMsProblemCalculation.SaveHistoryMask.htm).
 Если для значения [IMsProblemCalculation.SaveHistoryMask](IMsProblemCalculation.SaveHistoryMask.htm)
 установить любой тип [MsCalculationHistorySet](../../Enums/MsCalculationHistorySet.htm),
 кроме [MsCalculationHistorySet.None](../../Enums/MsCalculationHistorySet.htm),
 то SaveHistory автоматически принимает
 значение True. Если в качестве
 значения [IMsProblemCalculation.SaveHistoryMask](IMsProblemCalculation.SaveHistoryMask.htm)
 установить [MsCalculationHistorySet.None](../../Enums/MsCalculationHistorySet.htm),
 то SaveHistory автоматически принимает
 значение False.


## Пример


Использование свойства приведено в примере для [IMsProblemCalculation.SaveHistoryMask](IMsProblemCalculation.SaveHistoryMask.htm).


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
