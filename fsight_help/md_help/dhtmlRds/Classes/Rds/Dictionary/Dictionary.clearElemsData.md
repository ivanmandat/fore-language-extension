# Dictionary.clearElemsData

Dictionary.clearElemsData
-


# Dictionary.clearElemsData


## Синтаксис


clearElemsData();


## Описание


Метод clearElemsData очищает элементы справочника НСИ.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Очистим все элементы справочника НСИ:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
if (source.getChildEls()) {
    console.log("Количество элементов первого уровня до очистки: %s", source.getChildEls().length);
};
// Очищем элементы справочника
source.clearElemsData();
if (source.getChildEls()) {
    console.log("Количество элементов первого уровня после очистки: %s", source.getChildEls().length);
} else {
    console.log("После очистки источник данных не содержит элементов");
};

В результате выполнения примера были очищены все элементы справочника НСИ, о чём свидетельствуют уведомления, выведенные в консоли браузера:


Количество элементов первого уровня до очистки: 3


После очистки источник данных не содержит элементов


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
