# EaxMdService.setMainControlElements

EaxMdService.setMainControlElements
-


**


# EaxMdService.setMainControlElements


## Синтаксис


setMainControlElements(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, refreshPattern, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*metadata.* JSON-объект с настройками агрегации данных в фиксированных
 измерениях таблицы (свойство fixedElementsAggregation,
 значения которого являются элементами перечисления PP.Exp.Ui.[PvtAggregationOperation](../../../Enums/PvtAggregationOperation.htm))
 и кеширования данных (свойство useDataCache);


*refreshPattern.* Настройки
 обновления экспресс-отчета;


*callback.* Возвратная
 функция.


## Описание


Метод setMainControlElements**
 устанавливает функцию агрегации данных в фиксированных измерениях таблицы
 и управляет разрешением на кеширование данных в экспресс-отчете.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


Разрешим суммирование данных в фиксированных измерениях экспресс-отчета:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные
var metadata = {
    fixedElementsAggregation: PP.Exp.Ui.PvtAggregationOperation.Sum, // Суммирование данных
    useDataCache: false // Запрет на кеширование данных
};
var refreshPattern = "";
// Активируем агрегацию данных
eaxMdService.setMainControlElements(eaxAnalyzer, metadata, refreshPattern, PP.Delegate(this.onPanelChanged, eaxMdService));
// Обновим экспресс-отчет
expressBox.refreshAll();

В результате выполнения примера на вкладке «Данные» боковой панели экспресс-отчета
 было установлено агрегирование данных в фиксированных измерениях путём
 их суммирования.


[EaxMdService](EaxMdService.htm)
 | [EaxMdService.setAgrMethod](EaxMdService.setAgrMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
