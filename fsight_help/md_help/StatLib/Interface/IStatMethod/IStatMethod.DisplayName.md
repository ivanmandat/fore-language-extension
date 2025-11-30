# IStatMethod.DisplayName

IStatMethod.DisplayName
-


# IStatMethod.DisplayName


## Синтаксис


DisplayName: String;


## Описание


Свойство DisplayName возвращает внешнее наименование метода.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    LinR: ISmLinearRegress;

Begin

    LinR := New SmLinearRegress.Create;

    Debug.WriteLine("Внешнее наименование: " + LinR.DisplayName);

    Debug.WriteLine("Внутренее наименование: " + LinR.Name);

End Sub Button2OnClick;


После выполнения примера в окно консоли будут выведены внешнее и внутреннее наименования метода.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
