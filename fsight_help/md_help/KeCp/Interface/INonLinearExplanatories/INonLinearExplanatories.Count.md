# INonLinearExplanatories.Count

INonLinearExplanatories.Count
-


# INonLinearExplanatories.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 объясняющих переменных в коллекции.


## Комментарии


Свойство доступно только для чтения.


Емкость коллекции - это количество элементов, которое может содержать
 коллекция. Свойство Count - это
 количество элементов, которое в действительности содержится в коллекции.


Емкость всегда больше или равна значению свойства Count.
 Если при добавлении элементов в коллекцию значение свойства Count
 превышает емкость, то она автоматически увеличивается.


## Пример


Для выполнения примера предполагается наличие объекта «Explanatories»
 типа [INonLinearExplanatories](INonLinearExplanatories.htm).


	Sub UserProc;

	Var

	    Explanatories: INonLinearExplanatories;

	Begin

	    If Explanatories.Count > 0 Then

	        Explanatories.Clear;

	    End If;

	End Sub UserProc;


После выполнения примера если в коллекции объясняющих переменных присутствуют
 элементы, то она будет очищена.


См. также:


[INonLinearExplanatories](INonLinearExplanatories.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
