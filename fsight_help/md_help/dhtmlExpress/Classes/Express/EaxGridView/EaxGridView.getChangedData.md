# EaxGridView.getChangedData

EaxGridView.getChangedData
-


**


# EaxGridView.getChangedData


## Синтаксис


getChangedData();


## Описание


Метод getChangedData** возвращает измененные данные в ячейках таблицы рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим изменённые данные в ячейках таблицы:


var changedData = expressBox.getDataView().getGridView().getChangedData();
for(var i = 0; i < changedData.length; i++ ) {
     var obj = changedData[i];
     console.log(obj.L);
}

В результате выполнения данного примера в консоли браузера будет выведен следующий текст:

1

2

3

4

6

3


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
