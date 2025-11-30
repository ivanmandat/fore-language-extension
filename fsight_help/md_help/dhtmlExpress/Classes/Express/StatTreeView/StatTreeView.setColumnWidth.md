# StatTreeView.setColumnWidth

StatTreeView.setColumnWidth
-


**


# StatTreeView.setColumnWidth


## Синтаксис


setColumnWidth(index, width);


## Параметры


*index.* Индекс столбца;


*width.* Значение ширины столбца.


## Описание


Метод setColumnWidth** устанавливает ширину для указанного столбца в дереве со статистическими характеристиками данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [StatTreeView](../../../Components/Express/StatTreeView/StatTreeView.htm) с наименованием «statTreeView» (см. «[Пример создания компонента StatTreeView](../../../Components/Express/StatTreeView/StatTreeView_Example.htm)»). Установим новую ширину для обоих столбцов дерева со статистическими характеристиками:


// Изменяем ширину колонки «Название статистики»
statTreeView.setColumnWidth(0, 200);
// Изменяем ширину колонки «Значение»
statTreeView.setColumnWidth(1, 50);
// Обновляем диалог со статистическими характеристиками
statTreeView.refresh();

В результате выполнения примера была изменена ширина столбцов «Название статистики» и «Значение»:


![](StatTreeView.setColumnWidth.png)


См. также:


[StatTreeView](StatTreeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
