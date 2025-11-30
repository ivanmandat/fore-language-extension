# IWinApplicationClass.GetKeyState

IWinApplicationClass.GetKeyState
-


# IWinApplicationClass.GetKeyState


## Синтаксис


GetKeyState(Key: [Keys](ModForms.chm::/Enums/Keys.htm)): Boolean;


## Параметры


Key. Клавиша, для которой необходимо проверить состояние.


## Описание


Метод GetKeyState возвращает состояние клавиши (нажата/не нажата) из очереди сообщений.


## Комментарии


Метод возвращает True, если клавиша, передаваемая посредством параметра Key, нажата в данный момент.


При выполнении длительных процессов обработка очереди сообщений приложением производится после завершения процесса. В этом случае рекомендуется использовать метода [GetAsyncKeyState](IWinApplicationClass.GetAsyncKeyState.htm).


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
