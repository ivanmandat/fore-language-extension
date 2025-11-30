# Window.getIsExpanded

Window.getIsExpanded
-


# Window.getIsExpanded


## Синтаксис


getIsExpanded();


## Описание


Метод getIsExpanded возвращает
 признак того, развернуто ли окно.


## Комментарии


Метод возвращает значение true,
 если окно развернуто, иначе - значение false.


Разворачивание окна происходит при нажатии на кнопку ![](../../Components/Window/Window2.gif).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Window](../../Components/Window/Window.htm) с наименованием
 «win» (см. «[Пример
 создания компонента Window](../../Components/Window/Example_Window.htm)»). Проверим состояние окна:


// Проверяем состояние окна
if (win.getIsExpanded()) {
    console.log("Окно развернуто");
} else {
    console.log("Окно не развернуто");
}
В результате в консоль будет выведен результат проверки:


Окно не развернуто


См. также:


[Window](Window.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
