# ILanerCellAttributes.MoveTo

ILanerCellAttributes.MoveTo
-


# ILanerCellAttributes.MoveTo


## Синтаксис


MoveTo(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс начальной
 позиции атрибута;


ToIndex. Индекс позиции, в
 которую необходимо переместить атрибут.


## Описание


Метод MoveTo перемещает
 указанный атрибут в требуемую позицию.


## Комментарии


Индексация атрибутов в коллекции и начинается с нуля. Для получения
 количества атрибутов в коллекции используйте свойство [ILanerCellAttributes.Count](ILanerCellAttributes.Count.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WORKBOOK_CMT», содержащей несколько рядов. Также
 должны быть заданы несколько атрибутов, для формирования комментариев
 к наблюдениям рядов.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    CommentAttr: ILanerCellAttributes;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_CMT").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем коллекцию атрибутов комментария

	    CommentAttr := Laner.CommentAttributes;

	    // Если в коллекции больше 2-х атрибутов, то меняем их местами

	    If CommentAttr.Count >= 2 Then

	        CommentAttr.Move(0, 1);

	    End If;

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера первый и второй атрибуты в коллекции
 будут обменяны местами.


См. также:


[ILanerCellAttributes](ILanerCellAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
