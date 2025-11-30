# EaxParameterView.LinkedDimOpened

EaxParameterView.LinkedDimOpened
-


**


# EaxParameterView.LinkedDimOpened


## Синтаксис


LinkedDimOpened: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: LinkedDim - связанное с параметром измерение.


## Описание


Событие LinkedDimOpened** наступает, когда связанное с параметром измерение успешно будет найдено и открыто.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие LinkedDimOpened:


// Получаем объект класса EaxParameterView
var paramsPanel = expressBox.getPropertyBarView()
    .getDataSourceParamsPanel();
// Получаем представление параметра
var parameterView = paramsPanel._Items[0];
// Обрабатываем событие LinkedDimOpened
parameterView.LinkedDimOpened.add(
    function () {
    // Определяем, нуждается ли представление параметра в пересоздании
    var reInit = parameterView.getNeedInstanceReinit();
    parameterView.refresh(reInit);
    }
);

В результате выполнения данного примера после каждого наступления события LinkedDimOpened будет обновляться соответствующий параметр.


См. также:


[EaxParameterView](EaxParameterView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
