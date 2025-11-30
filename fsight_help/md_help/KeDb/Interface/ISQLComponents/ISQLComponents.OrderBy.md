# ISQLComponents.OrderBy

ISQLComponents.OrderBy
-


# ISQLComponents.OrderBy


## Синтаксис


OrderBy: String;


## Описание


Свойство OrderBy определяет
 часть запроса, в которой указывается выражение для сортировки результатов.


## Комментарии


Если значение свойства было получено в отдельную переменную и в переменной
 изменено выражение, то для применения изменений необходимо переприсвоить
 значение свойства:


			Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        OrderBy: String;

    Begin

        OrderBy := Components.OrderBy;

        //...

        //Модификация OrderBy

        //...

        Components.OrderBy := OrderBy;

    End Sub BeforeConstruction;


    Sub AfterConstruction(Var SQL: String);

    Begin

    End Sub AfterConstruction;

End Class SQLCallback;


## Пример


Пример использования приведён в описании метода [ISQLCallback.BeforeConstruction](../ISQLCallback/ISQLCallback.BeforeConstruction.htm).


См. также:


[ISQLComponents](ISQLComponents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
