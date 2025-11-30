# IRepositoryScriptCallback.EndStatement

IRepositoryScriptCallback.EndStatement
-


# IRepositoryScriptCallback.EndStatement


## Синтаксис


		EndStatement(bError: Boolean; Message: String;
		 Var Cancel: Boolean);


## Параметры


bError. Признак наличия ошибки
 при выполнении запроса. Параметр возвращает значение True,
 если при выполнении запроса, передаваемого в параметре Statement
 события [BeginStatement](IRepositoryScriptCallback.BeginStatement.htm),
 возникла ошибка.


Message. Сообщение об ошибке,
 которая возникла при выполнении запроса.


Cancel. Переменная, определяющая
 будут ли выполнены остальные запросы скрипта. Если переменная имеет значение
 True, то выполнение скрипта будет
 остановлено, иначе продолжено.


## Описание


Метод EndStatement реализует
 событие, происходящее после выполнения запроса.


## Комментарии


В данном событии, изменяя значение параметра Cancel,
 можно обработать исключительные ситуации, которые могут возникнуть при
 выполнении запроса. Выполняемый запрос передается в параметре Statement
 события [BeginStatement](IRepositoryScriptCallback.BeginStatement.htm).


## Пример


Пример использования приведён в описании метода [IRepositoryScriptCallback.OnStart](IRepositoryScriptCallback.OnStart.htm).


См. также:


[IRepositoryScriptCallback](IRepositoryScriptCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
