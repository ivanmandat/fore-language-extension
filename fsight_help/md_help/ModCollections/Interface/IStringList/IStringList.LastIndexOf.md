# IStringList.LastIndexOf

IStringList.LastIndexOf
-


# IStringList.LastIndexOf


## Синтаксис


LastIndexOf(Value: String): Integer;


## Параметры


Value. Значение,
 которое необходимо найти.


## Описание


Метод LastIndexOf осуществляет
 обратный поиск значения.


## Комментарии


Метод возвращает индекс элемента в случае удачного поиска, и -1, если
 значение не найдено.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    i: Integer;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(50, 100) Do

        StrL.Add("Number " + Math.RandBetweenI(0, 100).ToString);

    End For;

    i := StrL.LastIndexOf("Number 25");

End Sub UserProc;


После выполнения примера будет сгенерирован динамический массив строк
 и осуществлен обратный поиск значения «Number 25». В переменной i будет
 содержаться номер первого найденного элемента в случае удачного поиска.


См. также:


[IStringList](IStringList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
