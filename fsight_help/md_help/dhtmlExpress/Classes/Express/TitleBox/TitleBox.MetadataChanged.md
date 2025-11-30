# TitleBox.MetadataChanged

TitleBox.MetadataChanged
-


# TitleBox.MetadataChanged


## Синтаксис


MetadataChanged: function(sender, args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChanged наступает
 после изменения настроек заголовка.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TitleBox](../../../Components/Express/TitleBox/TitleBox.htm)
 с наименованием «titleBox» (см. «Пример
 создания компонента EaxTitleMaster»). Обработаем событие [MetadataChanged](TitleBox.MetadataChanged.htm):


title.MetadataChanged.add(function (sender, args) {
    console.log("Изменённое свойство: %s, значение: %s", args.getPropertyName(),
        sender.getPropertyValue(args.getPropertyName()));
});
Теперь включим в мастере для настройки заголовка флаг «Отображать как
 элемент управления». В результате этого после наступления события MetadataChanged в консоли браузера
 будут выведены наименование изменённого свойства и его значение:


Изменённое свойство: TitleType, значение: Control


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
