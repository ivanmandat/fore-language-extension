# Workbook.ActiveRub

Workbook.ActiveRub
-


# Workbook.ActiveRub


## Синтаксис


ActiveRub: Number;


## Описание


Свойство ActiveRub устанавливает ключ активной базы данных временных рядов для модели данных рабочей книги.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setActiveRub, а возвращается - с помощью метода getActiveRub.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Определим ключ активной базы данных временных рядов, установим его для модели данных рабочей книги и выведем в консоли браузера:


// Получим модель данных рабочей книги
var workbook = workbookBox.getSource().getActiveSheet();
// Получим моникёр активной базы данных временных рядов и выделим из него ключ
var odIdArr = workbook.getRub().id.id.split("!");
var key = odIdArr[odIdArr.length - 1];
// Установим ключ активной базы данных временных рядов
var activeRub = workbook.setActiveRub(key);
console.log("Ключ активной базы данных временных рядов: " + workbook.getActiveRub());

В результате выполнения примера для модели данных рабочей книги был установлен ключ активной базы данных временных рядов. Данный ключ был также выведен в консоли браузера:


Ключ активной базы данных временных рядов: 2031


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
