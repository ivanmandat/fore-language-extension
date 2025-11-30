# IEnumerable

IEnumerable
-


# IEnumerable


Сборка: Collections;


## Описание


IEnumerable - абстрактный интерфейс
 коллекций, поддерживающих перебор элементов.


## Иерархия наследования


IEnumerable


## Комментарии


Интерфейс не содержит собственных свойств и методов. Внутренняя реализация
 интерфейса позволяет работать с коллекциями с помощью оператора [For Each](Fore.chm::/08_Operators/Fore_For.htm).


Примечание.
 Наследование от IEnumerable не является обязательным условием для поддержки
 For Each. Для ряда коллекций, имеющихся в Fore, реализована собственная
 поддержка оператора For Each.


## Пример


Ниже приведен пример использования интерфейса IEnumerable для создания
 универсальной процедуры для просмотра любых коллекций, являющихся наследником
 IEnumerable.


			Sub UserProc;

    Sub ShowCollection(Collection: IEnumerable);

    Var

        v: Variant;

    Begin

        For Each v In Collection Do

            Debug.WriteLine(v);

        End For;

    End Sub ShowCollection;

Var

    ArrList: IArrayList;

    StrList: IStringList;

Begin

    //Создание и заполнение динамического массива любых значений

    ArrList := New ArrayList.Create;

    ArrList.Add("A");

    ArrList.Add(Integer.MaxValue);

    ArrList.Add(DateTime.MaxValue);

    //Создание и заполнение динамического массива строк

    StrList := New StringList.Create;

    StrList.Add("Один");

    StrList.Add("Два");

    StrList.Add("Три");

    //Просмотр коллекций

    ShowCollection(ArrList);

    ShowCollection(StrList);

End Sub UserProc;


См. также:


[Интерфейсы
 сборки Collections](../ModCollections_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
