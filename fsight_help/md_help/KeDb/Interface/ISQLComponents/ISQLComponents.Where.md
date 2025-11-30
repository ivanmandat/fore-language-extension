# ISQLComponents.Where

ISQLComponents.Where
-


# ISQLComponents.Where


## Синтаксис


Where: String;


## Описание


Свойство Where определяет часть
 запроса, в которой указывается полное условие отбора для элементов измерений.


## Комментарии


Если значение свойства было получено в отдельную переменную и в переменной
 изменено выражение, то для применения изменений необходимо переприсвоить
 значение свойства:


Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        Where: String;

    Begin

        Where := Components.Where;

        //...

        //Модификация Where

        //...

        Components.Where := Where;

    End Sub BeforeConstruction;


    Sub AfterConstruction(Var SQL: String);

    Begin

    End Sub AfterConstruction;

	End Class SQLCallback;


Отдельные части, в которых указываются условия для отбора элементов
 определённого измерения, можно получить с помощью свойства [ISQLComponents.Condition](ISQLComponents.Condition.htm).


## Пример


Указанный класс является обработчиком формирования запроса на извлечение
 данных куба. Данный класс необходимо сохранить в модуль и назначить в
 качестве обработчика источнику данных куба с помощью метода [IStandardCubeDataset.SetCallback](KeCubes.chm::/Interface/IStandardCubeDataset/IStandardCubeDataset.SetCallback.htm).


Public Class SQLCallback: Object, ISQLCallback

    Sub BeforeConstruction(Components: ISQLComponents);

    Var

        i: Integer;

        Condition: ISQLCondition;

    Begin

        Debug.WriteLine("Where: " + Components.Where); Components.Where := Components.Where;

        Debug.WriteLine("ConditionCount: " + Components.ConditionCount.ToString);

        For i := 0 To Components.ConditionCount - 1 Do

            Condition := Components.Condition(i);

            Debug.WriteLine("Condition " + Condition.Condition);

            Debug.Indent;

            Debug.WriteLine("Fields: " + Condition.Fields);

            Debug.WriteLine("TempTable: " + Condition.TempTable);

            Debug.WriteLine("TempTableAlias: " + Condition.TempTableAlias);

            Debug.WriteLine("TempTableAttrLinkedFields: " + Condition.TempTableAttrLinkedFields);

            Debug.WriteLine("TempTableFields: " + Condition.TempTableFields);

            Debug.WriteLine("TempTableHasNulls: " + Condition.TempTableHasNulls.ToString);

            Debug.WriteLine("TempTableRecCount: " + Condition.TempTableRecCount.ToString);

            Debug.Unindent;

        End For;

        Debug.WriteLine("TableAlias: " + Components.TableAlias);

    End Sub BeforeConstruction;


    Sub AfterConstruction(Var SQL: String);

    Begin

    End Sub AfterConstruction;

End Class SQLCallback;


При выполнении процедуры BeforeConstruction в консоль среды разработки
 будут выведены все части формируемого запроса. При необходимости можно
 раскомментировать какой-либо блок и изменить часть запроса. Полностью
 сформированный запрос будет выведен при выполнении метода AfterConstruction.


См. также:


[ISQLComponents](ISQLComponents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
