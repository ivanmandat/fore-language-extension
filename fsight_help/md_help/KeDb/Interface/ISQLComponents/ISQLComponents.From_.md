# ISQLComponents.From_

ISQLComponents.From_
-


# ISQLComponents.From_


## Синтаксис


From_: String;


## Описание


Свойство From_ определяет часть
 запроса, в которой указывается источник данных.


## Комментарии


Если значение свойства было получено в отдельную переменную и в переменной
 изменено выражение, то для применения изменений необходимо переприсвоить
 значение свойства:


			Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        From_: String;

    Begin

        From_ := Components.From_;

        //...

        //Модификация From_

        //...

        Components.From_ := From_;

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
