# IEtlExecutionCallback.OnObject

IEtlExecutionCallback.OnObject
-


# IEtlExecutionCallback.OnObject


## Синтаксис


OnObject(Object: [IEtlObject](../IEtlObject/IEtlObject.htm));


## Параметры


Object. Объект
 задачи ETL.


## Описание


Метод OnObject реализует событие
 на выполнение объекта задачи ETL.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL, в которой настроены коннекторы к источнику и приёмнику
 данных. Между коннекторами должна быть настроена связь.


	Public Class MyClass: Object, IEtlExecutionCallback

	    Sub OnObject(Object: IEtlObject);

	    Begin

	        Debug.WriteLine("Выполняется объект: " + Object.Id);

	    End Sub OnObject;


	    Sub OnProgress(Progress: Integer);

	    Begin

	        Debug.WriteLine("Выполнено: " + Progress.ToString + "%");

	    End Sub OnProgress;


	    Sub OnSetResult(nTotalRec: Integer; nErrorRec: Integer);

	    Begin

	        Debug.WriteLine("Всего записей обработано: " + nTotalRec.ToString);

	        Debug.WriteLine("Записей пропущено: " + nErrorRec.ToString);

	    End Sub OnSetResult;

	End Class MyClass;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Etltask: IEtlTask;

	    C: MyClass;

	Begin

	    MB := MetabaseClass.Active;

	    Etltask := MB.ItemById("ETL").Bind As IEtlTask;

	    C := New MyClass.Create;

	    Etltask.Execute(C);

	End Sub UserProc;


При выполнении примера будет осуществлен запуск
 выполнения задач ETL. Информация о статусе выполнения и текущем объекте
 будет выведена в консоль среды разработки. После завершения будет выведен
 результат выполнения задачи: количество обработанных записей и количество
 пропущенных записей.


См. также:


[IEtlExecutionCallback](IEtlExecutionCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
