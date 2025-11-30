# Date.getLastDateOfMonth

Date.getLastDateOfMonth
-


# Date.getLastDateOfMonth


## Синтаксис


PP.Date.getLastDateOfMonth(date): Date;


## Параметры


date. Date. Дата.


## Описание


Статический метод getLastDateOfMonth
 возвращает дату последнего дня месяца.


## Комментарии


Метод возвращает объект типа Date.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js.


// Создадим текущую дату
date = new Date();
// Получим дату последнего дня месяца
newDate = PP.Date.getLastDateOfMonth(date);
console.log(newDate);
В результате выполнения примера была получена дата последнего дня месяца.


См. также:


[PP](../../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
