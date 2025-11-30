# Attribute.LinkKey

Attribute.LinkKey
-


# Attribute.LinkKey


## Синтаксис


LinkKey: Number;


## Описание


Свойство LinkKey определяет ключ связи атрибута справочника с другим справочником НСИ.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setLinkKey, а возвращается - с помощью метода getLinkKey.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим информацию о связи атрибута, имеющего идентификатор «UNITS_SYSTEM», с другим справочником НСИ:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим атрибут «UNITS_SYSTEM», связанный со справочником «Systems of units»
var linkedAttribute = source.getAttribute(null, "UNITS_SYSTEM");
// Получим параметры связи атрибута
var link = source.getLink(linkedAttribute.getLinkKey());
console.log("Наименование связи: %s, ключ связи: %s", link.n, link.k);
console.log("Формат отображения связи: %s", link.displayFormat);
console.log("Наименование связанного справочника: %s", link.refDictionary.n);
console.log("Наименование связанного атрибута: %s", link.refAttribute.n);

В результате выполнения примера в консоли браузера была выведена информация о связи атрибута, имеющего идентификатор «UNITS_SYSTEM», с другим справочником НСИ:


Наименование связи: Связь, ключ связи: 2054


Формат отображения связи: ValueOnly


Наименование связанного справочника: Systems of units


Наименование связанного атрибута: Ключ


См. также:


[Attribute](Attribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
