# EaxAnalyzer.MapChangedData

EaxAnalyzer.MapChangedData
-


**


# EaxAnalyzer.MapChangedData


## Синтаксис


MapChangedData: [Object](dhtmlCommon.chm::/Classes/object/object.htm)


## Описание


Свойство MapChangedData** содержит измененные данные представления экспресс-отчета «Карта».


## Комментарии


Значение свойства можно установить из JSON и с помощью метода setMapChangedData, а возвратить с помощью метода getMapChangedData.


Свойство принимает и возвращает значение в виде массива JSON-объектов со следующими полями: Name - наименование настройки карты экспресс-отчета, Value - её значение.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Перед выполнением примера вызовем контекстное меню «Настройки» для карты экспресс-отчета и в открывшейся вкладке «Цветовой индикатор» изменим метод группировки индикаторов на «Линейно». Проверим теперь, зафиксировано ли изменение данных карты:


var eaxAnalyzer = expressBox.getSource();
// Получим измененные данные карты экспресс-отчета
var mapChangedData = eaxAnalyzer.getMapChangedData()
for (var i = 0; i < mapChangedData.length; i++) {
    var option = mapChangedData[i];
    // Выведем значение изменившейся настройки
    console.log(option.Name + ": " + option.Value);
}

В результате выполнения примера в консоли браузера будет выведено значение изменившейся настройки карты экспресс-отчета:


mapmaster.fillpanel.mode: Linear


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
