# Dictionary.Filter

Dictionary.Filter
-


# Dictionary.Filter


## Синтаксис


Filter: Object;


## Параметры


dict. Справочник НСИ;


filter. Объект с настройками фильтра.


callback. Возвратная функция.


## Описание


Свойство Filter устанавливает фильтр для элементов справочника НСИ.


## Комментарии


Значение свойства устанавливается с помощью метода setFilter, а возвращается - с помощью метода getFilter. Из JSON значение задать нельзя.


При вызове метода setFilter используется два параметра: filter - объект с настройками фильтра в формате метаданных, elsMd - элементы справочника в формате метаданных, которые требуется отфильтровать.


Метод getFilter возвращает объект с настройками фильтра в формате метаданных.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Отфильтруем элементы справочника по строке «Секунда»:


var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Возвратная функция
function onFilterElementsReceived(sender, args) {
    var res = JSON.parse(args.ResponseText);
    var dict = args.Args.Dictionary;
    var filter = args.Args.Filter;
    // Установим фильтр
    dict.setFilter(filter, PP.getProperty(res, "GetRdsElementsResult.els.e"));
    // Вызовем событие ChildLoaded
    service.ChildLoaded.fire(service, {
        Dictionary: dict,
        ParentKey: "",
        IsFilter: true
    });
    // Получим дерево элементов справочника НСИ
    var tree = dictionaryBox.getDataArea().getActiveDictTree();
    tree._Filter = filter;
    // Загрузим все дочерние элементы, родителем которых является корень дерева
    tree.setChildNodes("");
};
// Определим настройки фильтра
var filter = {
    levels: -1,
    text: {
        text: "Секунда" // Строка поиска
    }
};
// Определим запрос, отсылаемый серверу
var body = {
    GetRdsElements: {
        tRds: source.getOdId(),
        tArg: {
            showHidden: source.getShowHidden(),
            filter: filter, // Укажем фильтр
            pattern: {
                attributes: "*",
                getHasChildren: true,
                getLevel: true,
                getParentKey: true,
                getHistory: true
            }
        }
    }
};
// Отправим запрос
service._send(body, PP.Delegate(onFilterElementsReceived, service, {
    Filter: filter,
    Dictionary: source
}));

В результате выполнения примера элементы справочника НСИ были отфильтрованы по строке «Секунда»:


![](../RdsService/RdsService_getFilterElements.png)


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
