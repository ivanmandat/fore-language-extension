# Dictionary.getFilledAttributes

Dictionary.getFilledAttributes
-


# Dictionary.getFilledAttributes


## Синтаксис


getFilledAttributes(forEdit: Boolean);


## Параметры


forEdit. Признак получения атрибутов, доступных для редактирования пользователем. Если параметр равен значению true, то будет возвращены только атрибуты, доступные для редактирования, иначе - массив атрибутов, доступных для отображения.


## Описание


Метод getFilledAttributes возвращает массив атрибутов, доступных для просмотра или редактирования пользователем.


## Комментарии


Метод возвращает массив объектов типа


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Определим идентификаторы атрибутов, доступных для редактирования, и их количество:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим все атрибуты справочника
var attributes = source.getAttributes();
// Получим атрибуты, доступные только для редактирования
var filledAttributes = source.getFilledAttributes(true);
var filledAttributesId = [];
for (var i = 0; i < attributes.length; i++) {
    filledAttributesId.push(attributes[i].getId());
};
console.log("Идентификаторы всех атрибутов справочника, доступных для редактирования: %s", filledAttributesId.toString());
console.log("Их количество: " + filledAttributesId.length);

В результате выполнения примера в консоли браузера были выведены идентификаторы всех атрибутов справочника, доступных для редактирования, и их количество:


Идентификаторы всех атрибутов справочника, доступных для редактирования: KEY,NAME,PARENT_KEY,ORD,HIDDEN,VERSION,INDATE,OUTDATE,UNIT_VALUE,DESCRIPTION,UNITS_SYSTEM,

READACCESS,WRITEACCESS,DELETEACCESS,ACCESSACCESS,UNITS_SYSTEM_DESCRIPTION


Их количество: 16


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
