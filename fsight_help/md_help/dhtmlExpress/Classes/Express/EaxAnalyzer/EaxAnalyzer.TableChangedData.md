# EaxAnalyzer.TableChangedData

EaxAnalyzer.TableChangedData
-


**


# EaxAnalyzer.TableChangedData


## Синтаксис


TableChangedData: Object


## Описание


Свойство TableChangedData** содержит измененные данные представления экспресс-отчета «Таблица».


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTableChangedData, а возвращается с помощью метода getTableChangedData.


Свойство содержит значение в виде JSON-объекта.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Введем в произвольную ячейку таблицы экспресс-отчета число 12, а затем определим координаты данной ячейки:


var eaxAnalyzer = expressBox.getSource();
// Получим измененные данные таблицы экспресс-отчета
var changedData = eaxAnalyzer.getTableChangedData();
// Выведем данные об изменениях
console.log(JSON.stringify(changedData.c[0]));

В результате выполнения примера в консоли браузера будет выведена информация об изменениях данных таблицы экспресс-отчета:


{"@column":8,"@row":6,"@v":"12","@dt":3}


Таким образом, число 12 было введено в ячейку, находящуюся на пересечении шестой строки и восьмого столбца.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
