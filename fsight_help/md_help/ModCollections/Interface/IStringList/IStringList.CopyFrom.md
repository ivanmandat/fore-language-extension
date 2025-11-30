# IStringList.CopyFrom

IStringList.CopyFrom
-


# IStringList.CopyFrom


## Синтаксис


CopyFrom(Value: [IStringList](IStringList.htm));


## Параметры


Value. Массив,
 являющийся источником данных.


## Описание


Метод CopyFrom осуществляет
 копирование данных из указанного источника.


## Пример


			Sub UserProc;

Var

    StrL, StrL1: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    StrL1 := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    StrL1.CopyFrom(StrL);

End Sub UserProc;


После выполнения примера в массив StrL1 будут скопированы данные из
 сгенерированного массива StrL.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
