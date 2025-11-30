# IBitArray.SetAll

IBitArray.SetAll
-


# IBitArray.SetAll


## Синтаксис


SetAll;


## Описание


Метод SetAll устанавливает всем
 битам массива значение True.


## Пример


			Sub UserProc;

Var

    BitArr: IBitArray;

Begin

    BitArr := New BitArray.Create;

    BitArr.Length := 30;

    BitArr.SetAll;

End Sub UserProc;


После выполнения примера будет создан битовый массив «BitArr», всем
 элементам массива будет установлено значение «True».


См. также:


[IBitArray](IBitArray.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
