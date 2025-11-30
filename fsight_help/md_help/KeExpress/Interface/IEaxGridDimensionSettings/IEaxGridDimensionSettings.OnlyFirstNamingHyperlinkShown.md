# IEaxGridDimensionSettings.OnlyFirstNamingHyperlinkShown

IEaxGridDimensionSettings.OnlyFirstNamingHyperlinkShown
-


# IEaxGridDimensionSettings.OnlyFirstNamingHyperlinkShown


## Синтаксис


OnlyFirstNamingHyperlinkShown: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство OnlyFirstNamingHyperlinkShown
 определяет, будут ли отображаться гиперссылки только у атрибута измерения,
 который размещен первым по порядку для [отображения
 наименований элементов измерений в рабочей области](UiSelection.chm::/selection/element_names.htm#user).


## Комментарии


Для получения признака того, отображаются ли гиперссылки только у атрибута
 измерения, который размещен первым по порядку для [отображения
 наименований элементов измерений в рабочей области](UiSelection.chm::/selection/element_names.htm#user),
 используется метод [IsOnlyFirstNamingHyperlinkShown](IEaxGridDimensionSettings.IsOnlyFirstNamingHyperlinkShown.htm)


## Пример


Для выполнения примера:


	- убедитесь, что в репозитории содержится экспресс-отчёт, содержащий
	 измерения, у которого атрибуты размещены в разных столбцах;


	- разместите на форме компоненты Button, Label, UiErAnalyzer и
	 TabSheetBox с наименованиями Button1, Label1, UiErAnalyzer1 и TabSheetBox1
	 соответственно.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Metabase,
 Pivot, Tab.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Prop: IEaxGridDimensionSettings;

	    PivotDim: IDataAreaHeaderSettingsBase;

	Begin

	    // Откроем экспресс-отчёт с ключом 71208

	    Eax := MetabaseClass.Active.Item(71208).Edit As IEaxAnalyzer;

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    // Найдем измерение источника данных с ключом 10152

	    PivotDim := Eax.Pivot.Dimensions.FindByKey(10152) As IDataAreaHeaderSettingsBase;

	    // Проверим признак отображения гиперссылки у первого по порядку атрибута измерения

	    Prop := Eax.Grid.ViewSettings.GetViewSettings(PivotDim) As IEaxGridDimensionSettings;

	    If Prop.IsOnlyFirstNamingHyperlinkShown = False Then

	        // Включим отображения гиперссылки у первого по порядку атрибута измерения

	        Prop.OnlyFirstNamingHyperlinkShown := TriState.OnOption;

	        Label1.Text := "Отображение гиперссылки только у первого по порядку атрибута измерения";

	    Else

	        // Включим отображения гиперссылки у всех атрибутов измерения

	        Prop.OnlyFirstNamingHyperlinkShown := TriState.OffOption;

	        Label1.Text := "Отображение гиперссылки у всех атрибутов измерения";

	    End If;

	    (Eax As IMetabaseObject).Save;

	End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку «Button1» в компоненте
 «Label1» будет отображено состояние отображения гиперссылки у атрибутов
 измерения.


См. также:


[IEaxGridDimensionSettings](../../../kepivot/Interface/IPivotTableHeader/IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
