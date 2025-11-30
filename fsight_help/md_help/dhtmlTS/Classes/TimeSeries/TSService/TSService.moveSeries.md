# TSService.moveSeries

TSService.moveSeries
-


# TSService.moveSeries


## Синтаксис


moveSeries(wbk, series, isUp, callback, args);


## Параметры


wbk. PP.TS.Workbook. Задает
 значение [рабочей книги](../Workbook/Workbook.htm);


series. Array of Objects. Массив
 рядов;


isUp. Boolean. Признак перемещения
 вверх. При значении false ряд
 будет перемещен вниз.


callback. Задает обработчик
 окончания выполнения операции.


args. Object. Аргументы с метаданными.


## Описание


Метод moveSeries перемещает
 положение рядов вверх или вниз.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Получим второй ряд данных
serie = wbk.getSeries()[1];
series = [serie];
// Переместим ряд наверх
tsService.moveSeries(wbk, series, true);
// Обновим рабочую книгу
workbookBox.refreshAll();

В результате выполнения примера второй ряд данных был перемещен наверх.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
