# EaxMdService.setTabSheetSelection

EaxMdService.setTabSheetSelection
-


**


# EaxMdService.setTabSheetSelection


## Синтаксис


setTabSheetSelection(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm), metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Настройки выделения ячеек таблицы. Параметр представляет собой JSON-объект со свойствами type - тип выделения (на данный момент доступно только значение «Normal»), range - диапазон выделяемых ячеек таблицы;


*callback.* Возвратная функция.


## Описание


Метод setTabSheetSelection** устанавливает выделение ячеек таблицы в экспресс-отчёте.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей области экспресс-отчёта. Выделим ячейки таблицы в диапазоне C2-D2:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные
var metadata = {
    type: "Normal",
    range: {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
        type: "MultiPart",
        parts: {
            it: [{ // Установим диапазон выделяемых ячеек
                height: 1,
                width: 2,
                top: 2,
                left: 2,
                type: "Cells"
            }]
        }
    }
};
// Выделим ячейки таблицы
eaxMbService.setTabSheetSelection(eaxAnalyzer, metadata);
// Обновим экспресс-отчет
expressBox.refreshAll();

В результате выполнения примера были выделены ячейки таблицы в диапазоне C2-D2.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
