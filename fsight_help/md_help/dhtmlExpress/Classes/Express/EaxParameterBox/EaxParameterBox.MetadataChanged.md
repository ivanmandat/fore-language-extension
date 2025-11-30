# EaxParameterBox.MetadataChanged

EaxParameterBox.MetadataChanged
-


**


# EaxParameterBox.MetadataChanged


## Синтаксис


MetadataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChanged** наступает при изменении метаданных у параметра экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие MetadataChanged:


// Получаем объект класса EaxParameterView
var paramsPanel = expressBox.getPropertyBarView()
    .getDataSourceParamsPanel();
// Получаем представление параметра
var parameterView = paramsPanel._Items[0];
// Обрабатываем событие MetadataChanged
parameterView.MetadataChanged.add(
    function () {
        alert("Изменены метаданные");
        }
);

В результате выполнения примера после каждого наступления события MetadataChanged в браузере будет выводиться соответствующее сообщение.


См. также:


[EaxParameterBox](EaxParameterBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
