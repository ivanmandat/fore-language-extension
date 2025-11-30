# IStatMethod.ErrorByStatus

IStatMethod.ErrorByStatus
-


# IStatMethod.ErrorByStatus


## Синтаксис


ErrorByStatus(Status: Integer): String;


## Параметры


Status. Номер ошибки. Данный номер возвращает свойство [Status](IStatMethod.Status.htm).


## Описание


Свойство ErrorByStatus возвращает сообщение об ошибке по ее номеру.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LinR: ISmLinearRegress;

    stat: Integer;

Begin

    LinR := New SmLinearRegress.Create;

    stat := LinR.Status;

    Debug.WriteLine(LinR.ErrorByStatus(stat));

End Sub UserProc;


После выполнения примера в окно консоли будет выведено сообщение об ошибке по полученному номеру статуса выполнения.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
