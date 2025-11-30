# Window.expand

Window.expand
-


# Window.expand


## Синтаксис


expand (IsExpand);


## Параметр


IsExpand. Определяет, будет окно сворачиваться или разворачиваться. Если установлено значение true, окно будет разворачиваться, если false - сворачиваться.


## Описание


Метод expand разворачивает/сворачивает окно.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Window](../../Components/Window/Window.htm) с наименованием «win» (см. «[Пример создания компонента Window](../../Components/Window/Example_Window.htm)»). Создадим кнопки, при нажатии на которые сворачивается и разворачивается окно.


//Создаем кнопку с надписью «Collapse»
var btn1 = new PP.Button({
    ParentNode: document.getElementById("btn1"),
    Content: "Collapse"
});
//Обработчик события Click
btn1.Click.add(function (sender, args) {
    win.expand (false);
});
//Создаем кнопку с надписью «Expand»
var btn2 = new PP.Button({
    ParentNode: document.getElementById("btn2"),
    Content: "Expand"
});
//Обработчик события Click
btn2.Click.add(function (sender, args) {
    win.expand(true);
});

После выполнения примера будут созданы кнопки «Collapse» и «Expand», при нажатии на которые, соответственно, сворачивается и разворачивается окно.


См. также:


[Window](Window.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
