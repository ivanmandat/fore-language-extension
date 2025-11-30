# IEtlTaskExecutionEvents.OnEndBlock

IEtlTaskExecutionEvents.OnEndBlock
-


# IEtlTaskExecutionEvents.OnEndBlock


## Синтаксис


OnEndBlock(Task: [IEtlTask](../IEtlTask/IEtlTask.htm);
 Object: [IEtlObject](../IEtlObject/IEtlObject.htm); Duration:
 Integer; InRec: [IDictionary](ModCollections.chm::/Interface/IDictionary/IDictionary.htm);
 OutRec: [IDictionary](ModCollections.chm::/Interface/IDictionary/IDictionary.htm);
 ErrorRec: [IDictionary](ModCollections.chm::/Interface/IDictionary/IDictionary.htm));


## Параметры


Task. Задача ETL;


Object. Объект задачи ETL;


Duration. Время выполнения
 блока в миллисекундах;


InRec. Словарь с информацией
 о записях, поступивших на входы объекта;


OutRec. Словарь с информацией
 о записях, поступивших на выходы объекта;


ErrorRec. Словарь с информацией
 об ошибочных (пропущенных) записях.


## Описание


Метод OnEndBlock реализует событие,
 наступающее при завершении блока задачи ETL.


## Комментарии


Блок задачи ETL - это совокупность двух объектов и связи между ними
 в задаче ETL.


В словарях InRec, OutRec,
 ErrorRec каждая элемент будет
 содержать следующую информацию:


	- Ключ элемента - идентификатор входа/выхода;


	- Значение элемента - количество записей, поступивших на вход/выход.


## Пример


В примере описывается класс, который может быть использован в качестве
 обработчика событий задачи ETL.


Добавьте ссылки на системные сборки: Collections, Etl, Metabase.


	Class EventsClass: EtlTaskExecutionEvents

	    // Событие, наступающее при запуске задачи ETL

	    Public Sub OnStartTask(Task: IEtlTask);

	    Var

	        MObj: IMetabaseObject;

	    Begin

	        MObj := (Task As IMetabaseObjectInstance).Object;

	        Debug.WriteLine("Событие OnStartTask для задачи ETL:" + #13 + #10 +

	            "   Наименование: " + MObj.Name + ". Идентификатор: " + MObj.Id + '.');

	    End Sub OnStartTask;

	    // Событие, наступающее при завершении задачи ETL

	    Public Sub OnEndTask(Task: IEtlTask; Duration, TotalRec, ErrorRec: Integer);

	    Begin

	        Debug.WriteLine("Событие OnEndTask:" + #13 + #10 +

	            "   Количество объектов задачи ETL = " + Task.Count.ToString + #13 + #10 +

	            "   Время выполнения = " + Duration.ToString + "мс" + #13 + #10 +

	            "   Общее количество обработанных записей = " + TotalRec.ToString + #13 + #10 +

	            "   Общее количество ошибочных (пропущенных) записей = " + ErrorRec.ToString);

	    End Sub OnEndTask;

	    // Событие, наступающее при запуске блока задачи ETL

	    Public Sub OnStartBlock(Task: IEtlTask; Object: IEtlObject);

	    Begin

	        Debug.WriteLine("Событие OnStartBlock для объекта:" + #13 + #10 +

	            "   " + Object.Name + '(' + Object.Id + ')');

	    End Sub OnStartBlock;

	    // Событие, наступающее при завершении блока задачи ETL

	    Public Sub OnEndBlock(Task: IEtlTask; Object: IEtlObject; Duration: Integer; InRec, OutRec, ErrorRec: IDictionary);

	    Begin

	        Debug.WriteLine("Событие OnEndBlock:" + #13 + #10 +

	            "   Объект задачи ETL: " + Object.Name + '(' + Object.Id + ')' + #13 + #10 +

	            "   Время выполнения = " + Duration.ToString + "мс" + #13 + #10 +

	            "   Входов = " + InRec.Count.ToString +

	            "   Выходов = " + OutRec.Count.ToString +

	            "   Выходов с ошибочными записями = " + ErrorRec.Count.ToString);

	        If InRec.Count > 0 Then ShowDict("   Вход", InRec); End If;

	        If OutRec.Count > 0 Then ShowDict("   Выход", OutRec); End If;

	        If ErrorRec.Count > 0 Then ShowDict("   Выход с ошибочной записью", ErrorRec); End If;

	    End Sub OnEndBlock;

	    // Событие, наступающее в процессе выполнения задачи ETL

	    Public Sub OnProgress(Task: IEtlTask; Progress: Integer);

	    Begin

	        Debug.WriteLine("Событие OnProgress:" + #13 + #10 +

	            "   Прогресс выполнения задачи = " + Progress.ToString + '%');

	    End Sub OnProgress;

	    // Событие, наступающее при возникновении ошибки блока задачи ETL

	    Public Sub OnError(Task: IEtlTask; Object: IEtlObject; Exception: IException);

	    Begin

	        Debug.WriteLine("Событие OnError:" + #13 + #10 +

	            "   Объект задачи ETL: " + Object.Name + '(' + Object.Id + ')' + #13 + #10 +

	            "   Текст ошибки - " + Exception.Message);

	    End Sub OnError;

	    // Процедура для просмотра содержимого словарей

	    Sub ShowDict(Text: String; Dict: IDictionary);

	    Var

	        v: Variant;

	    Begin

	        For Each v In Dict.Keys Do

	            Debug.Write(Text + ' ' + v + ", записей: " + Dict.Item(v) + '.');

	        End For;

	        Debug.WriteLine("");

	    End Sub ShowDict;

	End Class EventsClass;


При наступлении событий во время выполнения задачи ETL соответствующая
 информация будет выводиться в консоль среды разработки.


См. также:


[IEtlTaskExecutionEvents](IEtlTaskExecutionEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
