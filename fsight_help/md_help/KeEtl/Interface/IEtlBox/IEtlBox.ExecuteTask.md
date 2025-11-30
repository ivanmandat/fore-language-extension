# IEtlBox.ExecuteTask

IEtlBox.ExecuteTask
-


# IEtlBox.ExecuteTask


## Синтаксис


ExecuteTask(ExecCallback: [IEtlExecutionCallback](../IEtlExecutionCallback/IEtlExecutionCallback.htm));


## Параметры


ExecCallback. Объект, используемый
 для отслеживания процесса выполнения задачи ETL.


## Описание


Метод ExecuteTask запускает
 задачу ETL на выполнение.


## Комментарии


В качестве значения параметра ExecCallback
 необходимо указать экземпляр пользовательского класса, который реализует
 интерфейс [IEtlExecutionCallback](../IEtlExecutionCallback/IEtlExecutionCallback.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонентов UiEtlObject
 с наименованием «UiEtlObject1» и EtlBox
 с наименованием «EtlBox1». «UiEtlObject1» установлен в качестве источника
 для «EtlBox1». К «UiEtlObject1» подключена какая-либо задача ETL.


Добавьте ссылку на системную сборку ETL.


	Class SAMPLEForm: Form

	    UiEtlObject1: UiEtlObject;

	    EtlBox1: EtlBox;

	    Button1: Button;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        C: EtlCallback;

	    Begin

	        C := New EtlCallback.Create;

	        EtlBox1.ExecuteTask(C);

	    End Sub Button1OnClick;

	End Class SAMPLEForm;


	Public Class EtlCallback: Object, IEtlExecutionCallback

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

	End Class EtlCallback;


В результате выполнения примера при нажатии на кнопку будет осуществлён
 запуск на выполнение задачи ETL, которая отображается в компоненте «EtlBox1».
 Вся информация о статусе выполнения задачи будет выводиться в консоль
 среды разработки.


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
