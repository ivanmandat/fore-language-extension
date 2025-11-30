# EaxMdService.setChartSelection

EaxMdService.setChartSelection
-


**


# EaxMdService.setChartSelection


## Синтаксис


setChartSelection(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 series: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*series.*
 Метаданные, содержащие информацию о рядах диаграммы;


*callback.* Возвратная
 функция.


## Описание


Метод setChartSelection**
 устанавливает выделение рядов диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчёта. Установим выделение рядов:


// Будем выделять второй элемент для второго и третьего рядов
series =  [ {
                index: 1, // Второй ряд
                points: {
                    Item: [1]
                }
            }, {
                index: 2, // Третий ряд
                points: {
                    Item: [1]
                }
            }];
// Установим выделение
eaxMdService.setChartSelection(eaxAnalyzer, series);
// Получим представление диаграммы
dV = expressBox.getDataView();
cV = dV.getChartView();
// Обновим диаграмму
cV.refreshAll();

В результате выполнения примера в диаграмме было применено выделение
 второго элемента для второго и третьего рядов.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
