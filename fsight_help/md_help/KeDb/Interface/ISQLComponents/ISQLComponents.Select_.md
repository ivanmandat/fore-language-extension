# ISQLComponents.Select_

ISQLComponents.Select_
-


# ISQLComponents.Select_


## Синтаксис


Select_: String;


## Описание


Свойство Select_ определяет
 часть запроса, в которой указывается основная часть запроса, определяющая
 извлекаемые данные.


## Комментарии


Если значение свойства было получено в отдельную переменную и в переменной
 изменено выражение, то для применения изменений необходимо переприсвоить
 значение свойства:


			Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        Select_: String;

    Begin

        Select_ := Components.Select_;

        //...

        //Модификация Select_

        //...

        Components.Select_ := Select_;

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
