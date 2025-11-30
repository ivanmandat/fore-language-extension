# Control.SizeChanged

Control.SizeChanged
-


# Control.SizeChanged


## Синтаксис


SizeChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие SizeChanged наступает
 после изменения размеров компонента.


## Пример


Для выполнения примера подключите библиотеку PP.js и таблицы визуальных
 стилей PP.css. Создадим [кнопку](../../Components/Button/Button.htm)
 и изменим её ширину. Добавим обработчики событий SizeChanged
 и [Control.SizeChanging](Control.SizeChanging.htm):


       button = new PP.Ui.Button({
           ParentNode: document.body,
           Content: "Button"
       });
        button.SizeChanging.add(function () {
           console.log(button.getWidth())
       });
        button.SizeChanged.add(function () {
           console.log(button.getWidth())
       });
        button.setWidth(70);

После выполнения примера будет создана кнопка «Button» и будет изменена
 её ширина. В консоль браузера будет выведено значение ширины кнопки до
 изменения и после.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
