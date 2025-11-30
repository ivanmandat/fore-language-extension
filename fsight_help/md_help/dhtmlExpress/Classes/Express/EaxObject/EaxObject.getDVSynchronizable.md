# EaxObject.getDVSynchronizable

EaxObject.getDVSynchronizable
-


# EaxObject.getDVSynchronizable


## Синтаксис


getDVSynchronizable();


## Описание


Метод getDVSynchronizable содержит
 отсылку на экземпляр визуализатора экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной диаграммой в рабочей
 области экспресс-отчета. Получим экземпляр диаграммы:


// Получим рабочую область
DV = expressBox.getDataView();
// Получим представление диаграммы (наследник класса EaxObject)
chartV = DV.getChartView();
// Получим экземпляр диаграммы
chartV.getDVSynchronizable();
// -> PP.Ui.Chart {_Animation: Object, _AutoPosition: true, _FixedTopOffset: 0, _FixedLeftOffset: 0, _FixedWidth: 0…}

В результате выполнения примера был получен экземпляр визуализатора.


См. также:


[EaxObject](EaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
