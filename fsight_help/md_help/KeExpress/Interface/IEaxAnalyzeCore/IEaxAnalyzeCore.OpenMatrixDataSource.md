# IEaxAnalyzeCore.OpenMatrixDataSource

IEaxAnalyzeCore.OpenMatrixDataSource
-


# IEaxAnalyzeCore.OpenMatrixDataSource


## Синтаксис


OpenMatrixDataSource(DataSource: [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm));


## Параметры


DataSource. Абстрактный многомерный
 источник данных, данные которого необходимо загрузить в экспресс-отчет.


## Описание


Метод OpenMatrixDataSource осуществляет
 загрузку в экспресс-отчет данных источника, не являющегося кубом.


## Комментарии


Вариантом такого источника являются данные переменных моделирования,
 полученные в результате расчета задачи моделирования. Доступ к данным
 переменных осуществляется посредством свойства [VariableStub](KeMs.chm::/Interface/IMsProblemCalculation/IMsProblemCalculation.VariableStub.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и каких-либо компонентов, отображающих
 данные экспресс-отчета, загруженного в «UiErAnalyzer1». В репозитории
 содержится контейнер моделирования с идентификатором KONT_MODEL. В данном
 контейнере имеется задача моделирования с идентификатором PROBLEM, настроенная
 для расчета каких-либо моделей.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Expr: IEaxAnalyzer;

	    Problem: IMsProblem;

	    Setting: IMsProblemCalculationSettings;

	    Calc: IMsProblemCalculation;

	    MDS: IMatrixDataSource;

	Begin

	    // Временный экспресс-отчет

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    Expr := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

	    // Рассчитываемая задача моделирования

	    Problem := MB.ItemByIdNamespace("PROBLEM", MB.ItemById("KONT_MODEL").Key).Bind As IMsProblem;

	    Setting := Problem.CreateCalculationSettings;

	    // Расчет задачи моделирования

	    Calc := Problem.Calculate(Setting);

	    // Данные по первой выходной переменной

	    MDS := Calc.VariableStub(Problem.VariableStubs(MsVariableKind.Output).Item(0));

	    // Загрузка в экспресс-отчет

	    Expr.OpenMatrixDataSource(MDS);

	    // Загружаем экспресс-отчет в «UiErAnalyzer1»

	    UiErAnalyzer1.ErAnalyzer := Expr;

	    UiErAnalyzer1.Active := True;

	End Sub Button1OnClick;


После выполнения примера будет осуществлен расчет задачи моделирования
 PROBLEM. Отчет по первой выходной переменной будет загружен в компонент
 «UiErAnalyzer1». Данные будут отображаться во всех компонентах, для которых
 «UiErAnalyzer1» установлен в качестве источника данных.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
