# NavigatorRibbon.PropertyChanged

NavigatorRibbon.PropertyChanged
-


# NavigatorRibbon.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает
 при изменении состояния кнопки или группы кнопок.


## Комментарии


Аргументы события содержат данные о нажатой кнопке и текущем состоянии
 кнопки.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события PropertyChanged:


// Получим компонент NavigatorRibbon
navRib = nav.getRibbonView();
// Добавим обработчик события: отображать в консоли наименование кнопки при нажатии
rib.PropertyChanged.add(function (sender, args) { console.debug(args.getPropertyName()) });
После выполнения примера при нажатии на кнопку ленты инструментов в
 консоль будет выведено наименовании кнопки.


См. также:


[NavigatorRibbon](NavigatorRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
