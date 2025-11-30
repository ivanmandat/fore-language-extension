# История расчёта задачи: Отчёт по переменным

История расчёта задачи: Отчёт по переменным
-


# История расчета задачи: Отчет по переменным


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента UiErAnalyzer с наименованием
 UiErAnalyzer и каких-либо компонентов, отображающих данные экспресс-отчета
 загруженного в UiErAnalyzer. В репозитории в контейнере моделирования
 KONT_MODEL содержится задача PROBLEM_1. У данной задачи имеется история
 расчета.


Добавьте ссылки на системные сборки: Cubes, Express, Forms, Matrix,
 Metabase, Ms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Expr: IEaxAnalyzer;

    MDesc, HistObj: IMetabaseObjectDescriptor;

    HistChild: IMetabaseObjectDescriptors;

    Hist: IMsCalculationHistory;

    DS: IEaxDataSources;

    Problem: IMsProblem;

    VarList: IVariableStubList;

    VarStub: IVariableStub;

    Inst: ICubeInstance;

Begin

    MB := MetabaseClass.Active;

    //Создание нового пустого экспресс-отчета

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    CrInfo.Id := MB.GenerateId("NewExpress");

    CrInfo.Name := CrInfo.Id;

    CrInfo.Parent := MB.Root;

    Expr := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

    //Задача моделирования

    MDesc := MB.ItemByIdNamespace("PROBLEM_1", MB.ItemById("KONT_MODEL").Key).Bind;

    //Первая история расчета задачи

    HistObj := MDesc.Children.Item(0);

    Hist := HistObj.Bind As IMsCalculationHistory;

    HistChild := HistObj.Children;

    //Ищем сохраненную в истории задачу

    For Each MDesc In HistChild Do

        If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_MSPROBLEM Then

            Break

        End If;

    End For;

    Problem := MDesc.Bind As IMsProblem;

    //Получаем список всех переменных, входящих в задачу

    VarList := Problem.VariableStubs(MsVariableKind.All);

    DS := (Expr As IEaxDataAreaSource).VirtualSources;

    DS.BeginUpdate;

    //Загружаем, сохраненные в истории, данные переменных в отчет

    For Each VarStub In VarList Do

        Inst := ((VarStub As IMsVariable).Cube As IMetabaseObject).Open(Null) As ICubeInstance;

        DS.Add(Inst.Destinations.DefaultDestination As IMatrixDataSource);

    End For;

    DS.EndUpdate;

    //Загрузка отчета в UiErAnalyzer для просмотра

    UiErAnalyzer1.ErAnalyzer := Expr;

    UiErAnalyzer1.Active := True;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создан пустой экспресс-отчет.
 В данный отчет будут загружены данные всех переменных, используемых задачей
 и сохраненные в первой истории расчета. Данный отчет будет загружен в
 UiErAnalyzer1 и будет отображаться во всех компонентах, подключенных к
 нему.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
