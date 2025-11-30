# ISQLComponents.Aggregation

ISQLComponents.Aggregation
-


# ISQLComponents.Aggregation


## Синтаксис


Aggregation: String;


## Описание


Свойство Aggregation определяет
 часть запроса, в которой указывается выражение для агрегации данных.


## Комментарии


Если значение свойства было получено в отдельную переменную и в переменной
 изменено выражение, то для применения изменений необходимо переприсвоить
 значение свойства:


			Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        Aggregation: String;

    Begin

        Aggregation := Components.Aggregation;

        //...

        //Модификация Aggregation

        //...

        Components.Aggregation := Aggregation;

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
