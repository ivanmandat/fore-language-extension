# Конструктор ScrollEventArgs

Конструктор ScrollEventArgs
-


**


# Конструктор ScrollEventArgs


## Синтаксис


ScrollEventArgs(deltaMove: Number, coef: Number);


## Параметры


*deltaMove.* Текущее положение бегунка
 на полосе прокрутки;


*coef.* Общая длина полосы прокрутки.


## Описание


Метод ScrollEventArgs**
 создает экземпляр класса [ScrollEventArgs](ScrollEventArgs.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Создадим полосу прокрутки, переместим её бегунок
 на 50 пикселей и обработаем событие перемещения данного бегунка [ScrollBar.MoveScroll](dhtmlUi.chm::/Classes/ScrollBar/ScrollBar.MoveScroll.htm):


// Создадим полосу прокрутки
var scrollBar = new PP.Ui.ScrollBar({
    ParentNode: document.body,
    Width: 200,
    Height: 16
});
// Обработаем событие MoveScroll
scrollBar.MoveScroll.add(function (sender, args) {
    console.log("Процент прокрутки: " + args.DeltaMove / args.Coef * 100);
});
// Прокрутим счётчик на 50 пикселей
var value = 50;
scrollBar._dragger.style.left = value + "px";
// Определим параметры для события MoveScroll
var scrollEventArgs = new PP.ScrollEventArgs(0, 0);
scrollEventArgs.DeltaMove = value; // Величина прокрутки
scrollEventArgs.Coef = scrollBar._limit; // Общая длина полосы прокрутки
// Вызовем событие MoveScroll
scrollBar.MoveScroll.fire(scrollBar.getDomNode(), scrollEventArgs);

В результате выполнения примера была создана полоса прокрутки, а бегунок
 на ней был перемещён на 50 пикселей:


![](ScrollEventArgs.png)


После вызова события [ScrollBar.MoveScroll](dhtmlUi.chm::/Classes/ScrollBar/ScrollBar.MoveScroll.htm)
 в консоли браузера был выведен процент прокрутки данного бегунка:


Процент прокрутки: 32.6797385620915


См. также:


[ScrollEventArgs](ScrollEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
