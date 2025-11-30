# ILaner.IdentByFact

ILaner.IdentByFact
-


# ILaner.IdentByFact


## Синтаксис


IdentByFact: Boolean;


## Описание


Свойство IdentByFact определяет,
 берутся ли данные на период идентификации по сценарию «Факт».


## Комментарии


Свойство актуально при работе с рядами из БД временных рядов в моделировании
 и прогнозировании.


Допустимые значения:


	- True. Данные на период
	 идентификации берутся по сценарию «Факт»;


	- False. Данные на период
	 идентификации берутся по сценарию, заданному для вычисляемого ряда.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В репозитории должен присутствовать контейнер моделирования с идентификатором
 «MS», содержащий задачу моделирования с идентификатором «FILLMODEL». Данная
 задача должна содержать внутреннюю метамодель, содержащую внутреннюю БД
 временных рядов и модель. Также в контейнере моделирования должен присутствовать
 сценарий с ключом «43276». Данный сценарий должен использоваться для расчёта
 задачи «FILLMODEL».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Metabase, Ms, Laner.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    wb: IMetabaseObject;

	    MsObj: IMetabaseObjectDescriptor;

	    Meta: IMsMetaModel;

	    MetaVisual: IMsMetaModelVisualController;

	    SimpleModel: IMsModel;

	    ScArr: Array Of Integer;

	    pr: IMsProblem;

	    Period: IMsModelPeriod;

	    i: Integer;

	    ChainEn: IMsCalculationChainEntries;

	    Laner: ILaner;

	Begin

	    // Получаем рабочую книгу

	    wb := UiErAnalyzer1.Object.Edit;

	    mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    MsObj := mb.ItemById("MS");

	    // Получаем задачу моделирования

	    pr := mb.ItemByIdNamespace("FILLMODEL", MsObj.Key).Bind As IMsProblem;

	    // Получаем метамодель

	    Meta := pr.MetaModel;

	    MetaVisual := Meta.VisualController;

	    // Получаем модель

	    ChainEn := Meta.CalculationChain;

	    For i := 0 To ChainEn.Count - 1 Do

	        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Model Then

	            SimpleModel := (ChainEn.Item(i) As IMsCalculationChainModel).Model;

	        End If;

	    End For;

	    // Создаем массив ключей сценариев

	    ScArr := New Integer[2];

	    ScArr[0] := -1;

	    ScArr[1] := 43276;

	    Period := SimpleModel.Period;

	    // Заполняем рабочую книгу по данным из модели

	    MetaVisual.FillWithModel(SimpleModel, ScArr, Period, Period, pr, wb);

	    wb.Save;

	    // Открываем рабочую книгу

	    Laner := (wb As IEaxAnalyzer).Laner;

	    Laner.BeginUpdate;

	    UiErAnalyzer1.Object := wb;

	    UiErAnalyzer1.Active := True;

	    // Данные для идентификации будут браться по сценарию «Факт»

	    Laner.IdentByFact := True;

	    Laner.Update;

	    Laner.EndUpdate;

	End Sub UserProc;


После выполнения примера будет открыта рабочая книга, заполненная по
 данным внутренней модели.


Результат выполнения примера: в «UiErAnalayzer1» открыта рабочая
 книга, заполненная данными внутренней модели по нескольким сценариям.
 Для расчёта данные на период идентификации будут браться по сценарию «Факт».


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
