# DictionaryBox.Save

DictionaryBox.Save
-


# DictionaryBox.Save


## Синтаксис


Save: function(sender, args: Object);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: ActiveSource - сохраняемый справочник НСИ.


## Описание


Событие Save генерируется при сохранении данных справочника НСИ.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Сделаем видимыми пункты главного меню «Файл > Сохранить» и «Файл > Сохранить как», а также обработаем события Save и [SaveAs](DictionaryBox.SaveAs.htm):


// Получим настройки главного меню
var menu = dictionaryBox._fileMenu;
// Получим пункты меню «Файл»
var items = menu.getItems();
for (var i = 0; i < items.length; i++) {
    switch (items[i].getId()) {
    case "SaveMenuItem":
    case "SaveAsMenuItem":
        items[i].setIsVisible(true);
        break;
    }
};
// Обработаем событие Save
dictionaryBox.Save.add(function (sender, args) {
    console.log("Идентификатор сохраняемого справочника НСИ: %s", args.ActiveSource.getId());
});
// Обработаем событие SaveAs
dictionaryBox.SaveAs.add(function (sender, args) {
    console.log("Ключ сохраняемого справочника НСИ: %s", args.ActiveSource.getKey());
});

После выполнения примера пункты главного меню «Файл > Сохранить» и «Файл > Сохранить как» стали видимыми. При их выборе в результате срабатывания обработчиков событий Save и SaveAs соответственно в консоли браузера выводятся идентификатор и ключ сохраняемого справочника НСИ:


Идентификатор сохраняемого справочника НСИ: TIME_UNITS


Ключ сохраняемого справочника НСИ: 8093


См. также:


[DictionaryBox](DictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
