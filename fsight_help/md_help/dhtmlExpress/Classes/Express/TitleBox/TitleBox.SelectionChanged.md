# TitleBox.SelectionChanged

TitleBox.SelectionChanged
-


**


# TitleBox.SelectionChanged


## Синтаксис


SelectionChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: Dimension - источник данных дерева измерений, представляющий
 собой объект типа PP.Mb.Dimension.


## Описание


Событие SelectionChanged**
 наступает после изменения выделения в заголовке экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие SelectionChanged:


// Получаем представление заголовка экспресс-отчета
var titleView = expressBox.getDataView().getTitleView();
// Обработаем событие SelectionChanged
titleView.SelectionChanged.add(function () {
    titleView.refreshSelections();
    titleView.updateContent();
    }
);
В результате выполнения примера после срабатывания события SelectionChanged
 будет обновляться состояние заголовка экспресс-отчета в соответствии с
 состоянием модели.


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
