# IWinApplicationClass.WaitCursor

IWinApplicationClass.WaitCursor
-


# IWinApplicationClass.WaitCursor


## Синтаксис


WaitCursor: Boolean;


## Описание


Свойство WaitCursor определяет, будет ли курсор мыши отображаться в виде курсора ожидания (обычно песочные часы).


## Комментарии


Используется только в настольном приложении.


Курсор ожидания отображается до тех пор, пока выполняется метод, в котором свойству WaitCursor было установлено значение True. После завершения выполнения метода курсор будет сменен обратно на курсор основного режима работы. При этом свойство WaitCursor свое значение автоматически не сменит. Необходимо в прикладном коде в нужный момент устанавливать свойству значение False.


## Пример


			Sub DoExecute;

Begin

    WinApplication.WaitCursor := True;

    //...
    //...Какой-либо длительный процесс
    //...
    WinApplication.WaitCursor := False;

End Sub DoExecute;


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
