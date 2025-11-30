# ISQLComponents.GroupBy

ISQLComponents.GroupBy
-


# ISQLComponents.GroupBy


## Синтаксис


GroupBy: String;


## Описание


Свойство GroupBy определяет
 часть запроса, в которой указывается выражение для группировки результатов.


## Комментарии


Если значение свойства было получено в отдельную переменную и в переменной
 изменено выражение, то для применения изменений необходимо переприсвоить
 значение свойства:


			Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        GroupBy: String;

    Begin

        GroupBy := Components.GroupBy;

        //...

        //Модификация GroupBy

        //...

        Components.GroupBy := GroupBy;

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
