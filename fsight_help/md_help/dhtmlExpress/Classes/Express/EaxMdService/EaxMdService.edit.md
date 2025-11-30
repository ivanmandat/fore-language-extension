# EaxMdService.edit

EaxMdService.edit
-


**


# EaxMdService.edit


## Синтаксис


edit(key: Number, callback: PP.Delegate||function, params);


## Параметры


*key.* Ключ экспресс-отчёта, который необходимо открыть;


*callback.* Возвратная функция, которую необходимо вызвать после открытия отчета;


*params.* Параметры, с которыми необходимо открыть объект.


## Описание


Метод edit** открывает экспресс-отчета в режиме редактирования.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Откроем экспресс-отчет с ключом 109 в режиме редактирования, а также обработаем соответствующее событие:


// Получим ключ текущего документа экспресс-отчета
console.log("Ключ текущего документа экспресс-отчета: " + expressBox.getSource().getKey());
// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Обработаем событие EaxOpened
eaxMdService.EaxOpened.add(function () {
    // Получим ключ открытого документа экспресс-отчета
    console.log("Ключ документа экспресс-отчета: " + expressBox.getSource().getKey());
});
// Откроем документ экспресс-отчета с ключом 109
var eaxAnalyzer = eaxMdService.edit(109);
expressBox.setSource(eaxAnalyzer);

После выполнения примера был открыт на редактирование экспресс-отчет с ключом 109. В результате этого было сгенерировано событие [EaxOpened](EaxMdService.EaxOpened.htm), которое вывело в консоль браузера ключ открытого экспресс-отчета:


Ключ текущего экспресс-отчета: 108

Ключ открытого экспресс-отчета: 109


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
