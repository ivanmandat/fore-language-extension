# IPivotHeaderNumbering.CornerFormat

IPivotHeaderNumbering.CornerFormat
-


# IPivotHeaderNumbering.CornerFormat


## Синтаксис


CornerFormat: [PivotNumberingFormat](../../Enums/PivotNumberingFormat.htm);


## Описание


Свойство CornerFormat возвращает
 формат нумерации в уголке.


## Комментарии


По
 умолчанию используются арабские цифры.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором «EXPRESS».
 Данный отчёт должен содержать таблицу данных.


Добавьте ссылки на системные сборки: Metabase, Express, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Header: IPivotHeader;

    Numbering: IPivotHeaderNumbering;


Begin

    MB := MetabaseClass.Active;

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    Pivot := Express.Pivot;

    Header := Pivot.LeftHeader;

    //Параметры нумерации строк

    Numbering := Header.Numbering;

    Select Case Numbering.CornerFormat As Integer

        Case 0: Debug.WriteLine("Формат нумерации в уголке - Арабские цифры");

        Case 1: Debug.WriteLine("Формат нумерации в уголке - Буквы латиницы в нижнем регистре");

        Case 2: Debug.WriteLine("Формат нумерации в уголке - Буквы латиницы в верхнем регистре");

        Case 3: Debug.WriteLine("Формат нумерации в уголке - Римские цифры в нижнем регистре");

        Case 4: Debug.WriteLine("Формат нумерации в уголке - Римские цифры в верхнем регистре");

        Case 5: Debug.WriteLine("Формат нумерации в уголке - Буквы кириллицы в нижнем регистре");

        Case 6: Debug.WriteLine("Формат нумерации в уголке - Буквы кириллицы в верхнем регистре");

    End Select;

End Sub UserProc;


После выполнения примера при нажатии на кнопку в консоль будет выведен
 формат нумерации в уголке данного экспресс-отчёта.


См. также:


[IPivotHeaderNumbering](IPivotHeaderNumbering.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
