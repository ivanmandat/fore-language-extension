# IRepositoryScriptManager.Execute

IRepositoryScriptManager.Execute
-


# IRepositoryScriptManager.Execute


## Синтаксис


		Execute(Callback: [IRepositoryScriptCallback](../IRepositoryScriptCallback/IRepositoryScriptCallback.htm));


## Параметры


Callback. Объект, используемый для отслеживания процесса
 создания, либо обновления репозитория.


## Описание


Метод Execute осуществляет выполнение
 операции с репозиторием.


## Комментарии


Тип операции определяется в свойстве [Operation](IRepositoryScriptManager.Operation.htm).
 Скрипт для выполнения операции должен быть загружен перед выполнением
 с помощью метода [LoadScript](IRepositoryScriptManager.LoadScript.htm).


## Пример


Пример использования приведён в описании свойства [IRepositoryScriptManager.Connection](IRepositoryScriptManager.Connection.htm),
 метода [IRepositoryScriptCallback.OnStart](../IRepositoryScriptCallback/IRepositoryScriptCallback.OnStart.htm).


См. также:


[IRepositoryScriptManager](IRepositoryScriptManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
