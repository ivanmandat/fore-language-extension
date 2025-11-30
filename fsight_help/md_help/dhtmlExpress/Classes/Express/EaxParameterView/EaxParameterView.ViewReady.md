# EaxParameterView.ViewReady

EaxParameterView.ViewReady
-


**


# EaxParameterView.ViewReady


## Синтаксис


ViewReady: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ViewReady** наступает, когда представление параметра готово к просмотру.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие ViewReady:


// Получаем объект класса EaxParameterView
var paramsPanel = expressBox.getPropertyBarView().getDataSourceParamsPanel();
// Получаем представление параметра
var parameterView = paramsPanel._Items[0];
// Обрабатываем событие ViewReady
parameterView.ViewReady.add(
    function() {
        // Определяем, нуждается ли представление параметра в пересоздании
        var reInit = parameterView.getNeedInstanceReinit();
        parameterView.refreshAll(reInit);
    }
);

В результате выполнения данного примера после каждого наступления события ViewReady будут обновляться все элементы соответствующего параметра.


См. также:


[EaxParameterView](EaxParameterView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
