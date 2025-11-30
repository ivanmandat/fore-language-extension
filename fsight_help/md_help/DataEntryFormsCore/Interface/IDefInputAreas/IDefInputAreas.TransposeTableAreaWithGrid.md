# IDefInputAreas.TransposeTableAreaWithGrid

IDefInputAreas.TransposeTableAreaWithGrid
-


# IDefInputAreas.TransposeTableAreaWithGrid


## Синтаксис


		TransposeTableAreaWithGrid(areaId: String);


## Параметры


areaId. Идентификатор табличной
 области, которую необходимо транспонировать.


## Описание


Метод TransposeTableAreaWithGrid
 транспонирует указанную табличную области и применяет изменения к отчёту
 формы ввода.


## Комментарии


При транспонировании измерения боковика перемещаются в шапку, а измерения
 шапки - в боковик. Если указанная табличная область уже была транспонирована,
 то при повторном выполнении метода измерения боковика и шапки возвращаются
 на свои места.


## Пример


Для выполнения примера предполагается наличие формы ввода, для которой
 указанный макрос назначен в качестве исполняемого метода для пользовательской
 кнопки. В форме ввода созданы листы и какие-либо области ввода.


Добавьте ссылки на системные сборки: Metabase, Report. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Public Sub Transpose(Report: IPrxReport);

		Var

		    Mb: IMetabase;

		    DEForm: IDataEntryForm;

		    Areas: IDefInputAreas;

		    TArea: IDefTableArea;

		    i, c: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    // Экземпляр текущей формы ввода

		    DEForm := New DataEntryForm.CreateByReport(Report);

		    // Получить все области ввода

		    Areas := DEForm.InputAreas;

		    c := Areas.Count - 1;

		    For i := 0 To c Do

		        // Если табличная область, то транспонировать

		        If Areas.Item(0) Is IDefTableArea Then

		            TArea := Areas.Item(0) As IDefTableArea;

		            If Not TArea.Transposed Then

		                Areas.TransposeTableAreaWithGrid(TArea.Id);

		            End If;

		        End If;

		    End For;

		End Sub Transpose;


При выполнении макроса в форме ввода будут проверены все области ввода.
 Табличные области будут транспонированы, если они не были транспонированы
 ранее.


См. также:


[IDefInputAreas](IDefInputAreas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
