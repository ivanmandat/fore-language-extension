# NavigatorRibbon.ImportDataClick

NavigatorRibbon.ImportDataClick
-


# NavigatorRibbon.ImportDataClick


## Синтаксис


PropertyChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ImportDataClick наступает
 после нажатия на кнопку «Импорт данных».


## Комментарии


Диалог смены пароля вызывается при помощи команды «Сервис
 > Импорт данных».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события ImportDataClick:


// Получим компонент NavigatorRibbon
navRib = nav.getRibbonView();
// Добавим обработчик события
navRib.ImportDataClick.add(function () { alert("Импорт данных") });
После выполнения примера при нажатии на кнопку «импорт данных» на экран
 будет выведено сообщение «Импорт данных».


См. также:


[NavigatorRibbon](NavigatorRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
