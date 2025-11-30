# IPrxSlice.GetRecentChanges

IPrxSlice.GetRecentChanges
-


# IPrxSlice.GetRecentChanges


## Синтаксис


GetRecentChanges: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Метод GetRecentChanges возвращает
 матрицу измененных значений среза регламентного отчета.


## Комментарии


Метод после каждого изменения данных в регламентном отчете возвращает
 новую матрицу, в которой зафиксированы текущие изменения для среза.


После сохранения данных отчета или области метод будет возвращать пустую
 матрицу.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента ReportBox и компонента
 UiReport с наименованием «UiReport1», являющегося источником данных для
 ReportBox и регламентного отчета с идентификатором «Rep_1». В инспекторе
 сборок должны быть указаны ссылки на системные сборки Report, Metabase,
 Forms, Matrix.


Пример является обработчиком события OnClick для кнопки.


	Sub TestFormOnShow(Sender: Object; Args: IEventArgs);

	Begin

	    mb:= MetabaseClass.Active;

	    report:= mb.ItemById("Rep_1").Open(Null) As Iprxreport;

	    UiReport1.Instance:= report;

	End Sub TestFormOnShow;


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    m_s :IMatrix;

	    Iter: IMatrixIterator;

	Begin

	    m_s:= report.DataSources.Item(0).Slices.Item(0).GetRecentChanges;

	    Iter := m_s.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    While Iter.Valid Do

	        Debug.Write(Iter.Value + " ");

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub Button1OnClick;


После выполнения примера при изменении данных и нажатии кнопки, измененные
 значения будут выведены в консоль.


См. также:


[IPrxSlice](IPrxSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
