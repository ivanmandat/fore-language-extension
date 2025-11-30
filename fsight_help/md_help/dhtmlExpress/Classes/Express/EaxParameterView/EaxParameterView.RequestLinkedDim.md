# EaxParameterView.RequestLinkedDim

EaxParameterView.RequestLinkedDim
-


**


# EaxParameterView.RequestLinkedDim


## Синтаксис


RequestLinkedDim: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: FindFilter - фильтр на поиск измерения.


## Описание


Событие RequestLinkedDim** наступает перед отправкой запроса на поиск связанного с параметром измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие RequestLinkedDim:


// Получаем объект класса EaxParameterView
var paramsPanel = expressBox.getPropertyBarView().getDataSourceParamsPanel();
// Получаем представление параметра
var parameterView = paramsPanel._Items[0];
// Обрабатываем событие RequestLinkedDim
parameterView.RequestLinkedDim.add(
    function(sender, args) {
        console.log("Filter: " + args.FindFilter);
    }
);

После выполнения данного примера при каждом наступлении события RequstLinkedDim в консоль браузера будет выводиться фильтр на поиск связанного с параметром измерения.


См. также:


[EaxParameterView](EaxParameterView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
