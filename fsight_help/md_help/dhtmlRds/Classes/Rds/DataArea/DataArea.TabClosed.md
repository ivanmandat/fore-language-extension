# DataArea.TabClosed

DataArea.TabClosed
-


# DataArea.TabClosed


## Синтаксис


TabClosed: function(sender, args: Object);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Source - справочник НСИ.


## Описание


Событие TabClosed наступает после закрытия вкладки контейнера для справочника НСИ.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Обработаем событие TabClosed, выводя в консоли браузера наименование закрытого справочника:


// Получим область данных справочника
var dataArea = dictionaryBox.getDataArea();
// Обработаем событие TabClosed
dataArea.TabClosed.add(function (sender, args) {
    console.log("Наименование закрытого справочника: %s", args.Source.getName());
});

Выполним указанный пример и вручную закроем вкладку со справочником НСИ. В результате данных действий в консоли браузера будет выведено наименование закрытого справочника:


Наименование закрытого справочника: Time units


См. также:


[DataArea](DataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
