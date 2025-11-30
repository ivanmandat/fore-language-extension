# INonLinearExplanatories.Remove

INonLinearExplanatories.Remove
-


# INonLinearExplanatories.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс удаляемой переменной.


## Описание


Метод Remove удаляет переменную из коллекции по заданному индексу.


## Комментарии


Значение параметра Index должно быть неотрицательным числом, но меньше значения свойства [INonLinearExplanatories.Count](INonLinearExplanatories.Count.htm). Индекс первой переменной в коллекции - «0», последней - «[INonLinearExplanatories.Count](INonLinearExplanatories.Count.htm) - 1». Нумерация индексов - сплошная.


Если удаление объекта прошло успешно, то метод возвращает значение True, значение свойства [INonLinearExplanatories.Count](INonLinearExplanatories.Count.htm) уменьшается на единицу; в обратном случае - False.


## Пример


Для выполнения примера предполагается наличие объекта «Explanatories» типа [INonLinearExplanatories](INonLinearExplanatories.htm).


			Sub UserProc;

Var

    Explanatories: INonLinearExplanatories;

Begin

    If Explanatories.Count > 0 Then

        Explanatories.Remove(0);

    End If;

End Sub UserProc;


После выполнения примера если в коллекции объясняющих переменных присутствуют элементы, то в первый из них будет удален.


См. также:


[INonLinearExplanatories](INonLinearExplanatories.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
