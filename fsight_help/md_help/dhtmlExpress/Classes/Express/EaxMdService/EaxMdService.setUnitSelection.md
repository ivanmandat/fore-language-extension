# EaxMdService.setUnitSelection

EaxMdService.setUnitSelection
-


# EaxMdService.setUnitSelection


## Синтаксис


setUnitSelection(report: [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 unitOption: [PP.Exp.UnitOption](../../../Enums/PP.Exp.UnitOption.htm),
 callback: PP.Delegate);


## Параметры


report. Отчет, для которого
 выполняется масштабирование единиц измерения;


unitOption. Вариант пересчета
 единиц измерения;


callback. Процедура обратного
 вызова.


## Описание


Метод setUnitSelection масштабирует
 единицы измерения экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Нормализуем единицы измерения экспресс-отчета:


// Определим экспресс-отчет
report = expressBox.getSource();
// Нормализуем единицы измерения экспресс-отчета
eaxMdService.setUnitSelection(report, PP.Exp.UnitOption.Normalized);
// Обновим отчет
expressBox.refreshAll();
В результате выполнения примера единицы измерения экспресс-отчета будут
 нормализованы.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
