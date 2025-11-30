# EaxMdService.setCustomDimension

EaxMdService.setCustomDimension
-


# EaxMdService.setCustomDimension


## Синтаксис


setCustomDimension(report, cdElementArgs, operation,
 callback, errorCallback);


## Параметры


report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс отчета.


cdElementArgs. Object.
 Метаданные операции. Массив из элементов tns_PP_SOM: CDActionArg.


operation. PP.Exp.CDOp.
 Тип операции.


callback. PP.Delegate
 | Function. Функция обратного
 вызова.


errorCallback. PP.Delegate
 | Function. Функция обратного
 вызова в случае ошибки.


## Описание


Метод setCustomDimension выполняет
 операции с элементами пользовательской иерархии.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Получим измерение
dim = eaxAnalyzer.getDims()[3];
// Получим ключ измерения
dimKey = dim.getKey();
// Определим метаданные операции
Elem = [{
 dimkey: dimKey
}];
// Определим выполняемую операцию
Op = PP.Exp.CDOp.Add;
// Обнулим иерархию
eaxMdService.setCustomDimension(eaxAnalyzer, Elem, Op);
// Обновим дерево элементов
barV = expressBox.getPropertyBarView();
panel = barV.getActivePanel();
panel.refresh();
В результате выполнения примера был добавлен новый элемент.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
