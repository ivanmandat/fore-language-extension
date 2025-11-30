# ParametersDataSource.ControlChanged

ParametersDataSource.ControlChanged
-


**


# ParametersDataSource.ControlChanged


## Синтаксис


ControlChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ControlChanged** наступает при изменении свойств компонента.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm) с наименованием «parametersDialog» (см. «[Пример создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Обработаем событие ControlChanged для вкладок у диалога «Параметры»:


// Получим вкладки у диалога «Параметры»
var items = parametersDialog._ViewItems;for(var i = 0; i < items.length; i++) {
    var item = items[i];
    switch(item.getTypeName()) {
        case "PP.Exp.Ui.ParametersDataSource":
        // Обработаем событие ControlChanged для вкладки «Параметры источников данных»
        item.ControlChanged.add( function() {
            // Обновим всё содержимое вкладки
            item.refreshAll();
        });
        break;
        case "ParametersDimensionsView":
        // Обработаем событие ControlChanged для вкладки «Измерения»
        item.ControlChanged.add( function() {
            // Обновим всё содержимое вкладки
            item.refreshAll();
        });
        break;
    }
}

После выполнения примера в результате наступления события будет обновляться все содержимое вкладок «Параметры источников данных» и «Измерения» у диалога «Параметры».


См. также:


[ParametersDataSource](ParametersDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
