# IDimIndexInstance.LookUp

IDimIndexInstance.LookUp
-


# IDimIndexInstance.LookUp


## Синтаксис


LookUp(IndexAttributesValues: Variant): Integer;


## Параметры


IndexAttributesValues — значение
 атрибутов, по которым осуществляется поиск.


## Описание


Метод LookUp осуществляет поиск
 элемента справочника. Искомые данные передаются посредством параметра
 IndexAttributesValues.


## Комментарии


Метод возвращает порядковый номер найденного элемента (нумерация с нуля).


Метод возвращает значение "-1", если элемент с искомыми значениями
 атрибутов не найден.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    IndxsInst: IDimIndexesInstance;

	    IndexInst: IDimIndexInstance;

	    Arr: Array Of Variant;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Arr:=New Variant[2];

	    IndxsInst:=Dimen.Indexes;

	    If IndxsInst.Count<>0 Then

	        IndexInst:=IndxsInst.Item(0);

	        Arr[0]:=10;

	        Arr[1]:=10;

	        i:=IndexInst.LookUp(Arr);

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по атрибутам первого
 индекса справочника. Искомые значения атрибутов находятся в массиве «Arr».
 В случае удачного поиска в переменной «i» будет содержаться номер найденного
 элемента.


См. также:


[IDimIndexInstance](IDimIndexInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
