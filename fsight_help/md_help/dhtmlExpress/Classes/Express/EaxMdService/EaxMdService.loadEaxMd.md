# EaxMdService.loadEaxMd

EaxMdService.loadEaxMd
-


**


# EaxMdService.loadEaxMd


## Синтаксис


loadEaxMd(report: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm), callback, fireEvent);


## Параметры


*report.* Загружаемый экспресс-отчет;


*c**allback.* Возвратная функция. Необязательный параметр;


*fireEvent.* Признак подтверждения загрузки метаданных в экспресс-отчет. Необязательный параметр.


## Описание


Метод loadEaxMd** загружает экспресс-отчет в сервис для работы с ним.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Откроем экспресс-отчет с ключом 109 и загрузим его в сервис для работы с ним:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Открываем экспресс-отчет с ключом 109
var eaxAnalyzer = eaxMbService.open(109);
// Определяем возвратную функцию
var callback = function (sender, args) {
    console.log("В сервис загружен экспресс-отчет с ключом " + args.Args.getKey());
};
// Загружаем экспресс-отчет в сервис
eaxMdService.loadEaxMd(eaxAnalyzer, PP.Delegate(callback, this, eaxAnalyzer));

В результате выполнения примера был открыт экспресс-отчет, который затем был загружен в сервис для работы с ним. В консоли браузера об этом вывелось соответствующее сообщение:


В сервис загружен экспресс-отчет с ключом 109


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
