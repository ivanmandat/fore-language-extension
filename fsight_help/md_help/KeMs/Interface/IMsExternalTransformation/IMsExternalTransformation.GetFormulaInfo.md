# IMsExternalTransformation.GetFormulaInfo

IMsExternalTransformation.GetFormulaInfo
-


# IMsExternalTransformation.GetFormulaInfo


## Синтаксис


		GetFormulaInfo(StubKey: Integer; SelSet:
		 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
		 [IMsFormulaInfoList](../IMsFormulaInfoList/IMsFormulaInfoList.htm);


## Параметры


StubKey. Ключ источника данных,
 для которого производился расчёт.


SelSet. Отметка, формирующая
 точку, в которой необходимо получить информацию о формулах.


## Описание


Метод GetFormulaInfo возвращает
 информацию о формулах, которые применялись для расчёта в заданной точке.


## Комментарии


Получение информации о формулах доступно при выполнении следующих требований:


	- При расчётах используются модель детерминированного уравнения
	 или модель матричной агрегации;


	- Для задачи должен быть установлен тип - Задача многопоточной
	 трансформации.


В параметре SelSet должна передаваться
 единичная отметка, сформированная по измерениям источника, ключ которого
 передаётся в StubKey.


См. также:


[IMsExternalTransformation](IMsExternalTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
