# IMsModelPeriod.IdentificationAutoStartDate

IMsModelPeriod.IdentificationAutoStartDate
-


# IMsModelPeriod.IdentificationAutoStartDate


## Синтаксис


IdentificationAutoStartDate(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm); Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)): [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Параметры


Calculation. Настройки, необходимые при расчете модели.


Coord. Параметров координаты в переменной, по которой будет производиться расчет.


## Описание


Свойство IdentificationAutoStartDate возвращает дату начала периода идентификации, если используются условия для вычисления границ периода расчета модели.


## Комментарии


Признак использования условий для вычисления границ периода расчета модели возвращает свойство [IMsModel.UseAutoPeriod](../IMsModel/IMsModel.UseAutoPeriod.htm).


Для одновременного получения всех границ расчета модели используйте метод [IMsModelPeriod.AutoPeriodDates](IMsModelPeriod.AutoPeriodDates.htm).


## Пример


Использование свойства приведено в примере для [IMsModelPeriod.ForecastAutoEndDate](IMsModelPeriod.ForecastAutoEndDate.htm).


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
