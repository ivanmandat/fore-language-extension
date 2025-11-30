# IDiagnosticReport.Chain

IDiagnosticReport.Chain
-


# IDiagnosticReport.Chain


## Синтаксис


Chain: [IEaxDataAreaValidationChain](../IEaxDataAreaValidationChain/IEaxDataAreaValidationChain.htm);


## Описание


Свойство Chain возвращает цепочку
 валидаций.


## Комментарии


Коллекция правил валидаций отчета находится в срезе. Цепочка валидаций
 находится в диагностическом отчете. Если свойство [IDiagnosticReport.Grid](IDiagnosticReport.Grid.htm)
 определяет таблицу, отображающую данные, то связываются цепочка и коллекция
 правил валидации, т.е. создаются ссылки. Таким образом, количество правил
 в цепочке диагностического отчета равно количеству правил валидаций в
 аналитической области данных.


## Пример


Использование свойства приведено в примере для [IEaxDataAreaValidationChain.Move](../IEaxDataAreaValidationChain/IEaxDataAreaValidationChain.Move.htm).


См. также:


[IDiagnosticReport](IDiagnosticReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
