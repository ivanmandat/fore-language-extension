# EaxMdService.doUndoAction

EaxMdService.doUndoAction
-


**


# EaxMdService.doUndoAction


## Синтаксис


doUndoAction(report: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 metadata, callback: PP.Delegate);


## Параметры


*report.* Экспресс-отчёт, для которого
 необходимо выполнить обновление;


*metadata.* Метаданные.


*callback.* Обратная функция.


## Описание


Метод doUndoAction** предназначен
 для работы со стеком отмены/повтора действий в экспресс-отчёте


## Комментарии


Структура параметра metadata
 соответствует wsdl UndoRedo и может содержать следующие значения:


	- enabled. Признак доступности
	 стека отмены;


	- undo. Отменяет указанное
	 количество действий;


	- redo. Указанное количество
	 действий будет повторно выполнено;


	- isEmpty. При установке
	 полю значения true стек отмены будет очищен;


	- delUndoRedo. Удаляет
	 указанное количество действий, доступных для повтора/отмены. Сначала
	 удаляются действия доступные для повтора.


После применения метода doUndoAction
 следует обновить визуальный компонент или обновить метаданные объекта.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)». Совершим любое действие, чтобы заполнить
 стек доступных для отмены действий. С помощью кода отменим совершенное
 действие:


        report = eaxAnalyzer.getActiveSheet();
        // Устанавливаем метаданные для отмены 1 операции
        metadata = {
            "undo" : "1"
        };
        eaxMdService.doUndoAction(report, metadata)
        // Обновляем отчет
        expressBox.refreshAll();
В результате выполнения примера было отменено последнее действие.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
