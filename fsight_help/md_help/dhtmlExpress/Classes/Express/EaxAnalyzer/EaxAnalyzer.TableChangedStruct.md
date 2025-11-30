# EaxAnalyzer.TableChangedStruct

EaxAnalyzer.TableChangedStruct
-


**


# EaxAnalyzer.TableChangedStruct


## Синтаксис


TableChangedStruct: Object


## Описание


Свойство TableChangedStruct** содержит измененную структуру таблицы экспресс-отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTableChangedStruct, а возвращается с помощью метода getTableChangedStruct.


Свойство содержит значение в виде JSON-объекта во следующими полями: Columns - массив объектов-столбцов, Rows - массив объектов-строк таблицы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Изменим ширину первого столбца таблицы экспресс-отчета, затем получим новое значение его ширины:


var eaxAnalyzer = expressBox.getSource();
// Получим измененную структуру таблицы экспресс-отчета
var changedData = eaxAnalyzer.getTableChangedStruct();
// Получим первый столбец таблицы
var column = changedData.Columns.Column[0];
console.log(JSON.stringify(column));

В результате выполнения примера будет выведена информация о первой колонке таблицы экспресс-отчета (индекс колонки @I равно 0, её ширина @W равна 144):


{"@I":0,"@V":true,"@W":144}


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
