# IValidationExecuteSettings.Warnings

IValidationExecuteSettings.Warnings
-


# IValidationExecuteSettings.Warnings


## Синтаксис


Warnings: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство Warnings возвращает предупреждения фильтра валидации.


## Комментарии


Предупреждения представлены массивом строк.


## Пример


Пример представляет собой функцию, на вход которой подается фильтр валидации: параметр val. Добавьте ссылки на системные сборки «Ms», «Cubes».


			Function ExecuteVal(val: IValidationFilter): IValidationExecRun;

Var

    sett: IValidationExecuteSettings;

    res: IValidationExecRun;

    s: string;

Begin

    sett := New ValidationExecuteSettings.Create;

    res := val.Execute(sett);

    Debug.WriteLine("======Сообщения=====");

    For Each s In sett.Messages Do

        Debug.WriteLine(s);

    End For;

    Debug.WriteLine("======Предупреждения=====");

    For Each s In sett.Warnings Do

        Debug.WriteLine(s);

    End For;

    Return res;

End Function ExecuteVal;


После выполнения функция вернет данные расчета валидации. В окно консоли будут выведены сообщения и предупреждения фильтра валидации.


См. также:


[IValidationExecuteSettings](IValidationExecuteSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
