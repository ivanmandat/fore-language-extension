# EaxMdService.generateModeling

EaxMdService.generateModeling
-


# EaxMdService.generateModeling


## Синтаксис


generateProblem(report, callback);


## Параметры


report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Отчет;


callback. PP.Delegate. Возвратная
 функция.


## Описание


Метод generateModeling отправляет
 запрос на генерацию задачи моделирования.


## Комментарии


Метод реализует логику нажатия на кнопку «Моделирование
 и прогнозирование» ленты инструментов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Отчет должен быть построен на базе
 данных временных рядов.


// Зададим обработчик событий, выводящий ответ сервера в консоль
callback = function(sender, args) {
  console.log(args.Response);
};
// Отправим запрос на генерацию задачи моделирования
eaxMdService.generateWbk(eaxAnalyzer, callback);

После выполнения примера в консоль браузера будет выведен JSON-объект,
 содержащий ответ сервера о генерации задачи моделирования.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
