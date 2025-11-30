# PP.requestAnimationFrame

PP.requestAnimationFrame
-


# PP.requestAnimationFrame


## Синтаксис


requestAnimationFrame(sender, callback: Function);


## Параметры


*sender.* Контекст, в котором должна выполниться функция;


*callback.* Выполняемая функция.


## Описание


Метод requestAnimationFrame выполняет указанную функцию с минимальной задержкой.


## Комментарии


Метод используется для отрисовки анимации элементов.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Определим реальную длительность задержки, производимой методом requestAnimationFrame:


var startTime; // Время до задержки
// Функция, выполняемая после задержки
function func() {
    // Получим текущее время в миллисекундах
    var endDate = new Date();
    console.log("Время окончания задержки, мс: " + endDate.getTime());
    console.log("Длительность задержки: " + (endDate.getTime() - startTime));
};
// Получим текущее время в миллисекундах
startDate = new Date();
var startTime = startDate.getTime();
console.log("Время начала задержки, мс: " + startTime);
for (var i = 0; i < 999; i++) {
    // Вызовем пустую задержку
    PP.requestAnimationFrame.call(window, function () {});
};
// Вызовем задержку
PP.requestAnimationFrame.call(window, func);

В результате выполнения примера в консоли браузера была выведена реальная длительность 1000 задержек:


Время начала задержки, мс: 1363869880983

1000

Время окончания задержки, мс: 1363869880992

Длительность задержки: 9


Таким образом длительность одной задержки стремится к 0.


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
