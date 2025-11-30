# ParamsBox.refreshAll

ParamsBox.refreshAll
-


# ParamsBox.refreshAll


## Синтаксис


refreshAll();


## Описание


Метод refreshAll обновляет контейнер параметров справочника.


## Пример


Для выполнения примера предполагается наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим параметр из контейнера параметров и выведем тип его экземпляра, ключ и имя источника данных. Определим параметры открытия и переоткроем справочник по связи с заданными параметрами открытия. Обработаем событие [ParamChanged](ParamsBox.ParamChanged.htm). Изменим имя источника данных контейнера параметров и обновим его:


// Получим область данных справочника
var area = dictionaryBox.getDataArea();
// Получим компонент, предназначенный для работы с параметрами
var paramBox = area.getActiveParamBox();
// Получим параметр
var param1 = paramBox._Parameters._Items[0];
// Выведем тип экземпляра параметра
console.log("Тип экземпляра параметра: " + param1.getInstance().getTypeName());
// Выведем значение ключа параметра
console.log("Ключ параметра: " + param1.getKey());
// Выведем имя источника данных
console.log("Имя источника данных параметра: " + param1.getSource().getName());
// Параметры открытия
var openArgs = {
    k: 8209,
    id: "ENDDATE",
    dt: 4,
    n: "Дата окончания",
    binding: "UI='DateTimePicker'",
    vis: true,
    value: null,
    attribute: {
        k: 2023
    }
};
if (!param1._LinkedDict) {
    console.log("Связанный справочник отсутствует");
} else {
    // Переоткроем справочник по связи с заданными параметрами открытия
    param1.reopenLink(openArgs);
}
// Обработаем событие ParamChanged
paramBox.ParamChanged.add(function (sender, eventArgs) {
    console.log("Инициировано событие ParamChanged");
});
// Получим источника данных
var source = paramBox._Source;
// Изменим имя источника данных
source.setName("SourceName");
// Установим измененный источник данных
paramBox.setSource(source);
// Обновим компонент, предназначенный для работы с параметрами
paramBox.refreshAll();

В результате было изменено имя источника данных для контейнера параметров, после чего он был обновлен. Также в консоли браузера был выведен тип экземпляра, значение ключа и имя источника данных параметра а также сообщение, если отсутствует связанный справочник:


Тип экземпляра параметра: DateTimePicker


Ключ параметра: 2023


Имя источника данных параметра: Time units


Связанный справочник отсутствует


Изменим вручную значение параметра справочника «Дата актуальности».


В результате в консоли браузера было выведено сообщение о вызове события изменения значения параметра:


Инициировано событие ParamChanged


См. также:


[ParamsBox](ParamsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
