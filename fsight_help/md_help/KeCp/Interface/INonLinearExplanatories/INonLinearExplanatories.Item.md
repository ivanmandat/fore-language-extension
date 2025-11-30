# INonLinearExplanatories.Item

INonLinearExplanatories.Item
-


# INonLinearExplanatories.Item


## Синтаксис


Item(Index: Integer): [INonLinearExplanatory](../INonLinearExplanatory/INonLinearExplanatory.htm);


## Параметры


Index. Индекс переменной в
 коллекции.


## Описание


Свойство Item возвращает переменную
 из коллекции по ее индексу.


## Комментарии


Свойство доступно только для чтения.


Item обеспечивает возможность
 доступа к определенной переменной из коллекции. Значение параметра Index должно быть неотрицательным
 числом, но меньше значения свойства [INonLinearExplanatories.Count](INonLinearExplanatories.Count.htm).
 Индекс первой переменной в коллекции - «0», последней - «[INonLinearExplanatories.Count](INonLinearExplanatories.Count.htm)
 - 1». Нумерация индексов - сплошная.


## Пример


Для выполнения примера предполагается наличие объекта «Explanatories»
 типа [INonLinearExplanatories](INonLinearExplanatories.htm).


	Sub UserProc;

	Var

	    Explanatories: INonLinearExplanatories;

	Begin

	    If Explanatories.Count > 0 Then

	        Debug.WriteLine(Explanatories.Item(0).VariableName);

	    End If;

	End Sub UserProc;


После выполнения примера если в коллекции объясняющих переменных присутствуют
 элементы, то в окно консоли будет выведено наименование в формуле для
 первого элемента.


См. также:


[INonLinearExplanatories](INonLinearExplanatories.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
