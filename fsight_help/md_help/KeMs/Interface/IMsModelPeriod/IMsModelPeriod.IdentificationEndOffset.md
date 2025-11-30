# IMsModelPeriod.IdentificationEndOffset

IMsModelPeriod.IdentificationEndOffset
-


# IMsModelPeriod.IdentificationEndOffset


## Синтаксис


IdentificationEndOffset: Integer;


## Описание


Свойство IdentificationEndOffset
 определяет число периодов, на которое сдвигается дата окончания периода
 идентификации.


## Комментарии


IdentificationEndOffset учитывается,
 если выполняется одно из условий:


	- [IMsModelPeriod.AutoPeriod](IMsModelPeriod.AutoPeriod.htm)
	 использует значение, требующее задания дополнительного числа периодов,
	 например, MsAutoPeriodOptions.IdentEndAsNow;


	- задано свойство [IMsModelPeriod.IdentificationEndDate](IMsModelPeriod.IdentificationEndDate.htm).


## Пример


Использование свойства приведено в примере для [IMsModelPeriod.AutoPeriod](IMsModelPeriod.AutoPeriod.htm).


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
