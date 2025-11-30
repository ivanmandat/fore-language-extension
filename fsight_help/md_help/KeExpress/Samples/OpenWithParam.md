# Открытие экспресс-отчета с установленными параметрами куба и отметкой

Открытие экспресс-отчета с установленными параметрами куба и отметкой
-


# Открытие экспресс-отчета с установленными параметрами куба и отметкой


Ниже рассмотрен пример открытия экспресс отчета с установкой параметров
 куба и/или отметкой.


Для выполнения примера необходимо наличие экспресс-отчета, с идентификатором
 EXPRESS, созданного на кубе с параметрами.


Добавьте ссылки на системные сборки: Express, Metabase, Ui, Pivot, Dimensions.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    Obj: IMetabaseObject;

	    Params: IMetabaseObjectParamValues;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    ex: IEaxAnalyzer;

	    Pivot: IPivot;

	    Selection: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    Obj := MB.ItemById("EXPRESS").Edit;

	    ex := Obj As IEaxAnalyzer;

	    // Установим значение параметру

	    Params := ex.ParamValues;

	    Params.Item(0).Value := "15";

	    ex.ParamValues := Params;

	    // Установим отметку календарному измерению

	    Pivot := ex.Pivot;

	    Pivot.BeginSelectionUpdate;

	        Selection := Pivot.Selection.FindById("D_CALENDAR");

	        Selection.DeselectAll;

	        Selection.SelectElement(2, False);

	    Pivot.EndSelectionUpdate;

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := ex;

	    Target.Execute("ShowReporter", Context);

	End Sub Button1OnClick;


В результате выполнения примера был открыт экспресс-отчет, первому параметру
 куба было присвоено значение «15». В измерении с идентификатором D_CALENDAR
 был отмечен третий элемент измерения.


См. также:


[Примеры](Example_main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
