# Date.getFirstDateOfMonth

Date.getFirstDateOfMonth
-


# Date.getFirstDateOfMonth


## Синтаксис


PP.Date.getFirstDateOfMonth(date): Date;


## Параметры


date. Date. Дата.


## Описание


Статический метод getFirstDateOfMonth
 возвращает дату первого дня месяца.


## Комментарии


Метод возвращает объект типа Date.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js.


// Создадим текущую дату
date = new Date();
// Получим дату первого дня месяца
newDate = PP.Date.getFirstDateOfMonth(date);
console.log(newDate);
В результате выполнения примера была получена дата первого дня месяца.


См. также:


[PP](../../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
