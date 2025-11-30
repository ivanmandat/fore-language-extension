# IVariableStub.FindByKey

IVariableStub.FindByKey
-


# IVariableStub.FindByKey


## Синтаксис


FindByKey(DimKey: Integer): [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Параметры


DimKey - ключ измерения.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий структуру измерения источника данных.


## Комментарии


Ключ, по которому осуществляется поиск, передается посредством параметра
 DimKey.


## Пример


Для выполнения примера предполагается наличие объекта «stub» типа [IVariableStub](IVariableStub.htm).


			Sub UserProc;

Var

    stub: IVariableStub;

    FindRes: Boolean;

Begin

    If stub.DimensionCount > 0 Then

        FindRes := stub.FindByKey(1);

    End If;

    If FindRes Then

        Debug.WriteLine("Измерение с ключом «1» найдено");

    Else

        Debug.WriteLine("Измерение с ключом «1» не найдено");

    End If;

End Sub UserProc;


Если абстрактный источник данных содержит измерения, то в них будет
 произведен поиск измерения с ключом «1». Результат поиска будет выведен
 в окно консоли.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
