# IEaxGridDimensionSettings.Detailing

IEaxGridDimensionSettings.Detailing
-


# IEaxGridDimensionSettings.Detailing


## Синтаксис


Detailing: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Detailing определяет,
 будет ли использоваться [детализация
 данных](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm).


## Комментарии


Для получения признака того, используется ли [детализация
 данных](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm), используйте свойство [IEaxGridDimensionSettings.IsDetailing](IEaxGridDimensionSettings.IsDetailing.htm).


## Пример


Для выполнения примера разместите на форме компоненты Button и Label
 с наименованиями «Button1», «Label1» соответственно.


Добавьте ссылки на системные сборки: Express, Forms, Metabase, Pivot.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Prop: IEaxGridDimensionSettings;

	    PivotDim: IDataAreaHeaderSettingsBase;

	Begin

	    // Получим экспресс-отчёт

	    Eax := MetabaseClass.Active.Item(71208).Edit As IEaxAnalyzer;

	    // Найдем измерение источника данных с ключом 10127

	    PivotDim := Eax.Pivot.Dimensions.FindByKey(10127) As IDataAreaHeaderSettingsBase;

	    // Проверим признак детализации данных

	    Prop := Eax.Grid.ViewSettings.GetViewSettings(PivotDim) As IEaxGridDimensionSettings;

	    If Prop.IsDetailing = False Then

	        // Включим детализацию данных, если она отключена

	        Prop.Detailing := TriState.OnOption;

	        Label1.Text := "Детализация данных включена";

	    Else

	        // Отключим детализацию данных, если она включена

	        Prop.Detailing := TriState.OffOption;

	        Label1.Text := "Детализация данных выключена";

	    End If;

	    (Eax As IMetabaseObject).Save;

	End Sub Button1OnClick;


При нажатии на кнопку Button1 в компоненте Label1 будет отображено состояние
 детализации данных.


См. также:


[IEaxGridDimensionSettings](IEaxGridDimensionSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
