# RibbonView.Collapsed

RibbonView.Collapsed
-


# RibbonView.Collapsed


## Синтаксис


Collapsed: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Collapsed наступает при сворачивании ленты инструментов.


## Комментарии


Лента сворачивается при нажатии на кнопку ![](collapse_button.gif), расположенную в верхнем правом углу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox». Добавим обработчик события сворачивания ленты инструментов:


       reportBox.getRibbonView().Collapsed.add(function (sender, args) {
           alert ("Лента свернута")
       })

После выполнения примера при сворачивании ленты будет выдаваться сообщение «Лента свернута».


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
