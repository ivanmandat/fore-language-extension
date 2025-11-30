# TreeMapBox.getAreMetricsOn

TreeMapBox.getAreMetricsOn
-


# TreeMapBox.getAreMetricsOn


## Синтаксис


getAreMetricsOn();


## Описание


Метод getAreMetricsOn определяет
 наличие измерения метрик у визуализатора.


## Комментарии


Метод возвращает значение true,
 если у визуализатора имеется измерение метрик, и значение false,
 если измерение метрик отсутствует.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и должен быть выделен визуализатор
 пузырьковое дерево. Выведем в консоль информацию о наличии измерения метрик:


// Получим компонент TreeMapBox
dataView=expressBox.getDataView();
treeView = dataView.getTreeMapView();
// Выведем в консоль информацию о наличии измерения метрик
console.debug(treeView.getAreMetricsOn() ? "Визуализатор содержит измерение метрик" : "Измерение метрик отсутствует в визуализаторе" );
В результате выполнения примера была выведена информация о наличии измерения
 метрик в визуализаторе.


См. также:


[TreeMapBox](TreeMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
