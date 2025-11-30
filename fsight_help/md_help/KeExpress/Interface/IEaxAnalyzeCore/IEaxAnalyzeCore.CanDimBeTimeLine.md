# IEaxAnalyzeCore.CanDimBeTimeLine

IEaxAnalyzeCore.CanDimBeTimeLine
-


# IEaxAnalyzeCore.CanDimBeTimeLine


## Синтаксис


CanDimBeTimeLine(Dimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)):
 Boolean;


## Описание


Метод CanDimBeTimeLine возвращает
 признак возможности использования измерения в качестве календарного в
 отчете и в качестве временной линии карты и матрицы.


## Комментарии


Если метод возвращает False измерение
 не может использоваться как календарное и как временная линия.


Признак возможности определяется [атрибутами
 справочника](UiNavObj.chm::/reference_book/Master_Table_reference_book/UiMd_reference_book_Master_Table_page1.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	     MB: IMetabase;

	     Eax: IEaxAnalyzer;

	     Dimen: IDimInstance;

	Begin

	     MB := MetabaseClass.Active;

	     Eax := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	     Dimen := Eax.Pivot.DimItem(0);

	     Debug.WriteLine(Eax.CanDimBeTimeLine(Dimen).ToString);

	End Sub UserProc;


После выполнения примера в окне консоли будет выведено сообщение, может
 ли использоваться справочник отчета с индексом 0 в качестве временной
 линии и календарного измерения в отчете.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
