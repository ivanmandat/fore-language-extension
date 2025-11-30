# DItem.getHistory

DItem.getHistory
-


# DItem.getHistory


## Синтаксис


getHistory();


## Описание


Метод getHistory возвращает
 массив объектов типа [PP.Rds.DItem](DItem.htm), представляющих
 историю значений атрибутов для элемента справочника НСИ.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Определим историю значений для
 первого дочернего элемента:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Получим дочерние элементы справочника
var childEls = source.getChildEls();
if (source.isHistorical()) {
    // Получим историю изменений значений атрибутов для первого дочернего элемента
    var history = childEls[0].getHistory();
    for (var i = 0; i < history.length; i++) {
        // Получим значения атрибутов
        var attrsValues = history[i].getAttrValues();
        console.log("Дата начала: %s, дата окончания: %s", attrsValues[6], attrsValues[7]);
    };
} else {
    console.log("Справочник не является версионным");
};
//Определим, является ли справочник мультиязычным
console.log(source.isMultilingual ? "Справочник является мультиязычным" : "Справочник не является мультиязычным");

В результате выполнения примера в консоли браузера была выведена история
 значений атрибутов для первого дочернего элемента:


Дата начала: 2013-10-31, дата окончания: 2999-12-31


Если справочник НСИ не является версионным, то есть его элементы не могут
 изменяться во времени, то будет выведено соответствующее уведомление.


См. также:


[DItem](DItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
