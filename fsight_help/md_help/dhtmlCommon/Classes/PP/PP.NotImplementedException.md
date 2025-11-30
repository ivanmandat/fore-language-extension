# PP.NotImplementedException

PP.NotImplementedException
-


**


# PP.NotImplementedException


## Синтаксис


NotImplementedException(message: String, self: Object);


## Параметры


*message.* Сообщение, передаваемое
 исключению. Необязательный параметр, по умолчанию значение не определено;


*self.* Источник исключения. Необязательный
 параметр, по умолчанию значение не определено.


## Описание


Метод NotImplementedException**
 представляет исключение, которое выбрасывается, если метод класса не реализован.


## Комментарии


Метод возвращает значение типа String
 в следующем формате: «NotImplementedException. Source: [Источник исключения]
 Message: [Передаваемое сообщение]».


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Определим функцию для сравнения двух объектов и оставим
 её без реализации:


PP.compareObjects = function (a, b) {
    PP.NotImplementedException(this);
};

В результате выполнения примера при попытке вызвать функцию compareObject
 в консоли браузера всегда будет выводиться сообщение «NotImplementedException.
 Source: [object Object]».


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
