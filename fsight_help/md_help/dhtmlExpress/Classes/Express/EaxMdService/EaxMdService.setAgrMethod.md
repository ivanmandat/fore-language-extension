# EaxMdService.setAgrMethod

EaxMdService.setAgrMethod
-


# EaxMdService.setAgrMethod


## Синтаксис


setAgrMethod(report: [PP.Exp.EaxDocument](../EaxDocument/EaxDocument.htm),
 pvtAggregationOperation: [PP.Exp.Ui.PvtAggregationOperation](../../../Enums/PvtAggregationOperation.htm),
 callback: PP.Delegate)


## Параметры


report. Документ экспресс-отчета;


pvtAggregationOperation. Функция
 агрегации данных в фиксированных измерениях таблицы;


callback. Возвратная функция.


## Описание


Метод setAgrMethod устанавливает
 функцию агрегации данных в фиксированных измерениях таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Разрешим суммирование данных в фиксированных
 измерениях экспресс-отчета:


// Получаем сервис для работы с экспресс-отчетом
var eaxMdService = expressBox._Service;
// Получаем документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определяем возвратную функцию
var onSetAgrMethod = function (sender, args) {
    // Обновляем экспресс-отчет
    expressBox.getDataView().refreshAll();
};
// Устанавливаем функцию агрегации данных в отчёте
eaxMdService.setAgrMethod(eaxAnalyzer, PP.Exp.Ui.PvtAggregationOperation.Sum, PP.Delegate(onSetAgrMethod, this));
В результате выполнения примера на вкладке «Данные» боковой панели экспресс-отчета
 было установлено агрегирование данных в фиксированных измерениях путём
 их суммирования.


[EaxMdService](EaxMdService.htm) | [EaxMdService.setMainControlElements](EaxMdService.setMainControlElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
