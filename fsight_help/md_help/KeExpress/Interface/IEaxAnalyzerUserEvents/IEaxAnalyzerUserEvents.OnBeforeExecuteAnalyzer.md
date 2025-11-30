# IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer

IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer
-


# IEaxAnalyzerUserEvents.OnBeforeExecuteAnalyzer


## Синтаксис


OnBeforeExecuteAnalyzer(Args: [IEaxBeforeExecuteEventArgs](../IEaxBeforeExecuteEventArgs/IEaxBeforeExecuteEventArgs.htm));


## Параметры


Args. Аргументы события.


## Описание


Метод OnBeforeExecuteAnalyzer
 реализует событие, наступающее перед вычислением таблицы.


## Комментарии


Событие возникает не только перед вычислением таблицы экспресс-отчета,
 но и перед вычислением рабочей книги.


Для реализации события, наступающего после вычисления таблицы, используйте
 [IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer](IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer.htm).


## Пример


Использование метода приведено в примере для [IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer](IEaxAnalyzerUserEvents.OnAfterExecuteAnalyzer.htm).


См. также:


[IEaxAnalyzerUserEvents](IEaxAnalyzerUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
