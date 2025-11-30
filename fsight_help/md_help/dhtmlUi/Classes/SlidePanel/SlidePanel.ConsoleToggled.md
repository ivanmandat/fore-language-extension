# SlidePanel.ConsoleToggled

SlidePanel.ConsoleToggled
-


# SlidePanel.ConsoleToggled


## Синтаксис


ConsoleToggled: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ConsoleToggled наступает после сворачивания или разворачивания консоли.


## Комментарии


Консоль - объединение панелей Header и Details.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [SlidePanel](../../Components/SlidePanel/SlidePanel.htm) с наименованием «slidePanel» (см. «[Пример создания компонента SlidePanel](../../Components/SlidePanel/Example_SlidePanel.htm)»). Добавим обработчик события ConsoleToggled:


slidePanel.ConsoleToggled.add(function (sender, args) {


        alert("ConsoleToggled")


});


После выполнения примера после сворачивания или разворачивания консоли будет выдаваться сообщение «ConsoleToggled».


См. также:


[SlidePanel](slidepanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
