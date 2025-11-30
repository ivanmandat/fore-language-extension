# SlidePanel.ConsoleClosed

SlidePanel.ConsoleClosed
-


# SlidePanel.ConsoleClosed


## Синтаксис


ConsoleClosed: function (sender, args);


## Параметры


sender. Источник событие;


args. Информация о событии.


## Описание


Событие ConsoleClosed наступает при закрытии консоли.


## Комментарии


Консоль - объединение панелей Header и Details.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [SlidePanel](../../Components/SlidePanel/SlidePanel.htm) с наименованием «slidePanel» (см. «[Пример создания компонента SlidePanel](../../Components/SlidePanel/Example_SlidePanel.htm)»).


//Создадим кнопку, которая открывает консоль:


var button = new PP.Ui.Button({ Content: "Открыть консоль" });


button.Click.add(function (sender, args) {


    slidePanel.setIsConsoleClosed(false)


});


//Добавим обработчик события закрытия консоли


slidePanel.ConsoleClosed.add(function (sender, args) {


    slidePanel.setViewContent(button)


});


//Добавим обработчик события открытия консоли


slidePanel.ConsoleOpened.add(function (sender, args) {


    alert("Консоль открыта")


});


После выполнения примера при закрытии консоли на панели View появится кнопка, при нажатии на которую будет открываться консоль. При открытии консоли на экран будет выведено сообщение «Консоль открыта».


См. также:


[SlidePanel](slidepanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
