# TabSheet.ExpanderAction

TabSheet.ExpanderAction
-


# TabSheet.ExpanderAction


## Синтаксис


ExpanderAction: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ExpanderAction наступает
 при взаимодействии с экспандером в таблице.


## Комментарии


Событие срабатывает при раскрытии и при сворачивании экспандера.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»), содержащего таблицу
 с экспандерами. Обработаем событие процесса взаимодействия с экспандером:


tabSheet.ExpanderAction.add(function (sender, args) {
// Получим состояние экспандера
    console.debug(args.IsCollapse ? "Экспандер свернут" : "Экспандер раскрыт");
});

В результате выполнения примера при раскрытии и сворачивании экспандера
 в консоли браузера будут выводиться сообщения о состоянии экспандера:


Экспандер свернут


Экспандер раскрыт


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
