# Attribute.parseFromMd

Attribute.parseFromMd
-


# Attribute.parseFromMd


## Синтаксис


parseFromMd(md: Object);


## Параметры


md. Настройки элемента справочника в формате метаданных.


## Описание


Метод parseFromMd считывает настройки атрибута справочника НСИ из указанного объекта в формате метаданных.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Создадим невидимый атрибут-перевод и добавим его в справочник НСИ:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Создадим новый атрибут
var newAttr = new PP.Rds.Attribute({
    Owner: source
});
// Определим настройки атрибута
var newAttrMd = {
    id: "LastEditingDate_EN",
    k: 1806,
    kind: PP.Rds.AttributeKind.Common,
    n: "Date of last change",
    nullable: false,
    predefined: PP.Rds.PredefinedAttribute.None, // Атрибут не предопределён
    dt: PP.Mb.DbDataType.DateTime,
    vis: false // Сделаем атрибут невидимым
};
// Получим настройки атрибута из JSON-объекта
newAttr.parseFromMd(newAttrMd);
// Даннный атрибут является атрибутом переводом
newAttr.setIsTranslation(true);
// Добавим созданный атрибут в метаданные
source._AttrsById[newAttrMd.id] = source._AttrsByKey[newAttrMd.k] = newAttr;
var metadata = source.getMetadata();
var attrsArr = PP.getProperty(metadata, "attrs.its.it");
attrsArr.push(newAttrMd);
// Обновим дерево элементов справочника
dictionaryBox.getDataArea().getActiveDictTree().refreshAll();
console.log("Значение по умолчанию для атрибута: %s", source.getAttribute(1806).getDefaultValue());

В результате выполнения примера в справочнике НСИ был создан скрытый атрибут-перевод с ключом 1806 и наименованием «LastEditingDate_EN». В консоли браузера было выведено значение данного атрибута по умолчанию:


Значение по умолчанию для атрибута: 2013-11-01T12:21:45.399Z


См. также:


[Attribute](Attribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
