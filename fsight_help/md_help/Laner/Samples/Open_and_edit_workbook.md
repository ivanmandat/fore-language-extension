# Открытие рабочей книги, изменение данных, сохранение изменений

Открытие рабочей книги, изменение данных, сохранение изменений
-


# Открытие рабочей книги, изменение данных, сохранение изменений


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», в которой будут изменены и сохранены
 данные.


Подключите ссылки на следующие системные сборки:


	- Express;


	- Laner;


	- MathFin;


	- Metabase.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    WB: ILaner;

    Table: ILanerTable;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    WB := Exp.Laner;

    //Получаем таблицу рабочей книги

    Table := WB.Execute;

    //Разрешаем редактирование таблицы

    If Not Table.IsEditing Then

        Table.Edit;

    End If;

    //Для всех доступных ячеек таблицы присваиваем случайные значения от 0 до 100

    For i := 0 To Table.RowCount - 1 Do

    For j := 0 To Table.ColumnCount - 1 Do

    If Table.IsEditableCell(i, j) Then

    Table.Cell(i, j) := Math.RandBetween(0, 100);

    End If;

    End For;

    End For;

    //Сохраняем изменения

    Table.Post;

    Table.Update;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет открыта на редактирование рабочая книга
 с указанным идентификатором. Данные в таблице рабочей книги будут изменены
 на случайные значения от 0 до 100.


См. также:


[Примеры](Laner_Samples.htm)
 | [ILaner](../Interface/ILaner/ILaner.htm) | [ILanerTable](../Interface/ILanerTable/ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
