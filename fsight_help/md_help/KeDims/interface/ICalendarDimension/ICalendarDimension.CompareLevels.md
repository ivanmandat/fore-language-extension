# ICalendarDimension.CompareLevels

ICalendarDimension.CompareLevels
-


# ICalendarDimension.CompareLevels


## Синтаксис


CompareLevels(Level1: [DimCalendarLevel](../../Enums/DimCalendarLevel.htm);
 Level2: [DimCalendarLevel](../../Enums/DimCalendarLevel.htm)):
 [CalendarCompareLevelsResult](../../Enums/CalendarCompareLevelsResult.htm);


## Параметры


Level1,
 Level2. Уровни календаря.


## Описание


Метод CompareLevels используется
 для определения результата сравнения уровней календаря.


## Комментарии


Для получения индекса указанного уровня календаря используйте свойство
 [ICalendarDimension.CalendarLevelIndex](ICalendarDimension.CalendarLevelIndex.htm).


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором «D_CALENDAR» с настроенными уровнями календаря.


Добавьте ссылки на системные сборки Metabase, Dimensions.


			Sub UserProc;

Var

    mb: IMetabase;

    mbObj: IMetabaseObject;

    Cal : ICalendarDimension;

    Res : CalendarCompareLevelsResult;

    StrRes: String;

Begin

    mb := MetabaseClass.Active;

    mbObj :=mb.ItemById("D_CALENDAR").Bind;

    Cal := mbObj As ICalendarDimension;

    Res := Cal.CompareLevels(DimCalendarLevel.Quarter,DimCalendarLevel.Month);

    StrRes:=(Res As Variant) As String;

    Select Case StrRes

            Case "-2": Debug.WriteLine("Non-applicable");

            Case "-1": Debug.WriteLine("Less");

            Case "0": Debug.WriteLine("Equal");

            Case "1": Debug.WriteLine("Greater");

    End Select;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен результат сравнения
 указанных уровней календаря.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
