# ICollection.CopyTo

ICollection.CopyTo
-


# ICollection.CopyTo


## Синтаксис


CopyTo(Arr: Array; Index: Integer);


## Параметры


Arr. Массив, в который необходимо
 скопировать элементы коллекции.


Index. Индекс позиции в массиве,
 начиная с которой осуществляется вставка элементов.


## Описание


Метод CopyTo осуществляет копирование
 коллекции в массив Arr.


## Комментарии


Вставка элементов осуществляется начиная с позиции Index.
 Указываемый массив предварительно должен быть проинициализирован. Если
 размер указываемого массива меньше чем количество элементов в коллекции,
 то будут скопированы не все данные.


## Пример


			Sub UserProc;

Var

    StrL: IStringList;

    Arr: Array;

    i: Integer;

    v: Variant;

Begin

    StrL := New StringList.Create;

    For i := 0 To Math.RandBetweenI(0, 10) Do

        StrL.Add(Char.Chr(Math.RandBetweenI(65, 90)));

    End For;

    Arr := New Variant[Strl.Count];

    Strl.CopyTo(Arr, 0);

    //Просмотр значений в полученном массиве

    For Each v In Arr Do

        Debug.WriteLine(v);

    End For;

End Sub UserProc;


При выполнении примера в массив «Arr» будут скопированы элементы из
 массива строк «StrL».


См. также:


[ICollection](ICollection.htm) | [Массивы](Fore.chm::/06_SyntRules/Fore_SyntArrays.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
